const FILTER_TYPES = [
  'everything',
  'future',
  'present',
  'past',
];

const SORT_TYPES = [
  'day',
  'event',
  'time',
  'price',
  'offers',
];

const DESTINATIONS = [
  'Amsterdam',
  'Geneva',
  'Chamonix',
];

const EVENT_TYPES = [
  'taxi',
  'bus',
  'train',
  'ship',
  'drive',
  'flight',
  'check-in',
  'sightseeing',
  'restaurant',
];

const OFFER_TYPES = [
  {
    type: 'luggage',
    title: 'add luggage',
    price: 30,
    isChecked: true,
  },
  {
    type: 'comfort',
    title: 'switch to comfort class',
    price: 100,
    isChecked: true,
  },
  {
    type: 'meal',
    title: 'add meal',
    price: 15,
    isChecked: false,
  },
  {
    type: 'seats',
    title: 'choose seats',
    price: 5,
    isChecked: false,
  },
  {
    type: 'train',
    title: 'travel by train',
    price: 40,
    isChecked: false,
  }
];


export {FILTER_TYPES, SORT_TYPES, DESTINATIONS, EVENT_TYPES, OFFER_TYPES};
