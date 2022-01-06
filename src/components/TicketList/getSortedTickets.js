export function getSortedTickets(tickets, sortQuery) {

    switch (sortQuery) {
        case "cheap":
            return cheapSort(tickets);
        case "fast":
            return fastSort(tickets);
        case "optimum":
            return optimumSort(tickets);
    }
}

function cheapSort(array) {
    return array.sort((a, b) => {
        return a.price - b.price;
    })
}

function fastSort(array) {
    return array.sort((a, b) => {
        const aDuration = a.segments[0].duration + a.segments[1].duration;
        const bDuration = b.segments[0].duration + b.segments[1].duration;

        return aDuration - bDuration;
    })
}

function optimumSort(array) {
    return array.sort((a, b) => {
        //dont know what's is optimum
        return 1;
    })
}