import React from 'react';
import { RiCameraLensFill } from "react-icons/ri";
import { useNavigate } from 'react-router-dom';

const HeaderBanner = () => {

  const navigate = useNavigate();

  return (
    <div className="w-full h-screen relative overflow-hidden flex flex-col items-center">

      {/* Top Header */}
      <div className="h-[55px] w-[750px] border border-white/30 rounded-full bg-white/10 backdrop-blur-md 
      flex items-center justify-between px-6 mt-10 
      transition-all duration-300 hover:shadow-[0_0_20px_rgba(255,255,255,0.8)]">

        <div className="font-bold text-lg text-white flex items-center gap-2">
          <RiCameraLensFill className="text-white text-[30px] transition-transform duration-500 hover:rotate-[90deg]" />
          HIGHLENS
        </div>

        <div className="flex gap-6 text-base text-white">
          <p className="cursor-pointer hover:font-bold" onClick={() => navigate("/")}>Home</p>

          {/* FIXED → navigate was wrongly placed as an attribute */}
          <p className="cursor-pointer hover:font-bold" onClick={() => navigate("/docs")}>Docs</p>
        </div>
      </div>

      {/* Center Content */}
      <div className="flex flex-col items-center justify-center text-center gap-6 flex-grow">

        <div>
          <div className="text-[50px] text-white font-extrabold">
            HIGH-LENS
          </div>

          <div className="text-[20px] text-white font-semibold max-w-[800px]">
            A Unified Digital Ecosystem for Photography Services, Learning & Marketplace
          </div>
        </div>

        {/* Buttons */}
        <div className="flex flex-row gap-4 mt-4">

          {/* Glow on hover (+ scale) */}
          <button className="text-[20px] w-[180px] h-[45px] bg-white rounded-full font-semibold 
          transition-all duration-300 hover:scale-105
          hover:shadow-[0_0_25px_rgba(255,255,255,1)]">
            Get Started
          </button>

          <button className="text-[20px] w-[180px] h-[45px] border border-white/30 rounded-full 
          text-white/60 bg-white/10 backdrop-blur-md font-semibold 
          transition-all duration-300 hover:scale-105
          hover:shadow-[0_0_25px_rgba(255,255,255,1)]">
            Learn More
          </button>
        </div>

      </div>

    </div>
  );
};

export default HeaderBanner;
