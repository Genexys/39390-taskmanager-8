export const search = () => {
  return `<input
          type="text"
          id="search__input"
          class="search__input search__input--hidden"
          placeholder="START TYPING — SEARCH BY WORD, #HASHTAG OR DATE"
        />
        <label class="visually-hidden" for="search__input">Поиск</label>`;
};
