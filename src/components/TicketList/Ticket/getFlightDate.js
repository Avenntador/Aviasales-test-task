export function getFlightDate(flightDate, duration) {
    const date = new Date(flightDate);
    const arrivalDate = new Date(date.getTime() + (duration * 60000));

    const departure = `${lessThanTen(date.getUTCHours())}:${lessThanTen(date.getMinutes())}`;
    const arrival = `${lessThanTen(arrivalDate.getUTCHours())}:${lessThanTen(arrivalDate.getMinutes())}`;
    const durationFlight = `${lessThanTen(Math.floor(duration / 60))}ч ${lessThanTen(duration - ((Math.floor(duration / 60)) * 60))}м`;

    return {
        departureTime: departure,
        arrivalTime: arrival,
        flightDuration: durationFlight
    }
}

function lessThanTen(date) {
    let dateStr = date.toString();
    if (dateStr.length < 2) return `0${dateStr}`;
    return dateStr;
}