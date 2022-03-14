import React from "react";
// import { Canvas, useFrame } from "@react-three/fiber";
// import { useLoader } from '@react-three/fiber'
// import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader'
import "../styles/Banner.scss";
import HackerRoom from "../HackerRoom";


// const Modal = () =>{
//   const gltf = useLoader(GLTFLoader,'/scene.gltf')
//   return <primitive object={gltf.scene} dispose={null} />

// }

// const Lights = () =>{
//   return (
//     <>
//    <ambientLight intensity={0.3}/>
//    <directionalLight position={[0,0,5]} intensity={1}/>
//    <directionalLight position={[0,10,0]} intensity={1.5}/>
//    <spotLight intensity={1} position={[0,1000,0]}/>
//    </>
//   )
// }

// const HTMLContent = () =>{
// const modelRef: any = useRef()
// console.log(modelRef);

// useFrame(()=>{
//   modelRef.current.rotation.y += 0.01
// })

//   return (
//       <>
//         <mesh ref={modelRef} position={[0,0,80]}>
//           <Modal/>
//         </mesh>
     
//       </>
//   )
// }

const banner: React.FC = () => {
  return (
    <div
      id="Home"
      className="HomepageCont "
    >
      <div className=" text-center flex w-full justify-center sm:items-end flex-wrap flex-col sm:flex-row">
        <h1 id="headingbanner" className="text-5xl font-['Inter'] font-extrabold text-[#ffffff] sm:text-8xl sm:text-extrabold ">Segmentation <span className="bg-clip-text text-transparent bg-gradient-to-tl from-[#1a4e8f] to-[#64a8fa] " >Fault</span></h1>
        <img src="https://readme-typing-svg.herokuapp.com?color=%23337BD4&size=60&vCenter=true&height=30&width=230&lines=+........" alt="" />
      </div>

    <div className="modal3d mt-4 h-1/3 w-full sm:w-1/3 sm:h-1/2">
      {/* <Canvas style={{height:"500px" ,width:"500px"}} camera={{position: [-10,-10,860] , fov:6}}>
        <Lights/>
        <Suspense fallback={null}>
          <HTMLContent />
          </Suspense>
       
      </Canvas> </div>  */}
        <HackerRoom/>
        {/* <Three/> */}
</div>
</div>
  );
};

export default banner;
