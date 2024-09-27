import { motion } from "framer-motion";
import { PerspectiveCamera } from "@react-three/drei";
import {Canvas} from "@react-three/fiber";
import { Suspense } from "react";
import { useMediaQuery } from "react-responsive";
import { calculateSizes } from "../constants";
import CanvasLoader from "../conponents/CanvasLoader";
import HackerRoom from "../conponents/HackerRoom";
import Target from "../conponents/Target";
import ReactLogo from "../conponents/reactLogo";
import YoutubeLogo from "../conponents/YoutubeLogo";
import Github from "../conponents/Github";
import Cube from "../conponents/Cube";
import Rings from "../conponents/Rings";
import HeroCamera from "../conponents/HeroCamera";
import Button from "../conponents/Button";

const Hero = () => {

  const isSmall = useMediaQuery({maxWidth: 440});
  const isMobile = useMediaQuery({minWidth:440, maxWidth: 768 });
  const isTablet = useMediaQuery({ minWidth: 768, maxWidth: 1024});

  const sizes = calculateSizes(isSmall, isTablet, isMobile)

  return (
    <section className="min-h-screen w-full flex flex-col relative">
      <div className="w-full mx-auto flex flex-col sm:mt-46 mt-20 c-space gap-3">
        <p className="sm:text-3xl text-1xl font-medium text-white text-center font-sans">سلام, من میلاد هستم<span className="waving-hand">👋</span></p>

        <p className="hero_tag text-gray_gradient hover:text-white"> Web علاقه مند به حوزه نرم افزار و طراحی </p>
      </div>
                      {/* THIS WILL TAKE THE REST OF THE SCREEN */}
      <div className="w-full h-full absolute inset-0 top-64">
        {/* <Leva/> */}
        <Canvas className="w-full h-full">
          <Suspense fallback={<CanvasLoader/>}>

          <PerspectiveCamera makeDefault position={isMobile ? [0.04, -0.4, 6.5] : [0, 0, 6]}/>

          <HeroCamera isSmall={isSmall}>
            <HackerRoom 
              position={sizes.deskPosition} 
              rotation={[0.4, -Math.PI, 0]}
              scale={sizes.deskScale}
            />
          </HeroCamera>


            <group>
              <Target position={sizes.targetPosition}
              />
              
              <ReactLogo position={sizes.reactLogoPosition}/>

              <YoutubeLogo position={sizes.youtubePosition}/>

              <Github position={sizes.ringPosition}/>

              <Cube position={sizes.cubePosition}/>

              <Rings position={sizes.ringPosition} />
            </group>
 
            <ambientLight intensity={1} />
            <directionalLight position={[15, 15,100 ]} intensity={0.5 } />
          </Suspense>
        </Canvas>
      </div>

      <div className="absolute bottom-5 left-0 right-0 w-full z-10 c-space ">
        <a href="#about" className="w-fit"> 
          <Button name="Let,s work together" isBeam containerClass="sm:w-fit w-full sm:min-w-96"/>
        </a>

      </div>
    </section>
  )
}

export default Hero

