import TripInfo from './view/trip-info-view';
import FilterView from './view/filter-view';
import SortView from './view/sort-view';
import EventsListPresenter from './presenter/events-list-presenter';
import { render, RenderPosition } from './render';

const tripHeaderElement = document.querySelector('.page-header');
const tripTripMainElement = tripHeaderElement.querySelector('.trip-main');
const tripFiltersElement = tripHeaderElement.querySelector('.trip-controls__filters');
const tripMainElement = document.querySelector('.page-main');
const tripEventsElement = tripMainElement.querySelector('.trip-events');
const eventsListPresenter = new EventsListPresenter({eventsListContainer: tripEventsElement});

render(new TripInfo(), tripTripMainElement, RenderPosition.AFTERBEGIN);
render(new FilterView(), tripFiltersElement);
render(new SortView(), tripEventsElement);
eventsListPresenter.init();
