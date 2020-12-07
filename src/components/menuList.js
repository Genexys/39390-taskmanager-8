import {createElement} from "../utils";

const createItemElement = (caption, isChecked = false) => {

  const arrCaption = caption.split(` `);
  let transformCaption;

  if (arrCaption.length > 1) {
    transformCaption = arrCaption.join(`-`);
  }

  return `<input
            type="radio"
            name="control"
            id="control__${caption.toLowerCase() || transformCaption.toLowerCase()}"
            class="control__input visually-hidden"
            ${isChecked ? `checked` : ``}
          />
        <label for="control__${caption.toLowerCase() || transformCaption.toLowerCase()}" class="control__label">${caption}</label>`;
};

const createMenuTemplate = (menuItems) => {

  const menuItem = menuItems.map((el) => createItemElement(el)).join(``);

  return `<section class="control__btn-wrap">${menuItem}</section>`;
};

export default class SiteMenu {
  constructor(menuItems) {
    this._menuItems = menuItems;

    this._element = null;
  }

  getTemplate() {
    return createMenuTemplate(this._menuItems);
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
