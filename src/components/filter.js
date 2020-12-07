import {createElement} from "../utils";

const createFilterItem = ({name, count, isChecked = false}) => {
  return `
    <input
        type="radio"
        id="filter__${name.toLowerCase()}"
        class="filter__input visually-hidden"
        name="${name.toLowerCase()}"
        ${isChecked ? `checked` : ``}
      />
      <label for="filter__${name.toLowerCase()}" class="filter__label">
      ${name} <span class="filter__${name.toLowerCase()}-count">${count}</span></label
      >
  `;
};

const createFilterTemplate = (filters) => {
  const filterItem = filters.map((el) => createFilterItem(el)).join(``);

  return `<div class="main__filter filter container">${filterItem}</div>`;
};

export default class Filters {
  constructor(filters) {
    this._filters = filters;

    this._element = null;
  }

  getTemplate() {
    return createFilterTemplate(this._filters);
  }

  getElement() {
    if (!this._element) {
      this._element = createElement(this.getTemplate());
    }

    return this._element;
  }

  removeElement() {
    this._element = null;
  }
}
