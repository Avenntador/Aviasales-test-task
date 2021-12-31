import './TicketList.css'

import Ticket from "./Ticket/Ticket";
import { useState, useEffect } from 'react';
import axios from 'axios';
import CostBar from '../CostBar/CostBar';


function TicketList({ searchId }) {
    const [tickets, seTickets] = useState([]);

    useEffect(() => {
        if (searchId) {
            getTickets(searchId)
        }
    }, [searchId])

    const getTickets = async (searchId) => {
        axios.get(`https://front-test.beta.aviasales.ru/tickets?searchId=${searchId}`)
            .then(response => seTickets(prev => [...prev, ...response.data.tickets]))
    }

    return (
        <div className='ticket-list'>
            <Ticket />
        </div>
    )
}

export default TicketList;