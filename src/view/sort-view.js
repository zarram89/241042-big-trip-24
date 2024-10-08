import { createElement } from '../render';
import { capitalizeFirstLetter } from '../utils';
import { SORT_TYPES } from '../const';

function createSortingItemTemplate(type) {
  return(`
    <div class="trip-sort__item  trip-sort__item--${type}">
      <input id="sort-${type}" class="trip-sort__input  visually-hidden" type="radio" name="trip-sort" value="sort-${type}" checked>
      <label class="trip-sort__btn" for="sort-${type}">${capitalizeFirstLetter(type)}</label>
    </div>`
  );
}

function createSortTemplate() {
  return(`
    <form class="trip-events__trip-sort  trip-sort" action="#" method="get">
      ${SORT_TYPES.map((type) => createSortingItemTemplate(type)).join('')}
    </form>`
  );
}

export default class SortView {
  getTemplate() {
    return createSortTemplate();
  }

  getElement(){
    if(!this.element) {
      this.element = createElement(this.getTemplate());
    }

    return this.element;
  }

  removeElement() {
    this.element = null;
  }
}
