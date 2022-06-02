import * as THREE from './three.module.js'
let 
    canvas = document.getElementById('c'), 

    stats = initStats(),

    scene = Scene(), 

    camera = Camera(scene),

    renderer = render(canvas);
function WindowResize(){ // изменения размеров
  canvas.style.width = window.innerWidth -800;
  camera.aspect = window.innerWidth/970;
  camera.updateProjectionMatrix();
  renderer.setSize(renderer.domElement.parentNode.offsetWidth,970);
}    
function render(canvas){ // добавления рендера
  let 
    renderer = new THREE.WebGLRenderer({canvas:canvas, alpha: true, antialias: true});
    renderer.setSize( window.innerWidth, 970  )
    return renderer;
}
function light(scene){ // добавление света на сцену 
  let
      AmbientLight = new THREE.AmbientLight(0x0c0c0c), // свет на всю сцену
      SpotLight = new THREE.SpotLight(0xffffff); // точечный свет

        SpotLight.position.set(-40,60,-10);
        SpotLight.castShadow = true;

        scene.add(AmbientLight);
        scene.add(SpotLight);  
}
function Camera(scene){ // добавления камера
    let 
      camera = new THREE.PerspectiveCamera(45,window.innerWidth/970,0.1,1000);
      camera.position.set(-30,40,30)
      camera.lookAt(scene.position);  
    return camera; 
}
function Scene(){ // добавление сцены
  let
      scene = new THREE.Scene();
  return scene;
}
function addCube(){ // добавление кубов на сцену
  let
  cubeSize = Math.ceil((Math.random()*3)), // рандомный размер куба
  CubeGeometry = new THREE.BoxGeometry(cubeSize,cubeSize,cubeSize),
  CubeMaterial = new THREE.MeshLambertMaterial({ color: Math.random()*0xffffff }), // материал и рандомный цвет куба
  Cube = new THREE.Mesh(CubeGeometry,CubeMaterial),
  point_obj = {
    x: Math.round(Random(-15,15)),
    y: Math.round(Random(-15,15)),
    z: Math.round(Random(-15,15))
  };
        if(scene.children.length == 32){
            scene.children = []
            light(scene)
            onload()
          }
              Cube.castShadow =  true;
              Cube.position.x = point_obj.x;
              Cube.position.y = point_obj.y; 
              Cube.position.z = point_obj.z; 

              scene.add(Cube);
      }; 

      loop();

function loop() { // функция обновления фреймов
  scene.traverse(function(e) {
    if (e instanceof THREE.Mesh ) {
      e.rotation.x+=0.02;
      e.rotation.y+=0.02;
      e.rotation.z+=0.02;
          
      }
  });
      requestAnimationFrame(loop);
      renderer.render(scene, camera);
  } 

function initStats() {
  let 
    stats = new Stats();
      stats.setMode(0);
      return stats;
}

function Random(min,max){
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

function onload(){ // добавления кубов при загрузке страницы
  for(let i = 0;i < 10;i++){
    addCube()
  }
}
window.addEventListener("resize", function(){ WindowResize(); });
canvas.addEventListener('click',addCube)
light(scene)
onload()