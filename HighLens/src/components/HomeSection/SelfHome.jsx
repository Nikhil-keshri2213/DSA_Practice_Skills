import { CardContainer, CardBody, CardItem } from "../ui/3d-card";
import WhiteBG from "../../assets/white.png";
import BlackBG from "../../assets/black.png";

const SelfHome = () => {
  return (
    <div className="w-full flex flex-col md:flex-row items-center justify-between px-10 py-20 gap-10">
      <div className="w-full md:w-1/2 flex justify-center">
        <CardContainer>
          <CardBody>
            <div className='bg-white/10 border border-white/20 rounded-xl p-4'>
              <CardItem translateZ={30}>
                <div className='text-2xl font-bold p-3 text-white'>
                  SEE THINGS BEYOND LIMITS
                </div>
              </CardItem>

              <CardItem translateZ={20}>
                <div className='text-lg font-semibold p-3 text-white'>
                  A UNIFIED DIGITAL ECOSYSTEM FOR PHOTOGRAPHY SERVICES
                </div>
              </CardItem>

              <CardItem translateZ={25}>
                <img
                  src={WhiteBG}
                  alt="WhiteBG"
                  loading="lazy"
                  className="h-16 object-cover rounded-xl ml-2 shadow-md border border-white/30"/>
              </CardItem>

              <CardItem translateZ={35}>
                <img
                  src={BlackBG}
                  alt="BlackBG"
                  loading="lazy"
                  className="h-14 object-cover rounded-xl shadow-md mt-2 ml-2 border border-white/10"/>
              </CardItem>

              <CardItem translateZ={20}>
                <button className="px-2 py-3 bg-white text-black text-sm rounded-full mt-2 mb-2 ml-60 font-bold cursor-pointer">
                  Explore Now
                </button>
              </CardItem>
            </div>
          </CardBody>
        </CardContainer>
      </div>

      <div className="w-full md:w-1/2">
        <div
          className="p-6 rounded-2xl bg-white/5 border border-white/30 border-dashed text-white/90 leading-relaxed font-light space-y-4">
          <p className="text-sm">
            Every story begins with a single frame.
            HighLens helps you capture yours with clarity, confidence, and creativity.
          </p>

          <p className="text-sm">
            Find the right artist, the right gear, and the guidance you need — <span className='uppercase font-medium text-lg'>all in one place.</span>
          </p>

          <p className="text-xl font-semibold text-white uppercase">
            Rent. Learn. Create. Grow.
          </p>

          <p className="text-sm text-white/80">
            Your vision deserves the best tools. HighLens delivers them.
          </p>
        </div>
      </div>
    </div>
  )
}

export default SelfHome;