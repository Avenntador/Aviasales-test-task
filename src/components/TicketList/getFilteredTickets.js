export function getFilteredTickets(tickets, filterData) {

   if (filterData.includes('all') || filterData.length === 0) return tickets;

   let filteredTickets = [];

   for (let i = 0; i < filterData.length; i++) {
      let temp = tickets.filter(ticket => {
         return ticket.segments[0].stops.length === +filterData[i] && ticket.segments[1].stops.length === +filterData[i];
      });

      filteredTickets = [...filteredTickets, ...temp];
   }

   let shuffledTickets = shuffle(filteredTickets);

   return shuffledTickets;

}   

function shuffle(array) {
   for (let i = array.length - 1; i > 0; i--) {
     let j = Math.floor(Math.random() * (i + 1));
     [array[i], array[j]] = [array[j], array[i]];
   }
   return array;
 }