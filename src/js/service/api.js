const API_KEY = 'iMT6lnWYsBtdSwl0jr9udmE86Jo5qsGK';

const BASE_URL = 'https://app.ticketmaster.com/discovery/v2/events';

class Api {
  constructor() {
    this._size = 20;
    this._page = 0;
    this._totalPage = 0;
    this._keyword = '';
    this._countryCode = '';
  }

  fetchEvents = async () => {
    const url = `${BASE_URL}.json?keyword=${this.keyword}&sort=random&countryCode=${this.countryCode}&size=${this.size}&page=${this.page}&apikey=${API_KEY}`;

    try {
      const apiRes = await fetch(url);
      const events = await apiRes.json();
      return events;
    } catch (error) {
      console.log(error);
    }
  };

  fetchEventsById = async id => {
    const url = `${BASE_URL}/${id}.json?&apikey=${API_KEY}`;
    try {
      const apiRes = await fetch(url);
      const datailsEvent = await apiRes.json();

      return datailsEvent;
    } catch (error) {
      console.log(error);
    }
  };

  get size() {
    return this._size;
  }

  set size(newSize) {
    this._size = newSize;
  }

  get pageNumber() {
    return this._page;
  }

  set pageNumber(newPage) {
    this._page = newPage;
  }

  get keyword() {
    return this._keyword;
  }

  set keyword(newKeyword) {
    this._keyword = newKeyword;
  }

  get countryCode() {
    return this._countryCode;
  }

  set countryCode(newCountryCode) {
    this._countryCode = newCountryCode;
  }

  get page() {
    return this._page;
  }

  set page(newPage) {
    this._page = newPage;
  }

  get totalPage() {
    this._totalPage;
  }

  set totalPage(newTotalPage) {
    this._totalPage = newTotalPage;
  }

  resetPage() {
    this.page = 0;
  }

  incrementPage() {
    this.page += 1;
  }

  decrementPage() {
    this.page -= 1;
  }
}

const apiEvents = new Api();

export default apiEvents;

