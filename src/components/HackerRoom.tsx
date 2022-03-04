import {
  useState,
  useRef,
  useEffect,
  MutableRefObject,
  useCallback,
} from "react";
import { OrbitControls } from "three/examples/jsm/controls/OrbitControls";
import * as THREE from "three";
import { LoadGLTFModel } from "./Model";

function easeOut(x: number) {
  return Math.sqrt(1 - Math.pow(x - 1, 4));
}

const HackerRoom = () => {
  const refCont = useRef() as MutableRefObject<HTMLElement>;
 
  const [loading, setLoading] = useState(true);
  const [renderer , setRenderer ] = useState<any>();
  const [_camera , setCamera] = useState<any>();
  const [target] = useState(new THREE.Vector3(1 , 2 ,-8 ))
  const [initialCamerPosition] =useState(new THREE.Vector3(
	  1900 ,
	  50,
	  2500 
  ))

const [scene] = useState(new THREE.Scene());

const [_controls , setControls] = useState<any>();

const handleWindowResize = useCallback(()=>{
	const {current: container} = refCont
	if(container && renderer){
		const scW = container.clientWidth
		const scH = container.clientHeight

		renderer.setSize(scW,scH)
	}
},[renderer])

useEffect(()=>{

	const {current: container} = refCont

	if(container && !renderer){
		const scW = container.clientWidth
		const scH= container.clientHeight
		const renderer = new THREE.WebGLRenderer({
			antialias:true,
			alpha: true,
		})

		renderer.setPixelRatio(window.devicePixelRatio)
		renderer.setSize(scW,scH)
		renderer.outputEncoding = THREE.sRGBEncoding
		container.appendChild(renderer.domElement)
		setRenderer(renderer)
		
		const scale = scH * 0.005 + 4.8 
		const camera = new THREE.OrthographicCamera(-scale , scale , scale , -scale , 0.01 , 5000)
	     camera.position.copy(initialCamerPosition)
	     camera.lookAt(target)
	     setCamera(camera)

	     const ambientLight = new THREE.AmbientLight(0xffffff , 1)
	     scene.add(ambientLight)
	     const directionalLight = new THREE.DirectionalLight( 0xffffff, 1.5 );
		directionalLight.position.set(0,10,0)
	     scene.add( directionalLight );

	    const spotLight = new THREE.SpotLight( 0xfffff , 1 );
            spotLight.position.set( 0, 1000, 0 )
	     scene.add( spotLight );


	     const controls = new OrbitControls(camera , renderer.domElement)
	     controls.autoRotate = true
	     controls.target = target
	     setControls(controls)

	     LoadGLTFModel(scene , "/scene.glb" ,{
		    recieveShadow:false,
		    castShadow: false 
	     }).then(()=>{
		     console.log("GLB Loaded")
		     animate()
		     setLoading(false)
	      })

	     let req: any = null;
	     let frame = 0;
	     const animate = () =>{
		req = requestAnimationFrame(animate)

		frame = frame <=100 ? frame +1 : frame

		if(frame <= 100){
			const p = initialCamerPosition
			const rootSpeed = -easeOut(frame/120) * Math.PI * 20
			camera.position.y = 10
			camera.position.x = p.x * Math.cos(rootSpeed)+ p.z * Math.sin(rootSpeed)
			camera.position.z = p.z * Math.cos(rootSpeed)-p.x * Math.sin(rootSpeed)
			camera.lookAt(target)

		}else{
			controls.update()
		}

		renderer.render(scene , camera)
	          }

	     return () =>{
		     console.log("unmount")
		     cancelAnimationFrame(req)
		     renderer.dispose()
	     }

	}


} , [])

 useEffect(()=>{
	window.addEventListener("resize" , handleWindowResize , false)
	return()=>{
		window.removeEventListener("resize" , handleWindowResize , false)
	}
 },[renderer , handleWindowResize])
 
  return (
    <>
      <section ref={refCont} className="w-full h-full">
        {loading && (
          <div className="w-full h-full flex justify-center items-center">
		  <h1 className="text-white opacity-90">Loading .... </h1>
	  </div>
        )}
      </section>
    </>
  );
};

export default HackerRoom;
