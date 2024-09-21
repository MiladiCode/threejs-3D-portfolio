import { motion } from "framer-motion";
import {Canvas} from "@react-three/fiber";
import { Suspense } from "react";
import CanvasLoader from "../conponents/CanvasLoader";
import HackerRoom from "../conponents/HackerRoom";
// import {Leva, useControls}  from "leva";
import { useMediaQuery } from "react-responsive";

const Hero = () => {
  // const x = useControls( 'HackerRoom', {
  //   positionX: {
  //     value: 2.5,
  //     min: -10,
  //     max: 10
  //   },
  //   positionY: {
  //     value: 2.5,
  //     min: -10,
  //     max: 10
  //   },
  //   positionZ: {
  //     value: 0,
  //     min: -10,
  //     max: 10
  //   },
  //   rotationX: {
  //     value: 0,
  //     min: -10,
  //     max: 10
  //   },
  //   rotationY: {
  //     value: 0,
  //     min: -10,
  //     max: 10
  //   },
  //   rotationZ: {
  //     value: 0,
  //     min: -10,
  //     max: 10
  //   },
  //   scale: {
  //     value: 0.05,
  //     min: 0.01,
  //     max: 10
  //   }
  // });

  const isSmall = useMediaQuery({maxWidth: 440});
  const isMobile = useMediaQuery({maxWidth: 768 });
  const isTablet = useMediaQuery({ minWidth: 768, maxWidth: 1024});

  return (
    <section className="min-h-screen w-full flex flex-col relative">
      <div className="w-full mx-auto flex flex-col sm:mt-46 mt-20 c-space gap-3">
        <p className="sm:text-3xl text-1xl font-medium text-white text-center font-sans">سلام, من میلاد هستم<span className="waving-hand">👋</span></p>

        <p className="hero_tag text-gray_gradient hover:text-white"> Web علاقه مند به حوزه نرم افزار و طراحی <p>3D , Animation</p></p>
      </div>
                      {/* THIS WILL TAKE THE REST OF THE SCREEN */}
      <div className="w-full h-full absolute inset-0 top-64 ">
        {/* <Leva/> */}
        <Canvas className="w-full h-full">
          <Suspense fallback={<CanvasLoader/>}>

          <perspectiveCamera makeDefault position={[0, 0, 30]}/>

          <HackerRoom 

            position={[0.1, isMobile ? 0.4 : 0, 2.6]} 
            rotation={[0.5, -Math.PI, 0]}
            scale={isMobile ? 0.008 : 0.01}/>
 
            <ambientLight intensity={1} />
            <directionalLight position={[15, 15,100 ]} intensity={0.5 } />
          </Suspense>
        </Canvas>
      </div>
    </section>
  )
}

export default Hero

