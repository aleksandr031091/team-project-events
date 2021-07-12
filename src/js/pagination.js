import Pagination from 'tui-pagination';
// import 'tui-pagination/dist/tui-pagination.css';
import apiEvents from '../js/service/api';
import renderGallery from './gallery';

// apiEvents.fetchEvents().then(events => {
//   const options = {
//     totalItems: events.page.totalElements,
//     itemsPerPage: events.page.size,
//     visiblePages: 5,
//     page: events.page.number + 1,
//     centerAlign: false,
//     firstItemClassName: 'tui-first-child',
//     lastItemClassName: 'tui-last-child',
//   };

//   const pagination = new Pagination('pagination', options);

//   pagination.on('afterMove', event => {
//     apiEvents.page = event.page - 1;
//     // apiEvents.page = 2000;
//     apiEvents.fetchEvents().then(events => {
//       console.log(events);
//       renderGallery(events);
//     });
//   });
//   renderGallery(events);
// });

function setPagination(totalItems) {
  apiEvents.size = 20; //window.innerWidth
  console.log(totalItems);
  const options = {
    totalItems,
    itemsPerPage: apiEvents.size, // window.innerWidth

    visiblePages: 4, // window.innerWidth
    page: 1,
    centerAlign: false,
    // firstItemClassName: 'tui-first-child',
    // lastItemClassName: 'tui-last-child',
  };

  const pagination = new Pagination('pagination', options);

  pagination.on('afterMove', event => {
    apiEvents.page = event.page - 1;
    apiEvents.fetchEvents().then(events => {
      console.log(events);
      renderGallery(events);
    });
  });
}
