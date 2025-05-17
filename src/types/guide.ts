
export interface Stop {
  time: string;
  title: string;
  expect: string;
  tip: string;
  location?: string;
  town?: string;  // Added town field
  duration?: string;
  cost?: string;
  reservation?: boolean;
  priority?: "must-see" | "recommended" | "optional";
  emoji?: string;  // Added emoji field
}

export interface Day {
  date: string;
  title: string;
  concept: string;
  stops: Stop[];
  weather?: string;
  drivingDistance?: string;
  notes?: string;
  emoji?: string;  // Added emoji field
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
