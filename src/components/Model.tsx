import { GLTFLoader } from "three/examples/jsm/loaders/GLTFLoader";

export const LoadGLTFModel = (
  scene: any,
  glbpath: string,
  options = { recieveShadow: true, castShadow: true }
) => {
  const { recieveShadow, castShadow } = options;
  return new Promise((resolve, reject) => {
    const loader = new GLTFLoader();

    loader.load(
      glbpath,
      (gltf) => {
        const obj = gltf.scene;
        obj.name = " Hacker room ";
        obj.position.x = 0;
        obj.position.y = 0;
        obj.receiveShadow = recieveShadow;
        obj.castShadow = castShadow;
        obj.scale.set(0.19,0.19,0.19)
        scene.add(obj);

        obj.traverse(function (child) {
          //@ts-ignore
          if (child.isMesh) {
            child.castShadow = castShadow
            child.receiveShadow = recieveShadow
          }
        });

        resolve(obj);
      },

      undefined,
      function (error) {
       console.log(error)
      }
    );
  });
};
