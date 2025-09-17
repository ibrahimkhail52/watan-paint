import React from "react";
import chair from "../../../assets/Home img/gallery2/chair.jpg";
import hall2 from "../../../assets/Home img/gallery2/hall2.jpg";
import couch from "../../../assets/Home img/gallery2/couch.jpg";

// Card Component with hover-to-reveal overlay
const Gallery2Card = ({ image, title, description, author, date }) => {
  return (
    <div className="relative group overflow-hidden rounded-lg shadow-md h-full">
      {/* Image */}
      <img
        src={image}
        alt={title}
        className="w-full h-full object-cover transform group-hover:scale-105 transition duration-500"
      />

      {/* Text overlay - hidden by default, visible on hover */}
      <div
        className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/30 to-transparent p-3 flex flex-col justify-end
        opacity-0 translate-y-4 group-hover:opacity-100 group-hover:translate-y-0 
        transition-all duration-500 ease-in-out"
      >
        <h3 className="text-white font-semibold text-sm leading-snug">
          {title}
        </h3>
        {description && (
          <p className="text-gray-200 text-xs mt-1 line-clamp-2">
            {description}
          </p>
        )}
        <div className="flex items-center text-gray-300 text-[9px] mt-1 space-x-1">
          <span>by {author}</span>
          <span>•</span>
          <span>{date}</span>
          <span>•</span>
          <span>0</span>
        </div>
      </div>
    </div>
  );
};

export default function Gallery2() {
  const posts = [
    {
      image: chair,
      title: "HOME DECOR MOMENT: LOVELY COMBINATION OF BRIGHT YELLOW",
      description:
        "Bright Sunshine is just a few strokes away. You can enjoy sunny environment even when there is a cloudy sky outside.",
      author: "sparcoAdmin",
      date: "Nov 26, 2017",
    },
    {
      image: couch,
      title: "THE COLORS YOU WILL LOVE IN 2018",
      author: "sparcoAdmin",
      date: "Nov 25, 2017",
    },
    {
      image: hall2,
      title:
        "SEVEN CLASSICAL DESIGNS FOR CRISPY WINTERS BY DESIGNER CHRISTIANE LEMIEUX",
      author: "sparcoAdmin",
      date: "Nov 24, 2017",
    },
    {
      image: hall2,
      title: "DESIGNER HOUSE FROM MYSTIC PAINT WORKS: 5 TIPS",
      author: "sparcoAdmin",
      date: "Nov 23, 2017",
    },
  ];

  return (
    <div className="container mx-auto px-4 max-w-6xl">
      <div className="grid md:grid-cols-5 gap-4">
        {/* Left tall card */}
        <div className="md:col-span-2 row-span-2 h-[310px]">
          <Gallery2Card {...posts[0]} />
        </div>

        {/* Top right two small cards */}
        <div className="md:col-span-3 grid grid-cols-2 gap-4">
          <div className="h-[150px]">
            <Gallery2Card {...posts[1]} />
          </div>
          <div className="h-[150px]">
            <Gallery2Card {...posts[2]} />
          </div>
        </div>

        {/* Bottom right wide card */}
        <div className="md:col-span-3 h-[150px]">
          <Gallery2Card {...posts[3]} />
        </div>
      </div>
    </div>
  );
}
