import React from 'react';
import { RiCameraLensFill } from "react-icons/ri";

const HeaderBanner = () => {
  return (
    <div className="w-full h-screen relative overflow-hidden">
      <div className="w-full h-full flex flex-col items-center justify-center gap-10">

        <div className="h-[50px] w-[750px] border border-white rounded-full bg-white/10 flex items-center justify-between px-6">
          <div className="font-bold text-lg text-white flex items-center gap-2">
            <RiCameraLensFill 
              className="text-white text-[30px] transition-transform duration-500 hover:rotate-[180deg]"
            />
            HIGHLENS
          </div>

          <div className="flex gap-6 text-base text-white">
            <p className="cursor-pointer hover:underline">Home</p>
            <p className="cursor-pointer hover:underline">Docs</p>
          </div>

        </div>

        {/* Title Section */}
        <div className="text-center">
          <div className="text-[50px] text-white font-extrabold">HIGH-LENS</div>
          <div className="text-[20px] text-white font-semibold max-w-[800px]">
            A Unified Digital Ecosystem for Photography Services, Learning & Marketplace
          </div>
        </div>

      </div>
    </div>
  );
};

export default HeaderBanner;