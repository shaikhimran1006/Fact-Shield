import React from "react";
import { useNavigate } from "react-router-dom";

export default function FeatureCard({ title, description, image, onClick, btntext, color }) {
  const navigate = useNavigate();

  const handleButtonClick = () => {
    if (onClick) {
      onClick(); // Call the specific `onClick` function passed in props
    }
  };

  return (
    <div className={`bg-white rounded-lg transition duration-300 ease-in shadow-[0_0_20px_rgba(0,0,0,0.2)] ${color} p-6 flex flex-col items-center`}>
      <img src={image || "/placeholder.svg"} alt={title} className="h-48 w-auto mb-6" />
      <hr className="border-black-300 h-1 w-full" />
      <h3 className="text-xl font-bold mb-2">{title}</h3>
      <p className="text-gray-600 text-center mb-6">{description}</p>
      <button
        onClick={handleButtonClick}
        className="w-full bg-[#0F70E6] text-white py-2 rounded-md hover:bg-blue-700 transition-colors"
      >
        {btntext}
      </button>
    </div>
  );
}
