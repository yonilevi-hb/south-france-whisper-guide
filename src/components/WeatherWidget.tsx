
import { Sun, Cloud, CloudRain, CloudSnow, Heart } from "lucide-react";

interface WeatherWidgetProps {
  weather: string;
  className?: string;
}

const WeatherWidget: React.FC<WeatherWidgetProps> = ({ weather, className = "" }) => {
  const getWeatherIcon = () => {
    const w = weather.toLowerCase();
    if (w.includes("rain") || w.includes("shower")) return <CloudRain className="w-4 h-4" />;
    if (w.includes("cloud") || w.includes("overcast")) return <Cloud className="w-4 h-4" />;
    if (w.includes("snow")) return <CloudSnow className="w-4 h-4" />;
    return <Sun className="w-4 h-4" />;
  };

  const getWeatherColor = () => {
    const w = weather.toLowerCase();
    if (w.includes("rain")) return "text-blue-600 bg-gradient-to-r from-blue-100 to-blue-200 shadow-sm";
    if (w.includes("cloud")) return "text-gray-600 bg-gradient-to-r from-gray-100 to-gray-200 shadow-sm";
    if (w.includes("snow")) return "text-blue-800 bg-gradient-to-r from-blue-50 to-blue-100 shadow-sm";
    return "text-orange-600 bg-gradient-to-r from-orange-100 to-orange-200 shadow-sm";
  };

  const getWeatherQuote = () => {
    const w = weather.toLowerCase();
    if (w.includes("sunny") || w.includes("clear")) return "Perfect for romance ☀️";
    if (w.includes("rain")) return "Cozy weather for two ☔";
    if (w.includes("cloud")) return "Dreamy skies ahead ☁️";
    return "Beautiful day together ✨";
  };

  return (
    <div className={`inline-flex items-center gap-3 px-4 py-2.5 rounded-full text-sm font-medium backdrop-blur-sm ${getWeatherColor()} ${className} border border-white/30`}>
      <div className="flex items-center gap-2">
        {getWeatherIcon()}
        <span className="font-semibold">{weather}</span>
      </div>
      <div className="flex items-center gap-1 text-xs opacity-80">
        <Heart className="w-3 h-3" fill="currentColor" />
        <span className="italic">{getWeatherQuote()}</span>
      </div>
    </div>
  );
};

export default WeatherWidget;
