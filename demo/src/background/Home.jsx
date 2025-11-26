import React from 'react'
import Beams from './Beams';
import HeaderBanner from '../components/HeaderBanner';
const Home = () => {
    return (
        <div className="w-full h-screen relative overflow-hidden">
            <div className="absolute inset-0 -z-10">
                <Beams
                    beamWidth={2}
                    beamHeight={15}
                    beamNumber={12}
                    lightColor="#ffffff"
                    speed={2}
                    noiseIntensity={1.75}
                    scale={0.2}
                    rotation={45}
                />
            </div>
            <HeaderBanner />
        </div>
    )
}

export default Home