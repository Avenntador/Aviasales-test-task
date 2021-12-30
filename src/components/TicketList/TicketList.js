import './TicketList.css'

import Ticket from "./Ticket/Ticket";

function TicketList() {
    return(
        <div className='ticket-list'>
            <Ticket />
            <Ticket />
            <Ticket />
            <Ticket />
        </div>
    )
}

export default TicketList;