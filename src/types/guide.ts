
export interface Stop {
  time: string;
  title: string;
  expect: string;
  tip: string;
}

export interface Day {
  date: string;
  title: string;
  concept: string;
  stops: Stop[];
}

export interface TravelGuide {
  days: Day[];
}
