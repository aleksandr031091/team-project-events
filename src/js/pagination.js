import Pagination from 'tui-pagination';
// import 'tui-pagination/dist/tui-pagination.css';
import apiEvents from '../js/service/api';

apiEvents.fetchEvents().then(events => {
  console.log(events);
  console.log(events.page.totalPages);
  console.log(events.page.size);
  console.log(events.page.number);
  const options = {
    totalItems: events.page.totalElements,
    itemsPerPage: events.page.size,
    visiblePages: 5,
    page: events.page.number + 1,
    centerAlign: false,
    firstItemClassName: 'tui-first-child',
    lastItemClassName: 'tui-last-child',
  };
  const pagination = new Pagination('pagination', options);

  pagination.on('afterMove', event => {
    const currentPage = event.page;
    console.log(currentPage);
  });
});

// const pagination = new Pagination('pagination', options);

export default pagination;
