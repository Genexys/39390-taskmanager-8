export const createMenuTemplate = (caption, isChecked = false) => {

  const arrCaption = caption.split(` `);
  let transformCaption;

  if (arrCaption.length > 1) {
    transformCaption = arrCaption.join(`-`);
  }

  return `
        <input
            type="radio"
            name="control"
            id="control__${caption || transformCaption.toLowerCase()}"
            class="control__input visually-hidden"
            ${isChecked ? `checked` : ``}
          />
        <label for="control__${caption || transformCaption.toLowerCase()}" class="control__label">${caption}</label>
      `;
};
