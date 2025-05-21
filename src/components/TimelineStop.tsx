
import { Stop } from "../types/guide";
import { MapPin, Lightbulb } from "lucide-react";

interface TimelineStopProps {
  stop: Stop;
  isLast?: boolean;
}

const TimelineStop: React.FC<TimelineStopProps> = ({ stop, isLast = false }) => {
  // Map of activity types to emojis
  const getEmoji = () => {
    if (stop.emoji) return stop.emoji;
    
    if (stop.title.includes("Drive")) return "🚗";
    if (stop.title.includes("Breakfast") || stop.title.includes("Lunch") || stop.title.includes("Dinner")) return "🍽️";
    if (stop.title.includes("Beach") || stop.title.includes("swim")) return "🏖️";
    if (stop.title.includes("Walk") || stop.title.includes("Hike") || stop.title.includes("stroll")) return "🥾";
    if (stop.title.includes("View") || stop.title.includes("Scenic")) return "🌄";
    if (stop.title.includes("Museum") || stop.title.includes("Chapel") || stop.title.includes("Church")) return "🏛️";
    if (stop.title.includes("Market")) return "🛍️";
    if (stop.title.includes("Coffee") || stop.title.includes("café")) return "☕";
    if (stop.title.includes("Wine") || stop.title.includes("winery") || stop.title.includes("vineyard")) return "🍷";
    if (stop.title.includes("Ferry") || stop.title.includes("Boat")) return "⛴️";
    if (stop.title.includes("Bike") || stop.title.includes("Cycle")) return "🚲";
    if (stop.title.includes("Check-in") || stop.title.includes("Hotel")) return "🏨";
    return "📍";
  };

  // Get a photo URL based on the stop title
  const getStopPhotoUrl = () => {
    if (stop.title.includes("Beach") || stop.title.includes("swim")) {
      return "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&w=400&q=60";
    } else if (stop.title.includes("Museum") || stop.title.includes("Fondation")) {
      return "https://images.unsplash.com/photo-1518998053901-5348d3961a04?auto=format&fit=crop&w=400&q=60";
    } else if (stop.title.includes("Market") || stop.title.includes("Shop")) {
      return "https://images.unsplash.com/photo-1533900298318-6b8da08a523e?auto=format&fit=crop&w=400&q=60";
    } else if (stop.title.includes("Dinner") || stop.title.includes("Lunch")) {
      return "https://images.unsplash.com/photo-1502364271109-0a9a75a2a9df?auto=format&fit=crop&w=400&q=60";
    } else if (stop.title.includes("View") || stop.title.includes("lookout")) {
      return "https://images.unsplash.com/photo-1469474968028-56623f02e42e?auto=format&fit=crop&w=400&q=60";
    } else if (stop.title.includes("Perfume") || stop.title.includes("Fragonard")) {
      return "https://images.unsplash.com/photo-1608848461950-0fe51dfc41cb?auto=format&fit=crop&w=400&q=60";
    }
    return null;
  };

  const emoji = getEmoji();
  const photoUrl = getStopPhotoUrl();

  // Get additional context about the stop
  const getAdditionalContext = () => {
    if (stop.title.includes("Picasso")) {
      return "Pablo Picasso lived in Antibes in 1946 and donated several works to this museum.";
    } else if (stop.title.includes("Fragonard")) {
      return "Grasse has been the world's perfume capital since the 17th century.";
    } else if (stop.title.includes("Notre-Dame")) {
      return "This beautiful beach has been voted one of Europe's most beautiful beaches.";
    } else if (stop.title.includes("Fondation Maeght")) {
      return "This prestigious art foundation opened in 1964 and features works by many notable 20th century artists.";
    } else if (stop.title.includes("Saint-Paul-de-Vence")) {
      return "This medieval village has been a haven for artists since the 1920s.";
    }
    return null;
  };

  const additionalContext = getAdditionalContext();

  return (
    <div className="relative pl-8 pb-8">
      {!isLast && <div className="timeline-line" />}
      <div className="timeline-dot" />
      
      <div className="bg-white/70 backdrop-blur-sm rounded-lg p-4 shadow-sm hover:shadow-md transition-all duration-300">
        <div className="flex justify-between items-start mb-1">
          <span className="font-semibold text-provence-lavender flex items-center gap-1">
            <span>{stop.time}</span>
            <span className="text-lg">{emoji}</span>
          </span>
          {stop.priority && (
            <span className={`text-xs px-2 py-0.5 rounded-full ${
              stop.priority === "must-see" ? "bg-provence-peach/70" :
              stop.priority === "recommended" ? "bg-provence-blue/40" :
              "bg-provence-gray/50"
            }`}>
              {stop.priority}
            </span>
          )}
        </div>
        <h3 className="text-lg font-semibold mb-1">{stop.title}</h3>
        
        {stop.town && (
          <div className="flex items-center gap-1 text-sm text-provence-lavender/80 mb-2">
            <MapPin size={14} />
            <span>{stop.town}</span>
          </div>
        )}
        
        {photoUrl && (
          <div className="my-3 rounded-md overflow-hidden h-36">
            <img 
              src={photoUrl} 
              alt={stop.title} 
              className="w-full h-full object-cover hover:scale-105 transition-transform duration-700"
            />
          </div>
        )}
        
        {additionalContext && (
          <div className="bg-provence-terracotta/10 p-3 rounded-md mb-3 text-sm italic">
            {additionalContext}
          </div>
        )}
        
        <div className="mt-3 space-y-3">
          <div className="bg-provence-blue/10 p-3 rounded-md">
            <p className="text-sm">
              <span className="font-medium">Expect: </span> 
              {stop.expect}
            </p>
          </div>
          
          <div className="bg-provence-terracotta/20 p-3 rounded-md">
            <div className="flex items-start gap-2">
              <Lightbulb size={16} className="text-provence-terracotta mt-0.5 shrink-0" />
              <p className="text-sm">
                <span className="font-medium">Tip: </span> 
                {stop.tip}
              </p>
            </div>
          </div>
          
          {(stop.cost || stop.duration || stop.reservation !== undefined) && (
            <div className="grid grid-cols-3 gap-2 text-xs mt-2">
              {stop.duration && (
                <div className="bg-provence-olive/30 p-2 rounded-md flex flex-col items-center">
                  <span className="font-medium">Duration</span>
                  <span>{stop.duration}</span>
                </div>
              )}
              
              {stop.cost && (
                <div className="bg-provence-gray/30 p-2 rounded-md flex flex-col items-center">
                  <span className="font-medium">Cost</span>
                  <span>{stop.cost}</span>
                </div>
              )}
              
              {stop.reservation !== undefined && (
                <div className="bg-provence-peach/20 p-2 rounded-md flex flex-col items-center">
                  <span className="font-medium">Reservation</span>
                  <span>{stop.reservation ? "Required" : "Not needed"}</span>
                </div>
              )}
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default TimelineStop;
