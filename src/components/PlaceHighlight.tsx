
import React from 'react';
import { Lightbulb } from 'lucide-react';

interface PlaceHighlightProps {
  highlight: {
    title: string;
    description: string;
    image: string;
    tips: string[];
  }
}

const PlaceHighlight: React.FC<PlaceHighlightProps> = ({ highlight }) => {
  return (
    <div className="bg-white/70 shadow-sm rounded-lg overflow-hidden hover:shadow-md transition-all">
      <div className="flex flex-col md:flex-row">
        <div className="md:w-1/3 h-60 md:h-auto">
          <img 
            src={highlight.image} 
            alt={highlight.title}
            className="w-full h-full object-cover"
          />
        </div>
        
        <div className="p-4 md:w-2/3">
          <h4 className="text-lg font-semibold mb-2">{highlight.title}</h4>
          <p className="text-muted-foreground mb-3">{highlight.description}</p>
          
          <div className="space-y-2">
            <div className="font-medium flex items-center gap-1">
              <Lightbulb className="w-4 h-4 text-provence-peach" />
              <span>Insider Tips:</span>
            </div>
            
            <ul className="list-disc pl-5 space-y-1">
              {highlight.tips.map((tip, index) => (
                <li key={index} className="text-sm">{tip}</li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PlaceHighlight;
