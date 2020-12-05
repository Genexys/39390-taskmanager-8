export const createFilterTemplate = (caption, count, isChecked = false) => {
  return `
    <input
        type="radio"
        id="filter__${caption.toLowerCase()}"
        class="filter__input visually-hidden"
        name="${caption.toLowerCase()}"
        ${isChecked ? `checked` : ``}
      />
      <label for="filter__${caption.toLowerCase()}" class="filter__label">
      ${caption} <span class="filter__${caption.toLowerCase()}-count">${count}</span></label
      >
  `;
};
