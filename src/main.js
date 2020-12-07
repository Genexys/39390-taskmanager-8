import BoardTasks from "./components/board";
import Task from "./components/cardTask";
import TaskEdit from "./components/cardTaskEdit";
import SiteMenu from "./components/menuList";
import Filters from "./components/filter";
import ButtonLoadMore from "./components/buttonLoadMore";
import Tasks from "./components/Tasks";

import {generateFilters} from "./mock/filter";
import {generateTasks} from "./mock/task";
import {render, RenderPosition} from "./utils";

const ITEM_MENU = [`TASKS`, `ADD NEW TASK`, `STATISTIC`, `SEARCH`];

const TASK_COUNT = 22;
const SHOWING_COUNT_TASKS_COUNT_ON_START = 8;
const SHOWING_COUNT_TASKS_COUNT_BY_BUTTON = 8;

const renderTask = (taskListElement, task) => {
  const onEditButtonClick = () => {
    taskListElement.replaceChild(taskEditComponent.getElement(), taskComponent.getElement());
  };

  const onEditFormSubmit = (evt) => {
    evt.preventDefault();
    taskListElement.replaceChild(taskComponent.getElement(), taskEditComponent.getElement());
  };

  const taskComponent = new Task(task);
  const editButton = taskComponent.getElement().querySelector(`.card__btn--edit`);
  editButton.addEventListener(`click`, onEditButtonClick);

  const taskEditComponent = new TaskEdit(task);
  const editForm = taskEditComponent.getElement().querySelector(`form`);
  editForm.addEventListener(`click`, onEditFormSubmit);

  render(taskListElement, taskComponent.getElement(), RenderPosition.BEFOREEND);
};

const renderBoard = (board, tasks) => {
  render(board.getElement(), new Tasks().getElement(), RenderPosition.BEFOREEND);

  const taskListElement = board.getElement().querySelector(`.board__tasks`);

  let showingTaskCount = SHOWING_COUNT_TASKS_COUNT_ON_START;

  tasks.slice(0, showingTaskCount)
    .forEach((task) => {
      renderTask(taskListElement, task);
    });

  const loadMoreButtonComponent = new ButtonLoadMore();
  render(board.getElement(), loadMoreButtonComponent.getElement(), RenderPosition.BEFOREEND);

  loadMoreButtonComponent.getElement().addEventListener(`click`, () => {
    const prevTasksCount = showingTaskCount;
    showingTaskCount = showingTaskCount + SHOWING_COUNT_TASKS_COUNT_BY_BUTTON;

    tasks.slice(prevTasksCount, showingTaskCount)
      .forEach((task) => renderTask(taskListElement, task));

    if (showingTaskCount >= tasks.length) {
      loadMoreButtonComponent.getElement().remove();
      loadMoreButtonComponent.removeElement();
    }
  });
};

const main = document.querySelector(`.main`);
const headerElement = document.querySelector(`.main__control`);


const filters = generateFilters();
const tasks = generateTasks(TASK_COUNT);
const board = new BoardTasks();

render(headerElement, new SiteMenu(ITEM_MENU).getElement(), RenderPosition.BEFOREEND);
render(main, new Filters(filters).getElement(), RenderPosition.BEFOREEND);

render(main, board.getElement(), RenderPosition.BEFOREEND);
renderBoard(board, tasks);
