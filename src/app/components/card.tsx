import React from "react";

interface CardProps {
  image?: string;
}

const Card: React.FC<CardProps> = ({ image }: CardProps) => {
  return (
    <div className="h-full w-full shadow-md rounded-md">
      <div className="grid">
        {image ? (
          <img className="rounded-t" src={image} />
        ) : (
          <img
            className="rounded-t"
            src="https://www.aandmedu.in/wp-content/uploads/2021/11/1-1-Aspect-Ratio-1024x1024.jpg"
          />
        )}
      </div>
      <div className="grid p-2">
        <h1 className="text-lg font-bold">Lincoln full base</h1>
        <label className="text-sm text-gray-700">5000 Bath</label>
      </div>
    </div>
  );
};

export default Card;
