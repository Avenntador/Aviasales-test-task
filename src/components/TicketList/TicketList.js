import './TicketList.css'
import axios from 'axios';
import Ticket from "./Ticket/Ticket";
import { useState, useEffect } from 'react';
import { getFilteredTickets } from './getFilteredTickets';
import { getSortedTickets } from './getSortedTickets'

function TicketList({ selectedFilter, selectedCost}) {

    const [searchId, setSearchId] = useState('');
    const [tickets, setTickets] = useState([]);
    const [ticketShowAmount, setTicketShowAmount] = useState(5);
    const [ticketsStop, setTicketsStop] = useState(false);
    
    useEffect(() => {
        getSearchId();
    }, [ticketsStop])
   

    const getSearchId = async () => {
        axios.get('https://front-test.beta.aviasales.ru/search')  
            .then(response => {
                setSearchId(response.data.searchId);
                getTicketsFromServer(response.data.searchId);
                if (ticketsStop) setTicketsStop(false);
            })
    }

    const getTickets = () => {
        if (tickets) {
            return getSortedTickets(getFilteredTickets(tickets, selectedFilter), selectedCost);
        }
    }

    const getTicketsFromServer = async (searchId) => {
        if (searchId && !ticketsStop) {
            try {
                let tickets = await axios.get(`https://front-test.beta.aviasales.ru/tickets?searchId=${searchId}`);
                if (tickets.data.stop) setTicketsStop(true);
                setTickets(prev => [...prev, ...tickets.data.tickets]);
            } catch (e) {
                if (e.response.status === 500) {
                    setTimeout(() => {
                        getTicketsFromServer(searchId);
                    }, 500);
                } else {
                    setTicketsStop(true);
                    console.log('SOMETHING GOES WRONG ================');
                }      
            }
        }   
    }

    const showMoreTickets = () => {
        console.log(getTickets().length)
        if (getTickets().length <= ticketShowAmount) {
            getTicketsFromServer(searchId);
            setTicketShowAmount(5);
        } else {
            setTicketShowAmount(prev => prev += 5);
        }
    }

    return (
        <div className='ticket-list'>
            {getTickets() ? getTickets().map((ticket, idx) => {
                if (idx < ticketShowAmount) {
                    return <Ticket key={ticket.price.toString() + ticket.carrier} ticket={ticket} />
                }
             }) 
             : 
             "NO TICKETS"}
            <button onClick={showMoreTickets} className='btn'>ПОКАЗАТЬ ЕЩЕ 5 БИЛЕТОВ!</button>
        </div>
    )
}

export default TicketList;