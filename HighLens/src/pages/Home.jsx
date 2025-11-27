import React from 'react'
import Beams from '../background/Beams';
import HeaderBanner from '../components/HeaderBanner';
import SelfHome from '../components/HomeSection/SelfHome';

const Home = () => {
  return (
    <div className="relative w-full h-screen overflow-y-auto">

      {/* FIXED BACKGROUND */}
      <div className="fixed inset-0 -z-10">
        <Beams
          beamWidth={2}
          beamHeight={15}
          beamNumber={12}
          lightColor="#ffffff"
          speed={2}
          noiseIntensity={1.75}
          scale={0.2}
          rotation={30}
        />
      </div>

      {/* SCROLLING CONTENT */}
      <div className="relative z-10 flex flex-col">
        <HeaderBanner />
        <SelfHome />
      </div>

    </div>
  )
}

export default Home