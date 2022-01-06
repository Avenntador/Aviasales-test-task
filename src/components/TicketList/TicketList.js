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

    useEffect(() => {
        axios.get('https://front-test.beta.aviasales.ru/search')
            .then(response => {
                setSearchId(response.data.searchId);
                getTickets(response.data.searchId);    
            })
    }, [])

    useEffect(() => {
        getTickets(searchId);
    }, [selectedFilter, selectedCost])

    const getTickets = async (searchId) => {
        if (searchId) {
            try {
                let tickets = await axios.get(`https://front-test.beta.aviasales.ru/tickets?searchId=${searchId}`);
                let filteredTickets = getSortedTickets(getFilteredTickets(tickets.data.tickets, selectedFilter), selectedCost);
                setTickets(filteredTickets);
            } catch (e) {
                setTimeout(() => {
                    getTickets(searchId);
                }, 500);
            }
        }   
    }

    const showMoreTickets = () => {
        setTicketShowAmount(prev => prev += 5);
    }

    return (
        <div className='ticket-list'>
            {tickets.map((ticket, idx) => {
                if (idx < ticketShowAmount) {
                    return <Ticket key={ticket.price.toString() + ticket.carrier} ticket={ticket} />
                }
            })}
            <button onClick={showMoreTickets} className='btn'>ПОКАЗАТЬ ЕЩЕ 5 БИЛЕТОВ!</button>
        </div>
    )
}

export default TicketList;