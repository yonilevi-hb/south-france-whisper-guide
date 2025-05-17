
export interface Stop {
  time: string;
  title: string;
  expect: string;
  tip: string;
  location?: string;
  duration?: string;
  cost?: string;
  reservation?: boolean;
  priority?: "must-see" | "recommended" | "optional";
}

export interface Day {
  date: string;
  title: string;
  concept: string;
  stops: Stop[];
  weather?: string;
  drivingDistance?: string;
  notes?: string;
}

export interface TravelGuide {
  days: Day[];
  emergencyContacts?: {
    police: string;
    ambulance: string;
    tourist?: string;
  };
  generalTips?: string[];
}
