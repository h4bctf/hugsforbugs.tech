import React ,{Suspense ,  useRef} from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import { useLoader } from '@react-three/fiber'
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader'
import "./styles/Banner.scss"

const Modal = () =>{
  const gltf = useLoader(GLTFLoader,'/Modal/scene.gltf')
  return <primitive object={gltf.scene} dispose={null}  scale={18}/>

}

const Lights = () =>{
  return (
    <>
   <ambientLight intensity={0.3}/>
   <directionalLight position={[0,0,5]} intensity={1}/>
   <directionalLight position={[0,10,0]} intensity={1.5}/>
   <spotLight intensity={1} position={[0,1000,0]}/>
   </>
  )
}

const HTMLContent = () =>{
const modelRef: any = useRef()
useFrame(()=>{
  modelRef.current.rotation.y += 0.02
})
  return (
      <>
        <mesh ref={modelRef} position={[0,-10,0]}>
          <Modal/>
        </mesh>
     
      </>
  )
}

const banner: React.FC = () => {
  return (
    <div
      id="Home"
      className="HomepageCont"
    >

      {/* <img
        className="Typingheading"
        src="https://readme-typing-svg.herokuapp.com?font=Ubuntu+Mono&color=%23337BD4&size=30&duration=2507&center=true&vCenter=true&lines=It's+Pwi'ing+Time;Pwon+O'+Clock"
        alt=""
      /> */}
      <div className=" text-center flex w-full justify-center flex-wrap flex-col sm:flex-row">
        <h1 className="text-4xl font-['Clash Display'] font-bold text-[#d6d7db] sm:text-6xl ">Segmentation <span className="bg-clip-text text-transparent bg-gradient-to-tl from-[#1a4e8f] to-[#64a8fa] " >Fault</span></h1>
        <img src="https://readme-typing-svg.herokuapp.com?color=%23337BD4&size=55&vCenter=true&height=40&width=230&lines=+........" alt="" />
      </div>

    <div className="modal3d mt-4">
      <Canvas 
      camera={{position: [6,5,600] , fov:6}}>
        <Lights/>
        <Suspense fallback={null}>
          <HTMLContent/>
          </Suspense>
       
      </Canvas> </div> 
    </div>
  );
};

export default banner;
