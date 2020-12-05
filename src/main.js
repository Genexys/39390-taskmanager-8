import {createTaskTemplate} from "./components/cardTask";
import {createTaskEditTemplate} from "./components/cardTaskEdit";
import {createFilterTemplate} from "./components/filter";
import {createMenuTemplate} from "./components/menu";
import {loadMore} from "./components/buttonLoadMore";
import {search} from "./components/search";
import {generateFilters} from "./mock/filter";
import {generateTasks} from "./mock/task";

const TASK_COUNT = 22;
const SHOWING_COUNT_TASKS_COUNT_ON_START = 8;
const SHOWING_COUNT_TASKS_COUNT_BY_BUTTON = 8;

const filterContainer = document.querySelector(`.main__filter`);
const searchContainer = document.querySelector(`.search`);
const board = document.querySelector(`.board`);
const boardTasks = document.querySelector(`.board__tasks`);
const menu = document.querySelector(`.control__btn-wrap`);

const filters = generateFilters();
const tasks = generateTasks(TASK_COUNT);

const createTaskCards = function (countTask) {
  boardTasks.insertAdjacentHTML(`beforeend`, createTaskTemplate());

  if (countTask > 1) {
    createTaskCards(countTask - 1);
  }
};

menu.insertAdjacentHTML(`beforeend`, createMenuTemplate(`TASKS`));
menu.insertAdjacentHTML(`beforeend`, createMenuTemplate(`ADD NEW TASK`));
menu.insertAdjacentHTML(`beforeend`, createMenuTemplate(`STATISTIC`));
menu.insertAdjacentHTML(`beforeend`, createMenuTemplate(`SEARCH`));

searchContainer.insertAdjacentHTML(`beforeend`, search());

filters.map((it, i) => filterContainer.insertAdjacentHTML(`beforeend`, createFilterTemplate(it.name, it.count, i === 0)));

let showingTasksCount = SHOWING_COUNT_TASKS_COUNT_ON_START;

tasks.forEach((task, i) => {
  if (i === 0) {
    boardTasks.insertAdjacentHTML(`beforeend`, createTaskEditTemplate(task));
  } else {
    boardTasks.insertAdjacentHTML(`beforeend`, createTaskTemplate(task));
  }
});

board.insertAdjacentHTML(`beforeend`, loadMore());

const loadMoreBtn = board.querySelector(`.load-more`);

loadMoreBtn.addEventListener(`click`, () => {
  const prevTasksCount = showingTasksCount;
  showingTasksCount = showingTasksCount + SHOWING_COUNT_TASKS_COUNT_BY_BUTTON;

  tasks.slice(prevTasksCount, showingTasksCount).forEach((task) => boardTasks.insertAdjacentHTML(`beforeend`, createTaskTemplate(task)));

  if (showingTasksCount >= tasks.length) {
    loadMoreBtn.remove();
  }
});

// const allFilter = document.querySelectorAll(`.filter__input`);
//
// for (const filter of allFilter) {
//   filter.addEventListener(`click`, function () {
//     boardTasks.innerHTML = ``;
//     // generateTasks(Math.floor(Math.random(10) * 10));
//   });
// }
