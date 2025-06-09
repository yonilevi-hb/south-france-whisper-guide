
import { Sun, Cloud, CloudRain, CloudSnow } from "lucide-react";

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
    if (w.includes("rain")) return "text-blue-600 bg-blue-100";
    if (w.includes("cloud")) return "text-gray-600 bg-gray-100";
    if (w.includes("snow")) return "text-blue-800 bg-blue-50";
    return "text-orange-600 bg-orange-100";
  };

  return (
    <div className={`inline-flex items-center gap-2 px-3 py-1.5 rounded-full text-sm font-medium ${getWeatherColor()} ${className}`}>
      {getWeatherIcon()}
      <span>{weather}</span>
    </div>
  );
};

export default WeatherWidget;
