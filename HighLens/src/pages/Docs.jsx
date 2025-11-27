import React from 'react'
import LightRays from '../background/LightRays';
const Docs = () => {
    return (
        <div className="w-full h-screen relative overflow-hidden">
            <div className="absolute inset-0 -z-10 bg-black border">
                    <LightRays
                        raysOrigin="top-center"
                        raysColor="#ffffff"
                        raysSpeed={1.5}
                        lightSpread={0.8}
                        rayLength={1.7}
                        followMouse={true}
                        mouseInfluence={0.1}
                        noiseAmount={0.1}
                        distortion={0.05}
                        className="custom-rays"
                    />
            </div>
        </div>
    )
}

export default Docs