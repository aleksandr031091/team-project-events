const API_KEY = 'iMT6lnWYsBtdSwl0jr9udmE86Jo5qsGK';

const BASE_URL = `https://app.ticketmaster.com/discovery/v2/events.json`;

const page = '';

// const fetchEvents = async (BASE_URL, API_KEY) => {
//   const url = `${BASE_URL}?size=10&apikey=${API_KEY}`;
//   const events = await fetch(url);

//   return events.json();
// };

// fetchEvents().then(data => console.log(data));

function fetchEvents() {
  const url = `${BASE_URL}?page=${page}0&apikey=${API_KEY}`;
  return fetch(url).then(res => res.json());
  // .then(data => console.log(data));
}
fetchEvents().then(data => console.log(data));
// export { fetchEvents };
