import Pagination from 'tui-pagination';
import apiEvents from '../js/service/api';
import renderGallery from './gallery';

function setPagination(totalItems) {
  apiEvents.size = 20;
  const options = {
    totalItems: totalItems < 1000 ? totalItems : 1000,
    itemsPerPage: apiEvents.size,

    visiblePages: window.innerWidth < 768 ? 3 : 5,
    page: 1,
    centerAlign: true,
  };

  const pagination = new Pagination('pagination', options);

  pagination.on('afterMove', event => {
    apiEvents.page = event.page - 1;
    apiEvents.fetchEvents().then(events => {
      renderGallery(events);
    });
  });
}

export default setPagination;
