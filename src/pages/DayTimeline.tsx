import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { Day } from "../types/guide";
import { getGuideData } from "../utils/storage";
import { formatDate } from "../utils/date";
import TripHeader from "../components/TripHeader";
import TimelineStop from "../components/TimelineStop";
import { Calendar, MapPin, Hotel, Info, Sun, Utensils, Gift, Lightbulb, Award, Navigation, Camera, Clock, Star } from "lucide-react";
import PlaceHighlight from "../components/PlaceHighlight";

const DayTimeline = () => {
  const { date } = useParams<{ date: string }>();
  const [dayData, setDayData] = useState<Day | null>(null);
  const [loading, setLoading] = useState(true);
  
  useEffect(() => {
    const loadData = async () => {
      try {
        const guideData = await getGuideData();
        const day = guideData.days.find(d => d.date === date);
        setDayData(day || null);
      } catch (error) {
        console.error("Error loading data:", error);
      } finally {
        setLoading(false);
      }
    };
    
    loadData();
  }, [date]);
  
  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="animate-pulse text-center">
          <p className="text-muted-foreground">Loading day details...</p>
        </div>
      </div>
    );
  }
  
  if (!dayData) {
    return (
      <div>
        <TripHeader showBack={true} />
        <div className="container px-4 py-8 text-center">
          <h2 className="text-xl font-semibold">Day not found</h2>
          <p className="mt-2 text-muted-foreground">
            We couldn't find the day you're looking for.
          </p>
        </div>
      </div>
    );
  }

  // Get a relevant image for the day based on locations
  const getDayImage = () => {
    if (dayData.title.includes("Porquerolles")) {
      return "https://images.unsplash.com/photo-1500375592092-40eb2168fd21?auto=format&fit=crop&w=600&q=80";
    } else if (dayData.title.includes("Moustiers")) {
      return "https://images.unsplash.com/photo-1470071459604-3b5ec3a7fe05?auto=format&fit=crop&w=600&q=80";
    } else if (dayData.title.includes("Grasse")) {
      return "https://images.unsplash.com/photo-1465146344425-f00d5f5c8f07?auto=format&fit=crop&w=600&q=80";
    } else if (dayData.title.includes("Hyères")) {
      return "https://images.unsplash.com/photo-1482938289607-e9573fc25abb?auto=format&fit=crop&w=600&q=80";
    } else if (dayData.title.includes("Nice")) {
      return "https://images.unsplash.com/photo-1469474968028-56623f02e42e?auto=format&fit=crop&w=600&q=80";
    }
    return "https://images.unsplash.com/photo-1472396961693-142e6e269027?auto=format&fit=crop&w=600&q=80";
  };
  
  // Generate location-specific highlights based on the day title
  const getLocationHighlights = () => {
    if (dayData.title.includes("Antibes")) {
      return [
        {
          title: "Picasso Museum",
          description: "Former Grimaldi Castle housing Picasso's works created during his stay in 1946",
          image: "https://images.unsplash.com/photo-1598908314732-07113901949e?auto=format&fit=crop&w=600&q=80",
          tips: ["Go early to avoid crowds", "Don't miss the terrace view of the sea"],
          address: "Place Mariejol, 06600 Antibes, France",
          mapsLink: "https://maps.app.goo.gl/7amknF1UXY2aMk4p8"
        },
        {
          title: "Marché Provençal",
          description: "Bustling market with local produce, olives, spices, and Provençal crafts",
          image: "https://images.unsplash.com/photo-1533900298318-6b8da08a523e?auto=format&fit=crop&w=600&q=80",
          tips: ["Visit before noon for the best selection", "Try the lavender honey and olive tapenade"],
          address: "12 Cours Masséna, 06600 Antibes, France",
          mapsLink: "https://maps.app.goo.gl/dZXsGARF5A89UhF7A"
        }
      ];
    } else if (dayData.title.includes("Grasse")) {
      return [
        {
          title: "Fragonard Perfume Factory",
          description: "Historic perfumery offering tours of production and a museum of scent",
          image: "https://images.unsplash.com/photo-1608848461950-0fe51dfc41cb?auto=format&fit=crop&w=600&q=80",
          tips: ["Book the workshop to create your own perfume", "The gift shop has unique souvenirs"],
          address: "20 Bd Fragonard, 06130 Grasse, France",
          mapsLink: "https://maps.app.goo.gl/EecbByz99AhMExJP6"
        }
      ];
    } else if (dayData.title.includes("Porquerolles")) {
      return [
        {
          title: "Plage Notre Dame",
          description: "Often ranked among the most beautiful beaches in Europe",
          image: "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&w=600&q=80",
          tips: ["Arrive early for the best spot", "Bring your own water and snacks"],
          address: "Plage Notre Dame, Île de Porquerolles, 83400 Hyères, France",
          mapsLink: "https://maps.app.goo.gl/RZnSK1Z6xkDwaxzW6"
        }
      ];
    } else if (dayData.title.includes("Saint-Paul-de-Vence")) {
      return [
        {
          title: "Fondation Maeght",
          description: "Modern art museum with works by Miró, Chagall, Giacometti and more",
          image: "https://images.unsplash.com/photo-1582555172866-f73bb12a2ab3?auto=format&fit=crop&w=600&q=80",
          tips: ["Don't miss the sculpture garden", "Allow at least 2 hours to explore"],
          address: "623 Chem. des Gardettes, 06570 Saint-Paul-de-Vence, France",
          mapsLink: "https://maps.app.goo.gl/xRwyjjeZqGkhLssv9"
        }
      ];
    } else if (dayData.title.includes("Moustiers")) {
      return [
        {
          title: "Notre-Dame de Beauvoir Chapel",
          description: "Historic 12th-century chapel with panoramic views of the valley",
          image: "https://images.unsplash.com/photo-1504175401824-04277424cb50?auto=format&fit=crop&w=600&q=80",
          tips: ["The hike takes about 20 minutes", "Try to go early morning or late afternoon for the best light"],
          address: "Notre-Dame de Beauvoir, 04360 Moustiers-Sainte-Marie, France", 
          mapsLink: "https://maps.app.goo.gl/cPqEqZidwG9wEb8G9"
        }
      ];
    }
    return [];
  };

  // Get local specialties to try based on location
  const getLocalSpecialties = () => {
    if (dayData.title.includes("Nice")) {
      return ["Socca (chickpea pancake)", "Pissaladière (onion tart)", "Salade Niçoise", "Pan Bagnat"];
    } else if (dayData.title.includes("Antibes") || dayData.title.includes("Grasse")) {
      return ["Tapenade on fresh bread", "Fougasse bread", "Rose and lavender flavored treats", "Calisson sweets"];
    } else if (dayData.title.includes("Moustiers")) {
      return ["Lavender honey", "Olive oil from local mills", "Truffles", "Alpine cheeses"];
    } else if (dayData.title.includes("Toulon") || dayData.title.includes("Porquerolles")) {
      return ["Bouillabaisse", "Fresh seafood", "Tarte Tropézienne", "Rosé wine from Provence"];
    }
    return ["Provençal rosé wine", "Fresh Mediterranean seafood", "Local goat cheese", "Olive products"];
  };
  
  // Get shopping recommendations based on location
  const getShoppingRecommendations = () => {
    if (dayData.title.includes("Grasse")) {
      return ["Artisanal perfumes", "Scented soaps", "Lavender sachets", "Scented candles"];
    } else if (dayData.title.includes("Moustiers")) {
      return ["Hand-painted faience ceramics", "Provençal fabrics", "Lavender products", "Local honey"];
    } else if (dayData.title.includes("Antibes")) {
      return ["Local art", "Provençal tablecloths", "Olive wood kitchen items", "Artisanal olive oils"];
    }
    return ["Provençal herbs", "Local wines", "Artisanal olive oils", "Lavender products"];
  };

  // Get detailed cultural context based on location
  const getCulturalContext = () => {
    if (dayData.title.includes("Antibes")) {
      return {
        title: "Cultural Heritage of Antibes",
        content: "Antibes has been inhabited for over 2,400 years, originally founded by the Greeks as 'Antipolis' (the city opposite Nice). The old town retains its Provençal charm with narrow cobblestone streets, colorful shutters, and traditional markets. The ramparts offer stunning views of the Baie des Anges, and the town has inspired countless artists including Picasso, who spent several months here in 1946.",
        highlights: ["Ancient Greek foundations", "Picasso's creative period", "Traditional Provençal architecture", "Maritime heritage"]
      };
    } else if (dayData.title.includes("Grasse")) {
      return {
        title: "The World's Perfume Capital",
        content: "Grasse has been the world's perfume capital since the 17th century. The city's perfect climate and surrounding fields of jasmine, roses, and lavender made it ideal for flower cultivation. Famous perfume houses like Fragonard, Molinard, and Galimard still operate here, creating some of the world's finest fragrances. The traditional methods of distillation and enfleurage are still practiced today.",
        highlights: ["300+ years of perfume tradition", "Jasmine and rose fields", "Traditional extraction methods", "Home to luxury perfume houses"]
      };
    } else if (dayData.title.includes("Saint-Paul-de-Vence")) {
      return {
        title: "Artist's Haven in Medieval Provence",
        content: "This fortified medieval village has been a magnet for artists since the 1920s. Marc Chagall, who lived here for 19 years, is buried in the local cemetery. The village has inspired painters like Monet, Renoir, and Picasso. The famous hotel-restaurant La Colombe d'Or displays original works by artists who traded paintings for meals and lodging.",
        highlights: ["Medieval fortifications", "Artist colony since 1920s", "Chagall's final resting place", "Art-for-food tradition at La Colombe d'Or"]
      };
    }
    return null;
  };

  // Get photography tips based on locations
  const getPhotographyTips = () => {
    const tips = [];
    if (dayData.title.includes("Antibes")) {
      tips.push("Golden hour at the ramparts creates magical silhouettes against the sea");
      tips.push("Capture the contrast between ancient stones and modern yachts in the harbor");
    }
    if (dayData.title.includes("Grasse")) {
      tips.push("Visit perfume gardens in early morning when flowers glisten with dew");
      tips.push("The old town's steep streets create beautiful leading lines");
    }
    if (dayData.title.includes("Saint-Paul-de-Vence")) {
      tips.push("The village walls provide perfect frames for valley views");
      tips.push("Evening light through narrow alleys creates dramatic shadows");
    }
    if (dayData.title.includes("Porquerolles")) {
      tips.push("Crystal clear water creates perfect reflections of the sky");
      tips.push("Pine trees against turquoise water make for iconic Mediterranean shots");
    }
    return tips;
  };

  // Get time-specific recommendations with improved contrast
  const getTimeSpecificTips = () => {
    return [
      {
        time: "Early Morning (7-9am)",
        tip: "Best time for photography with soft light and fewer crowds. Markets are setting up, locals are having their morning coffee."
      },
      {
        time: "Late Morning (9-12pm)", 
        tip: "Perfect for outdoor activities and sightseeing. Museums and attractions are open, but not yet crowded."
      },
      {
        time: "Afternoon (12-4pm)",
        tip: "Many shops close for lunch break (12:30-2:30pm). Great time for a leisurely meal or beach relaxation."
      },
      {
        time: "Late Afternoon (4-7pm)",
        tip: "Shops reopen, perfect for shopping and exploration. The light starts getting golden for photos."
      },
      {
        time: "Evening (7pm+)",
        tip: "Apéro time! Join locals for pre-dinner drinks. Restaurants open around 7:30pm for dinner."
      }
    ];
  };
  
  const localHighlights = getLocationHighlights();
  const localSpecialties = dayData.localSpecialties || getLocalSpecialties();
  const shoppingRecommendations = dayData.shoppingRecommendations || getShoppingRecommendations();
  const culturalContext = getCulturalContext();
  const photographyTips = getPhotographyTips();
  const timeSpecificTips = getTimeSpecificTips();
  
  return (
    <div className="pb-12">
      <TripHeader showBack={true} title={dayData.title} />
      
      <div className="container px-4 py-6">
        <div className="mb-6">
          <div className="w-full h-48 rounded-lg mb-6 overflow-hidden">
            <img 
              src={getDayImage()} 
              alt={dayData.title} 
              className="w-full h-full object-cover"
            />
          </div>
          
          <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-2 mb-4">
            <h2 className="text-xl font-bold flex items-center gap-2">
              <Calendar className="w-5 h-5 text-provence-lavender" />
              {formatDate(dayData.date)}
            </h2>
            
            {dayData.weather && (
              <div className="flex items-center gap-1 text-sm bg-provence-blue/20 px-3 py-1 rounded-full">
                <Sun className="w-4 h-4" />
                <span>{dayData.weather}</span>
              </div>
            )}
          </div>
          
          {/* Hotel information */}
          {dayData.hotel && (
            <div className="bg-provence-lavender/30 p-6 rounded-lg mb-6 border-l-4 border-provence-lavender shadow-md">
              <div className="flex flex-col">
                <div className="flex items-center mb-3">
                  <Hotel className="w-6 h-6 mr-2 text-provence-lavender shrink-0" />
                  <h3 className="font-bold text-lg text-provence-lavender">Tonight's Accommodation</h3>
                </div>
                <div className="ml-8 space-y-2">
                  <p className="text-lg font-semibold">{dayData.hotel.name}</p>
                  <p className="text-sm text-gray-700">{dayData.hotel.address}</p>
                  <a 
                    href={dayData.hotel.mapsLink} 
                    target="_blank" 
                    rel="noopener noreferrer" 
                    className="inline-flex items-center px-3 py-1.5 bg-provence-blue/20 rounded-full text-sm font-medium text-provence-blue hover:bg-provence-blue/30 transition-colors mt-1"
                  >
                    <Navigation className="w-4 h-4 mr-1" />
                    View on Google Maps
                  </a>
                </div>
              </div>
            </div>
          )}
          
          <div className="bg-white/50 backdrop-blur-sm p-4 rounded-lg mb-6">
            <p className="text-lg font-medium">{dayData.concept}</p>
            
            {dayData.drivingDistance && (
              <div className="mt-2 text-sm flex items-center">
                <span className="mr-1">🚗</span>
                <span>Total driving: {dayData.drivingDistance}</span>
              </div>
            )}
          </div>

          {/* Cultural Context */}
          {culturalContext && (
            <div className="bg-provence-terracotta/20 p-6 rounded-lg mb-6">
              <h3 className="text-lg font-semibold mb-3 flex items-center gap-2">
                <Award className="w-5 h-5 text-provence-terracotta" />
                <span>{culturalContext.title}</span>
              </h3>
              <p className="text-sm mb-4 leading-relaxed">{culturalContext.content}</p>
              <div className="grid grid-cols-2 gap-2">
                {culturalContext.highlights.map((highlight, index) => (
                  <div key={index} className="bg-white/70 p-3 rounded-lg flex items-center gap-2">
                    <Star className="w-4 h-4 text-provence-terracotta" />
                    <span className="text-sm">{highlight}</span>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* Photography Tips */}
          {photographyTips.length > 0 && (
            <div className="bg-provence-blue/20 p-6 rounded-lg mb-6">
              <h3 className="text-lg font-semibold mb-3 flex items-center gap-2">
                <Camera className="w-5 h-5 text-provence-blue" />
                <span>Photography Opportunities</span>
              </h3>
              <div className="space-y-2">
                {photographyTips.map((tip, index) => (
                  <div key={index} className="bg-white/70 p-3 rounded-lg flex items-start gap-2">
                    <span className="text-provence-blue font-bold min-w-[20px]">{index + 1}.</span>
                    <p className="text-sm">{tip}</p>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* Time-Specific Tips with improved contrast */}
          <div className="bg-white/95 p-6 rounded-lg mb-6 border border-gray-200 shadow-sm">
            <h3 className="text-lg font-bold mb-4 flex items-center gap-2 text-gray-900">
              <Clock className="w-5 h-5 text-provence-olive" />
              <span>Perfect Timing Guide</span>
            </h3>
            <div className="space-y-3">
              {timeSpecificTips.map((timeSlot, index) => (
                <div key={index} className="bg-gray-50 p-4 rounded-lg border border-gray-100">
                  <h4 className="font-bold text-gray-900 mb-2 text-base">{timeSlot.time}</h4>
                  <p className="text-gray-800 text-sm leading-relaxed font-medium">{timeSlot.tip}</p>
                </div>
              ))}
            </div>
          </div>
          
          {/* Local specialties section */}
          <div className="bg-provence-peach/20 p-4 rounded-lg mb-6">
            <h3 className="text-lg font-semibold mb-3 flex items-center gap-2">
              <Utensils className="w-5 h-5 text-provence-peach" />
              <span>Local Specialties to Try</span>
            </h3>
            <div className="grid grid-cols-2 gap-2">
              {localSpecialties.map((specialty, index) => (
                <div key={index} className="bg-white/70 p-3 rounded-lg flex items-center gap-2">
                  <span className="text-provence-peach">•</span>
                  <span>{specialty}</span>
                </div>
              ))}
            </div>
          </div>
          
          {/* Shopping recommendations */}
          <div className="bg-provence-olive/20 p-4 rounded-lg mb-6">
            <h3 className="text-lg font-semibold mb-3 flex items-center gap-2">
              <Gift className="w-5 h-5 text-provence-olive" />
              <span>What to Buy</span>
            </h3>
            <div className="grid grid-cols-2 gap-2">
              {shoppingRecommendations.map((item, index) => (
                <div key={index} className="bg-white/70 p-3 rounded-lg flex items-center gap-2">
                  <span className="text-provence-olive">•</span>
                  <span>{item}</span>
                </div>
              ))}
            </div>
          </div>
          
          {/* Place highlights */}
          {localHighlights.length > 0 && (
            <div className="space-y-4 mb-6">
              <h3 className="text-lg font-semibold flex items-center gap-2">
                <Award className="w-5 h-5 text-provence-blue" />
                <span>Highlights Worth Seeing</span>
              </h3>
              {localHighlights.map((highlight, index) => (
                <PlaceHighlight key={index} highlight={highlight} />
              ))}
            </div>
          )}
          
          {dayData.notes && (
            <div className="bg-provence-olive/20 p-4 rounded-lg mb-6 flex items-start">
              <Info className="w-5 h-5 mr-2 text-provence-olive shrink-0 mt-1" />
              <p className="text-sm">{dayData.notes}</p>
            </div>
          )}
          
          {/* Local tips */}
          <div className="bg-provence-blue/20 p-4 rounded-lg mb-6">
            <h3 className="text-lg font-semibold mb-3 flex items-center gap-2">
              <Lightbulb className="w-5 h-5 text-provence-blue" />
              <span>Provence Pro Tips</span>
            </h3>
            <ul className="space-y-2">
              <li className="flex items-start gap-2">
                <span className="text-provence-blue font-bold min-w-[20px]">1.</span>
                <p>Most shops close between 12:30-2:30pm for lunch—plan your shopping accordingly</p>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-provence-blue font-bold min-w-[20px]">2.</span>
                <p>Always greet shopkeepers with "Bonjour" when entering—it's considered rude not to</p>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-provence-blue font-bold min-w-[20px]">3.</span>
                <p>For the best photos, plan activities during "golden hour" (just after sunrise or before sunset)</p>
              </li>
            </ul>
          </div>
        </div>
        
        <div className="mt-8">
          <h3 className="text-lg font-semibold mb-6 flex items-center">
            <span className="mr-2">⏱️</span> 
            Daily Timeline
          </h3>
          <div className="relative">
            {dayData.stops.map((stop, index) => (
              <TimelineStop 
                key={`${stop.time}-${stop.title}`} 
                stop={stop} 
                isLast={index === dayData.stops.length - 1} 
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default DayTimeline;
