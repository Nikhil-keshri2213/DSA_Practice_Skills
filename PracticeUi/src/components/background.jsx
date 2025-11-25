import React from 'react'
import ColorBends from './ColorBends';

const Background = () => {
  return (
    <div className="w-screen h-screen">
        <ColorBends
            colors={["#ff5c7a", "#8a5cff", "#00ffd1",""]}
            rotation={30}
            speed={0.4}
            scale={1.2}
            frequency={1.4}
            warpStrength={1.2}
            mouseInfluence={0.5}
            parallax={0.6}
            noise={0.08}
            transparent={false}   // <── ADD THIS
        />
    </div>
  )
}

export default Background