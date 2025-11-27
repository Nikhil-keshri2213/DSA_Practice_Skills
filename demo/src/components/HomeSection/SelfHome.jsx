import React from 'react'
import { CardContainer, CardBody, CardItem } from "../../components/ui/3d-card";

// FIXED — IMPORT IMAGES PROPERLY
import WhiteBG from "../../assets/white.png";
import BlackBG from "../../assets/black.png"; // change to your actual file
import { useNavigate } from 'react-router-dom';

const SelfHome = () => {

    const navigate = useNavigate();
  return (
    <div className="w-full flex flex-col md:flex-row items-center justify-between px-10 py-20 gap-10">
      <div className="w-full md:w-1/2 flex justify-center">
        <CardContainer>
          <CardBody>
            <div className='bg-white/10 border border-white/20 rounded-lg'>
            <CardItem translateZ={40}>
              <div className='text-2xl font-bold p-3 text-white'>See Things Beyond Limits</div>
            </CardItem>

            <CardItem translateZ={40}>
                 <div className='text-lg font-semibold p-3 text-white'>A Unified Digital Ecosystem for Photography Services</div>
            </CardItem>

            <CardItem translateZ={120}>
              <img
                src={WhiteBG}
                alt="WhiteBG"
                className="w-fit h-20 object-cover rounded-xl ml-2 shadow-lg border border-white/50"
              />
            </CardItem>

            <CardItem translateZ={100}>
              <img
                src={BlackBG}
                alt="BlackBG"
                className="w-fit h-[71px] object-cover rounded-xl shadow-lg mt-2 ml-2 border border-white/20"
              />
            </CardItem>

            <CardItem translateZ={60}>
              <button className="px-4 py-6 bg-white text-black rounded-full mt-2 mb-2 ml-60 font-bold cursor-pointer" onClick={navigate("/")}>
                Explore Now
              </button>
            </CardItem>
            </div>
          </CardBody>
        </CardContainer>
      </div>

      <div className="w-full md:w-1/2 text-white text-lg leading-relaxed">
        <p>
          Every great story begins with a single frame. <br /><br />
          HighLens helps you capture it with clarity, confidence, and creativity.
          Find the right artist, the right gear, and the right guidance — all in one place.
          Rent, learn, create, and grow without limits. <br /><br />
          Your vision deserves the best tools.
          And HighLens brings them to you.
        </p>
      </div>

    </div>
  )
}

export default SelfHome;
