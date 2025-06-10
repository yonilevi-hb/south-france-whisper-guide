import { Stop } from "../types/guide";
import { MapPin, Lightbulb, Navigation, Clock, Euro, Users, Star } from "lucide-react";

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
    if (stop.photo) return stop.photo;
    
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

  const emoji = stop.emoji || "📍";
  const photoUrl = stop.photo || getStopPhotoUrl();

  // Enhanced cultural context function
  const getCulturalContext = () => {
    if (stop.title.includes("Picasso")) {
      return {
        title: "Artistic Legacy",
        content: "Pablo Picasso lived in Antibes in 1946, creating his 'Joie de Vivre' period. The Château Grimaldi became his studio, where Mediterranean light transformed his artistic vision. He donated 23 paintings and 44 ceramics to the museum as gratitude for his time here.",
        icon: "🎨"
      };
    } else if (stop.title.includes("Fragonard") || stop.title.includes("perfume")) {
      return {
        title: "Perfume Capital Heritage",
        content: "Grasse became the world's perfume capital in the 16th century when Catherine de Medici's glove-makers began scenting leather. The unique microclimate and skilled 'noses' (master perfumers) have created legendary fragrances for centuries.",
        icon: "🌹"
      };
    } else if (stop.title.includes("Saint-Paul-de-Vence")) {
      return {
        title: "Artists' Haven",
        content: "This medieval village became an artistic sanctuary in the 1920s. Artists like Chagall, Matisse, and Picasso were drawn by the unique light, protective ramparts, and creative community that flourished behind ancient walls.",
        icon: "🎭"
      };
    } else if (stop.title.includes("lavender") || stop.title.includes("Valensole")) {
      return {
        title: "Lavender Legacy",
        content: "Valensole plateau produces 80% of France's lavender. Harvested in July, the essential oil requires 150kg of flowers to produce 1kg of oil. Romans first cultivated lavender here for medicinal purposes and bath perfumes.",
        icon: "💜"
      };
    } else if (stop.title.includes("Moustiers")) {
      return {
        title: "Faience Tradition",
        content: "Moustiers faience pottery began in 1668 when a monk brought the technique from Italy. The mysterious suspended star legend claims a Crusader knight hung it in gratitude for safe return, though historians debate its true origins.",
        icon: "⭐"
      };
    } else if (stop.title.includes("Porquerolles")) {
      return {
        title: "Protected Paradise",
        content: "Porquerolles became France's first national park island in 1963. The car-free environment preserves unique Mediterranean ecosystems where rare plants and seabirds thrive undisturbed.",
        icon: "🏝️"
      };
    }
    return null;
  };

  // Photography tips based on location and time
  const getPhotographyTips = () => {
    const hour = parseInt(stop.time.split(':')[0]);
    const tips = [];

    if (stop.title.includes("sunset") || stop.title.includes("ramparts") || hour >= 18) {
      tips.push("Golden hour lighting perfect for romantic portraits");
      tips.push("Bring tripod for low-light shots");
    }
    
    if (stop.title.includes("market") || stop.title.includes("pottery")) {
      tips.push("Capture authentic artisan moments - ask permission first");
      tips.push("Close-up shots of textures and details tell great stories");
    }
    
    if (stop.title.includes("view") || stop.title.includes("panoramic")) {
      tips.push("Use wide-angle lens for landscape shots");
      tips.push("Include foreground elements for depth");
    }
    
    if (stop.title.includes("beach") || stop.title.includes("swim")) {
      tips.push("Underwater camera for snorkeling shots");
      tips.push("Capture reflections in wet sand during golden hour");
    }

    return tips;
  };

  // Local interaction suggestions
  const getLocalInteractions = () => {
    if (stop.title.includes("market")) {
      return [
        "Ask vendors about regional specialties and preparation methods",
        "Learn basic French food vocabulary - vendors appreciate the effort",
        "Sample before buying - most vendors offer tastings"
      ];
    } else if (stop.title.includes("village") || stop.title.includes("Old Town")) {
      return [
        "Greet locals with 'Bonjour' - essential French politeness",
        "Ask for directions to hidden viewpoints or local favorites",
        "Visit during evening aperitif time for authentic atmosphere"
      ];
    } else if (stop.title.includes("restaurant") || stop.title.includes("dinner")) {
      return [
        "Ask sommelier for wine pairings with regional specialties",
        "Request explanation of dishes - chefs love sharing their passion",
        "Compliment with 'C'était délicieux' to show appreciation"
      ];
    }
    return [];
  };

  const culturalContext = getCulturalContext();
  const photoTips = getPhotographyTips();
  const localInteractions = getLocalInteractions();

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
      
      <div className="bg-white/90 backdrop-blur-sm rounded-xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-100">
        <div className="flex justify-between items-start mb-3">
          <span className="font-bold text-provence-lavender flex items-center gap-2 text-lg">
            <Clock className="w-5 h-5" />
            <span>{stop.time}</span>
            <span className="text-2xl">{emoji}</span>
          </span>
          {stop.priority && (
            <span className={`text-xs px-3 py-1 rounded-full font-semibold shadow-sm ${
              stop.priority === "must-see" ? "bg-gradient-to-r from-provence-peach to-red-400 text-white" :
              stop.priority === "recommended" ? "bg-gradient-to-r from-provence-blue to-blue-400 text-white" :
              "bg-provence-gray/50 text-gray-700"
            }`}>
              {stop.priority === "must-see" && <Star className="w-3 h-3 inline mr-1" />}
              {stop.priority.replace('-', ' ')}
            </span>
          )}
        </div>
        <h3 className="text-xl font-bold mb-2 text-gray-900">{stop.title}</h3>
        
        {stop.town && (
          <div className="flex items-center gap-2 text-sm text-provence-lavender/80 mb-3">
            <MapPin size={16} />
            <span className="font-medium">{stop.town}</span>
          </div>
        )}
        
        {/* Enhanced address section */}
        {stop.address && !stop.title.includes("Drive") && (
          <div className="my-4 text-sm bg-provence-blue/10 p-4 rounded-xl border border-provence-blue/20">
            <div className="flex items-start gap-3">
              <MapPin size={16} className="shrink-0 text-provence-blue mt-0.5" />
              <div className="flex-1">
                <p className="font-medium text-gray-800">{stop.address}</p>
                {stop.mapsLink && (
                  <a 
                    href={stop.mapsLink} 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="mt-2 inline-flex items-center gap-2 text-provence-blue hover:bg-provence-blue hover:text-white transition-colors text-xs bg-provence-blue/20 py-2 px-3 rounded-full font-semibold"
                  >
                    <Navigation size={12} /> 
                    <span>Open in Google Maps</span>
                  </a>
                )}
              </div>
            </div>
          </div>
        )}
        
        {/* Enhanced photo section */}
        {photoUrl && (
          <div className="my-4 rounded-xl overflow-hidden shadow-md">
            <img 
              src={photoUrl} 
              alt={stop.title} 
              className="w-full h-48 object-cover hover:scale-105 transition-transform duration-700"
            />
          </div>
        )}
        
        {/* Cultural context section */}
        {culturalContext && (
          <div className="bg-gradient-to-r from-provence-terracotta/20 to-provence-peach/20 p-4 rounded-xl mb-4 border border-provence-terracotta/30">
            <div className="flex items-start gap-3">
              <span className="text-2xl">{culturalContext.icon}</span>
              <div>
                <h4 className="font-bold text-provence-terracotta mb-2">{culturalContext.title}</h4>
                <p className="text-sm leading-relaxed text-gray-800">{culturalContext.content}</p>
              </div>
            </div>
          </div>
        )}
        
        {/* Main content sections */}
        <div className="space-y-4">
          <div className="bg-provence-blue/10 p-4 rounded-xl border border-provence-blue/20">
            <h4 className="font-bold text-provence-blue mb-2 flex items-center gap-2">
              <span>🎯</span> What to Expect
            </h4>
            <p className="text-sm leading-relaxed text-gray-800">{stop.expect}</p>
          </div>
          
          <div className="bg-provence-olive/20 p-4 rounded-xl border border-provence-olive/30">
            <div className="flex items-start gap-3">
              <Lightbulb size={18} className="text-provence-olive mt-0.5 shrink-0" />
              <div>
                <h4 className="font-bold text-provence-olive mb-2">Insider Tip</h4>
                <p className="text-sm leading-relaxed text-gray-800">{stop.tip}</p>
              </div>
            </div>
          </div>
          
          {/* Photography tips */}
          {photoTips.length > 0 && (
            <div className="bg-purple-50 p-4 rounded-xl border border-purple-200">
              <h4 className="font-bold text-purple-700 mb-2 flex items-center gap-2">
                <span>📸</span> Photography Tips
              </h4>
              <ul className="text-sm space-y-1">
                {photoTips.map((tip, index) => (
                  <li key={index} className="flex items-start gap-2 text-gray-800">
                    <span className="text-purple-500 mt-1">•</span>
                    <span>{tip}</span>
                  </li>
                ))}
              </ul>
            </div>
          )}
          
          {/* Local interaction tips */}
          {localInteractions.length > 0 && (
            <div className="bg-green-50 p-4 rounded-xl border border-green-200">
              <h4 className="font-bold text-green-700 mb-2 flex items-center gap-2">
                <Users size={16} />
                Local Interaction Tips
              </h4>
              <ul className="text-sm space-y-1">
                {localInteractions.map((tip, index) => (
                  <li key={index} className="flex items-start gap-2 text-gray-800">
                    <span className="text-green-500 mt-1">•</span>
                    <span>{tip}</span>
                  </li>
                ))}
              </ul>
            </div>
          )}
          
          {/* Enhanced practical info */}
          {(stop.cost || stop.duration || stop.reservation !== undefined) && (
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 mt-4">
              {stop.duration && (
                <div className="bg-provence-gray/30 p-3 rounded-xl flex flex-col items-center text-center border border-gray-200">
                  <Clock className="w-5 h-5 text-gray-600 mb-1" />
                  <span className="font-bold text-xs text-gray-600">Duration</span>
                  <span className="font-semibold text-sm text-gray-800">{stop.duration}</span>
                </div>
              )}
              
              {stop.cost && (
                <div className="bg-yellow-100 p-3 rounded-xl flex flex-col items-center text-center border border-yellow-200">
                  <Euro className="w-5 h-5 text-yellow-600 mb-1" />
                  <span className="font-bold text-xs text-yellow-600">Cost</span>
                  <span className="font-semibold text-sm text-yellow-800">{stop.cost}</span>
                </div>
              )}
              
              {stop.reservation !== undefined && (
                <div className="bg-provence-peach/30 p-3 rounded-xl flex flex-col items-center text-center border border-provence-peach/40">
                  <span className="text-lg mb-1">{stop.reservation ? "📞" : "🚶"}</span>
                  <span className="font-bold text-xs text-provence-peach">Reservation</span>
                  <span className="font-semibold text-sm text-gray-800">
                    {stop.reservation ? "Required" : "Walk-in"}
                  </span>
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
