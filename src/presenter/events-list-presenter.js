import EventsListView from '../view/events-list-view';
import EditPointView from '../view/edit-point-view';
// import NewPointView from '../view/new-point-view';
import PointView from '../view/point-view';
import { render } from '../render';

export default class EventsListPresenter {
  EventsListComponent = new EventsListView();

  constructor({eventsListContainer}) {
    this.eventsListContainer = eventsListContainer;
  }

  init() {
    render(this.EventsListComponent, this.eventsListContainer);
    render(new EditPointView(), this.EventsListComponent.getElement());

    for (let i = 0; i < 3; i++) {
      render(new PointView(), this.EventsListComponent.getElement());
    }
  }
}
