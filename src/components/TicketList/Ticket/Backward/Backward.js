import { getFlightDate } from '../Utility/getFlightDate'

function Backward({ backward }) {

    const transfers = backward.stops.length === 0 ? '-' : backward.stops.reduce((prev, current) => `${prev}, ${current}`);
    const transfersAmount = backward.stops.length === 0 ? 'БЕЗ ПЕРЕСАДОК' : `${backward.stops.length} ПЕРЕСАДКИ`;

    const dateObj = getFlightDate(backward.date, backward.duration);

    return (
        <div className='ticket__backward'>
            <div className='ticket__departure'>
                <p className='ticket__topic'>{backward.origin} - {backward.destination}</p>
                <p className='ticket__desc'>{dateObj.departureTime} - {dateObj.arrivalTime}</p>
            </div>
            <div className='ticket__duration'>
                <p className='ticket__topic'>В ПУТИ</p>
                <p className='ticket__desc'>{dateObj.flightDuration}</p>
            </div>
            <div className='ticket__transfers'>
                <p className='ticket__topic'>{transfersAmount}</p>
                <p className='ticket__desc'>{transfers}</p>
            </div>
        </div>
    )
}

export default Backward;
