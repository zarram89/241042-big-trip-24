import { getRandomPoint } from '../mock/point';
import { mockDestinations } from '../mock/destination';
import { mockOffers } from '../mock/offer';

const POINT_COUNT = 4;

export default class PointsModel {
  points = Array.from({length: POINT_COUNT}, getRandomPoint);
  destinations = mockDestinations;
  offers = mockOffers;

  getPoints() {
    return this.points;
  }

  getDestinations() {
    return this.destinations;
  }

  getOffers() {
    return this.offers;
  }
}
