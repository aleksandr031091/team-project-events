const API_KEY = 'iMT6lnWYsBtdSwl0jr9udmE86Jo5qsGK';

const BASE_URL = `https://app.ticketmaster.com/discovery/v2/events`;

// const totalPage = 1;

export const fetchEvents = async () => {
  const url = `${BASE_URL}.json?&apikey=${API_KEY}`;
  const API = await fetch(url);
  // .then(data => console.log(data));
  return API.json();
};

export const fetchEventsBykeyword = async (keyword, countryCode) => {
  const url = `${BASE_URL}.json?keyword=${keyword}&countryCode=${countryCode}&apikey=${API_KEY}`;
  const API = await fetch(url);

  // console.log(events);
  return API.json();
};

export const fetchEventsById = async id => {
  const url = `${BASE_URL}/${id}.json?&apikey=${API_KEY}`;
  const API = await fetch(url);

  // console.log(events);
  return API.json();
};

// import { fetchEventsBykeyword, fetchEvents, fetchEventsById } from './service/api';
// const keyword = 'Rock Fest';
// const countryCode = 'US';
// const id = 'G5v0ZpnSL0wtY';
// // fetchEventsBykeyword(keyword, countryCode).then(res => console.log(res));

// // fetchEvents().then(res => console.log(res));

// fetchEventsById(id).then(res => console.log(res));
