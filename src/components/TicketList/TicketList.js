import './TicketList.css'

import Ticket from "./Ticket/Ticket";
import { useState, useEffect } from 'react';
import axios from 'axios';


function TicketList() {

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

    const getTickets = async (searchId) => {
        try {
            let tickets = await axios.get(`https://front-test.beta.aviasales.ru/tickets?searchId=${searchId}`)
            setTickets(tickets.data.tickets)
        } catch(e) {
            console.log("================");
            console.log('Error with ' + e);
            console.log('Please reload page');
            console.log("================");
        }
    }

    const showMoreTickets = () => {
        setTicketShowAmount(prev => prev+=5);
    }

    return (
        <div className='ticket-list'>
            {tickets.map((ticket, idx) => {
                if (idx < ticketShowAmount ) {
                    return <Ticket key={ticket.price.toString() + ticket.carrier} ticket={ticket} />
                }
            })}
            <button onClick={showMoreTickets} className='btn'>ПОКАЗАТЬ ЕЩЕ 5 БИЛЕТОВ!</button>
        </div>
    )
}

export default TicketList;