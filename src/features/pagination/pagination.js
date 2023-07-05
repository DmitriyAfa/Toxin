import PaginationSystem from 'pagination-system';

function makePagination(item) {
  const dataContainer = item.querySelector('.js-list-cards')
  const pagingContainer = item.querySelector('.js-paging-container')

  const variant = item.dataset.variant

  console.log(variant)

  const dataRenderFn = (dataPage) => {

    if (variant === 'example') {
      return '';
    }

    return `${dataPage
      .map(
        (item) =>
          `<div class="js-pagination__card pagination__card card">
            <div class="card-post">
              <div class="card-item-title">
                <span class="item-counter">${item.id}</span>
                <span class="item-title">${item.title
            .split(' ')
            .slice(0, 3)
            .join(' ')}</span>
              </div>
              <p class="item-body">${item.body}</p>
            </div>
          </div>`
      )
      .join('')}`;
  };

  const options = {
    dataContainer: dataContainer,
    dataRenderFn: dataRenderFn,
    childSelector: '.js-pagination__card',
    url: 'https://jsonplaceholder.typicode.com/posts', // test server url
    urlParams: {
      limit: '_limit',
      pageNumber: '_page',
    },
    dimmerSelector: 'js-dimmer',
    pagingContainer: pagingContainer,
    perPage: 10,
    isShowPerPage: false,
    countRecords: 100,
  };

  new PaginationSystem(options);
}

export { makePagination }