
export interface Stop {
  time: string;
  title: string;
  expect: string;
  tip: string;
  location?: string;
  town?: string;
  duration?: string;
  cost?: string;
  reservation?: boolean;
  priority?: "must-see" | "recommended" | "optional";
  emoji?: string;
  photo?: string;
}

export interface Day {
  date: string;
  title: string;
  concept: string;
  stops: Stop[];
  weather?: string;
  drivingDistance?: string;
  notes?: string;
  emoji?: string;
  hotel?: {
    name: string;
    address: string;
    mapsLink: string;
  };
  highlights?: Array<{
    title: string;
    description: string;
    image: string;
    tips: string[];
  }>;
  localSpecialties?: string[];
  shoppingRecommendations?: string[];
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
