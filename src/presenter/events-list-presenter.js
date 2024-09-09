import EventsListView from '../view/events-list-view';
import SortView from '../view/sort-view';
import EditPointView from '../view/edit-point-view';
// import NewPointView from '../view/new-point-view';
import PointView from '../view/point-view';
import { render } from '../render';

export default class EventsListPresenter {
  eventsListComponent = new EventsListView();

  constructor({container, pointsModel}) {
    this.eventsListContainer = container;
    this.pointsModel = pointsModel;
  }

  init() {
    this.eventsListPoints = [...this.pointsModel.getPoints()];

    render(this.eventsListComponent, this.eventsListContainer);
    render(new SortView(), this.eventsListComponent.getElement());
    render(new EditPointView({
      point: this.eventsListPoints[0]
    }), this.eventsListComponent.getElement());
    // render(new NewPointView(), this.eventsListComponent.getElement());

    for (let i = 1; i < this.eventsListPoints.length; i++) {
      render(new PointView({point: this.eventsListPoints[i]}), this.eventsListComponent.getElement());
    }
  }
}
