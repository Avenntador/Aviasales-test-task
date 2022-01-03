import './Ticket.css'

import Thither from './Thither/Thither';
import Backward from './Backward/Backward';

function Ticket({ ticket }) {

    const thither = ticket.segments[0];
    const backward = ticket.segments[1];

    return (
        <div className='ticket'>
            <div className='ticket__title'>
                <p className='ticket__cost'>{ticket.price} P</p>
                <img src={`https://pics.avs.io/99/36/${ticket.carrier}.png`} alt="image here" />
            </div>
            <div className='ticket__info'>
                <Thither  thither={thither}/>
                <Backward backward={backward}/>
            </div>
        </div>
    )
}

export default Ticket;