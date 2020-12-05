import {createCardTemplate} from "./components/cardTask";
import {createFilterTemplate} from "./components/filter";
import {createMenuTemplate} from "./components/menu";
import {loadMore} from "./components/buttonLoadMore";
import {search} from "./components/search";

const filterContainer = document.querySelector(`.main__filter`);
const searchContainer = document.querySelector(`.search`);
const board = document.querySelector(`.board`);
const boardTasks = document.querySelector(`.board__tasks`);
const menu = document.querySelector(`.control__btn-wrap`);

const createTaskCards = function (countTask) {
  boardTasks.insertAdjacentHTML(`beforeend`, createCardTemplate());

  if (countTask > 1) {
    createTaskCards(countTask - 1);
  }
};

menu.insertAdjacentHTML(`beforeend`, createMenuTemplate(`TASKS`));
menu.insertAdjacentHTML(`beforeend`, createMenuTemplate(`ADD NEW TASK`));
menu.insertAdjacentHTML(`beforeend`, createMenuTemplate(`STATISTIC`));
menu.insertAdjacentHTML(`beforeend`, createMenuTemplate(`SEARCH`));

searchContainer.insertAdjacentHTML(`beforeend`, search());

filterContainer.insertAdjacentHTML(`beforeend`, createFilterTemplate(`All`, 2));
filterContainer.insertAdjacentHTML(`beforeend`, createFilterTemplate(`OVERDUE`, 3));
filterContainer.insertAdjacentHTML(`beforeend`, createFilterTemplate(`TODAY`, 5));
filterContainer.insertAdjacentHTML(`beforeend`, createFilterTemplate(`FAVORITES`, 15));
filterContainer.insertAdjacentHTML(`beforeend`, createFilterTemplate(`REPEATING`, 34));
filterContainer.insertAdjacentHTML(`beforeend`, createFilterTemplate(`TAGS`, 0));
filterContainer.insertAdjacentHTML(`beforeend`, createFilterTemplate(`ARCHIVE`, 65));

boardTasks.insertAdjacentHTML(`beforeend`, createCardTemplate());
boardTasks.insertAdjacentHTML(`beforeend`, createCardTemplate());
boardTasks.insertAdjacentHTML(`beforeend`, createCardTemplate());
boardTasks.insertAdjacentHTML(`beforeend`, createCardTemplate());
boardTasks.insertAdjacentHTML(`beforeend`, createCardTemplate());
boardTasks.insertAdjacentHTML(`beforeend`, createCardTemplate());
boardTasks.insertAdjacentHTML(`beforeend`, createCardTemplate());

board.insertAdjacentHTML(`beforeend`, loadMore());

const allFilter = document.querySelectorAll(`.filter__input`);

for (const filter of allFilter) {
  filter.addEventListener(`click`, function () {
    boardTasks.innerHTML = ``;
    createTaskCards(Math.floor(Math.random(10) * 10));
  });
}
