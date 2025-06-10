
import React from 'react';
import { Lightbulb, MapPin, Navigation, Camera, Users, Clock } from 'lucide-react';

interface PlaceHighlightProps {
  highlight: {
    title: string;
    description: string;
    image: string;
    tips: string[];
    address?: string;
    mapsLink?: string;
  }
}

const PlaceHighlight: React.FC<PlaceHighlightProps> = ({ highlight }) => {
  // Generate additional context based on the highlight
  const getVisitingDetails = () => {
    if (highlight.title.includes("Market")) {
      return {
        bestTime: "Early morning (8-10am) for freshest selection",
        duration: "45 minutes to 1 hour",
        cost: "Free to browse, €10-30 for purchases",
        crowdLevel: "Moderate on weekdays, busy on weekends"
      };
    } else if (highlight.title.includes("Museum")) {
      return {
        bestTime: "Late afternoon for best lighting",
        duration: "1-2 hours for full visit",
        cost: "€6-16 depending on exhibitions",
        crowdLevel: "Busiest 11am-3pm, quieter mornings/evenings"
      };
    } else if (highlight.title.includes("Grasse") || highlight.title.includes("Perfume")) {
      return {
        bestTime: "Mid-morning when tours begin",
        duration: "45 minutes to 1 hour",
        cost: "Free tours, workshops €20-40",
        crowdLevel: "Moderate year-round"
      };
    } else if (highlight.title.includes("Porquerolles")) {
      return {
        bestTime: "Early ferry (8:30am) to avoid crowds",
        duration: "Full day recommended",
        cost: "€21 ferry + €18 bike rental",
        crowdLevel: "Very busy in summer afternoons"
      };
    }
    return null;
  };

  const visitingDetails = getVisitingDetails();

  return (
    <div className="bg-white/90 shadow-lg rounded-xl overflow-hidden hover:shadow-xl transition-all duration-300 border border-gray-100">
      <div className="flex flex-col lg:flex-row">
        <div className="lg:w-2/5 h-64 lg:h-auto relative overflow-hidden">
          <img 
            src={highlight.image} 
            alt={highlight.title}
            className="w-full h-full object-cover hover:scale-105 transition-transform duration-700"
          />
          <div className="absolute top-4 right-4">
            <div className="bg-black/20 backdrop-blur-sm rounded-full p-2">
              <Camera className="w-5 h-5 text-white" />
            </div>
          </div>
        </div>
        
        <div className="p-6 lg:w-3/5 flex flex-col">
          <h4 className="text-xl font-bold mb-3 text-gray-900">{highlight.title}</h4>
          <p className="text-gray-700 mb-4 leading-relaxed flex-grow">{highlight.description}</p>
          
          {/* Enhanced address section */}
          {highlight.address && (
            <div className="mb-4 p-4 bg-provence-blue/10 rounded-xl border border-provence-blue/20">
              <div className="flex items-start gap-3">
                <MapPin size={16} className="shrink-0 text-provence-blue mt-0.5" />
                <div className="flex-1">
                  <p className="text-sm font-medium text-gray-800">{highlight.address}</p>
                  {highlight.mapsLink && (
                    <a 
                      href={highlight.mapsLink} 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="mt-2 inline-flex items-center gap-2 text-provence-blue hover:bg-provence-blue hover:text-white transition-colors text-xs bg-provence-blue/20 py-2 px-3 rounded-full font-semibold"
                    >
                      <Navigation size={12} /> 
                      <span>Open in Maps</span>
                    </a>
                  )}
                </div>
              </div>
            </div>
          )}
          
          {/* Visiting details */}
          {visitingDetails && (
            <div className="grid grid-cols-2 gap-3 mb-4">
              <div className="bg-green-50 p-3 rounded-lg border border-green-200">
                <div className="flex items-center gap-2 mb-1">
                  <Clock className="w-4 h-4 text-green-600" />
                  <span className="text-xs font-bold text-green-600">Best Time</span>
                </div>
                <p className="text-xs text-green-800">{visitingDetails.bestTime}</p>
              </div>
              
              <div className="bg-blue-50 p-3 rounded-lg border border-blue-200">
                <div className="flex items-center gap-2 mb-1">
                  <span className="text-blue-600">⏱️</span>
                  <span className="text-xs font-bold text-blue-600">Duration</span>
                </div>
                <p className="text-xs text-blue-800">{visitingDetails.duration}</p>
              </div>
              
              <div className="bg-yellow-50 p-3 rounded-lg border border-yellow-200">
                <div className="flex items-center gap-2 mb-1">
                  <span className="text-yellow-600">💰</span>
                  <span className="text-xs font-bold text-yellow-600">Cost</span>
                </div>
                <p className="text-xs text-yellow-800">{visitingDetails.cost}</p>
              </div>
              
              <div className="bg-purple-50 p-3 rounded-lg border border-purple-200">
                <div className="flex items-center gap-2 mb-1">
                  <Users className="w-4 h-4 text-purple-600" />
                  <span className="text-xs font-bold text-purple-600">Crowds</span>
                </div>
                <p className="text-xs text-purple-800">{visitingDetails.crowdLevel}</p>
              </div>
            </div>
          )}
          
          {/* Enhanced tips section */}
          <div className="bg-provence-terracotta/10 p-4 rounded-xl border border-provence-terracotta/20">
            <div className="flex items-center gap-2 mb-3">
              <Lightbulb className="w-5 h-5 text-provence-terracotta" />
              <span className="font-bold text-provence-terracotta">Insider Tips</span>
            </div>
            
            <ul className="space-y-2">
              {highlight.tips.map((tip, index) => (
                <li key={index} className="flex items-start gap-3 text-sm">
                  <span className="text-provence-terracotta font-bold min-w-[20px] mt-0.5">{index + 1}.</span>
                  <span className="leading-relaxed text-gray-800">{tip}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PlaceHighlight;
