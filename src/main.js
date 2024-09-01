import TripInfo from './view/trip-info-view';
import FilterView from './view/filter-view';
import SortView from './view/sort-view';
import EventsListView from './view/events-list-view';
import EditPointView from './view/edit-point-view';
import PointView from './view/point-view';
import NewPointView from './view/new-point-view';
import { render, RenderPosition } from './render';

const tripHeaderElement = document.querySelector('.page-header');
const tripTripMainElement = tripHeaderElement.querySelector('.trip-main');
const tripFiltersElement = tripHeaderElement.querySelector('.trip-controls__filters');
const tripMainElement = document.querySelector('.page-main');
const tripEventsElement = tripMainElement.querySelector('.trip-events');


render(new FilterView(), tripFiltersElement);
render(new TripInfo(), tripTripMainElement, RenderPosition.AFTERBEGIN);
render(new SortView(), tripEventsElement);
render(new EventsListView(), tripEventsElement);
//Проверка что все экземпляры классов Point отрисуются
const tripEventsListElement = tripEventsElement.querySelector('.trip-events__list');

render(new EditPointView(), tripEventsListElement);
render(new NewPointView(), tripEventsListElement);
render(new PointView(), tripEventsListElement);
