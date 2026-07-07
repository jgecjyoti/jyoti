import React from "react";
import { FaLinkedinIn } from "react-icons/fa6";
import { LazyLoadImage } from "react-lazy-load-image-component";

const TeamCard = ({ name, department, position, image, link }) => {
  return (
    <div className="group w-80 bg-white rounded-2xl overflow-hidden border border-gray-200 transition-all duration-300 hover:-translate-y-2 hover:shadow-2xl">
      {/* Top Accent */}
      <div className="h-2 bg-gradient-to-r from-amber-500 via-orange-500 to-amber-600"></div>

      <div className="px-6 py-8 text-center">
        {/* Profile Image */}
        <div className="flex justify-center">
          {link ? (
            <a href={link} target="_blank" rel="noreferrer">
              <LazyLoadImage
                src={image}
                alt={name}
                className="w-32 h-32 rounded-full object-cover border-4 border-amber-500 shadow-lg transition-transform duration-300 group-hover:scale-105"
              />
            </a>
          ) : (
            <LazyLoadImage
              src={image}
              alt={name}
              className="w-32 h-32 rounded-full object-cover border-4 border-amber-500 shadow-lg"
            />
          )}
        </div>

        {/* Name */}
        <h2 className="mt-6 text-2xl font-bold text-gray-900">{name}</h2>

        {/* Position */}
        <p className="mt-2 text-[#915f2e] font-semibold">{position}</p>

        {/* Department */}
        <p className="mt-2 text-gray-500 text-sm">{department}</p>

        {/* Divider */}
        <div className="w-14 h-1 bg-amber-500 rounded-full mx-auto my-5"></div>

        {/* LinkedIn */}
{link && link !== "xx" && (
  <a
    href={link}
    target="_blank"
    rel="noreferrer"
    className="mt-6 inline-flex items-center gap-2 rounded-lg bg-[#0A66C2] px-4 py-2 text-white font-medium transition-all duration-300 hover:bg-[#084B8A] hover:-translate-y-1 hover:shadow-md"
  >
    <FaLinkedinIn size={18} />
    LinkedIn
  </a>
)}
      </div>
    </div>
  );
};

export default TeamCard;
