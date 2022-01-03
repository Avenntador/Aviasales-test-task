import { getFlightDate } from '../Utility/getFlightDate'

function Thither({ thither }) {

    const transfers = thither.stops.length === 0 ? '-' : thither.stops.reduce((prev, current) => `${prev}, ${current}`);
    const transfersAmount = thither.stops.length === 0 ? 'БЕЗ ПЕРЕСАДОК' : `${thither.stops.length} ПЕРЕСАДКИ`;

    const dateObj = getFlightDate(thither.date, thither.duration);

    return (
        <div className='ticket__thither'>
            <div className='ticket__departure'>
                <p className='ticket__topic'>{thither.origin} - {thither.destination}</p>
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

export default Thither;
