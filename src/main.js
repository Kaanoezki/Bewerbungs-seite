

const loader = new THREE.GLTFLoader();
const scene = new THREE.Scene();
const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
const renderer = new THREE.WebGLRenderer({canvas: document.getElementById('scene-container')});
renderer.setSize(window.innerWidth, window.innerHeight);

//cam position
camera.position.z = 5;

//func light
function light() {
    var ambientLight = new THREE.AmbientLight(0x404040);
    scene.add(ambientLight);
    var directionalLight = new THREE.DirectionalLight(0xffffff);
    directionalLight.position.set(1, 1, 1).normalize();
    scene.add(directionalLight);
}



//load 3d OBJ
class objectSpwn{
    constructor (initObj,setPosition,setScale){
            this.initObj = initObj;
            this.setPosition = setPosition;
            this.setScale = setScale;
            this.initObj.scene.position.set(this.setPosition.x, this.setPosition.y, this.setPosition.z);
            this.initObj.scene.scale.set(this.setScale.x, this.setScale.y, this.setScale.z);
        scene.add(this.initObj.scene);
        }
    }

function loadSuzann(){
    loader.load('./suzann.gltf', (gltf) => {
        console.log("GLTF model loaded successfully:", gltf);
        // Position and add the loaded model to the scene
        
        const setPosition = new THREE.Vector3 (1,1,1);
        const setScale = new THREE.Vector3 (0.3,0.3,0.3);
        let SuzannObj = new objectSpwn (gltf, setPosition, setScale);
        
    })
}

function loadTeapot(){
    loader.load('./teaPot.glb',(gltf) => {
        console.log("teapot is loaded",gltf);
        const setPosition = new THREE.Vector3 (0.1,1,1);
        const setScale = new THREE.Vector3 (0.3,0.3,0.3);;
        let teaPotObjw  = new objectSpwn (gltf, setPosition, setScale);
        
    })
}
 // animate scene
 function animate() {
    requestAnimationFrame(animate);
    renderer.render(scene, camera);
}
function handleWindowResize() {
    camera.aspect = window.innerWidth / window.innerHeight;
    camera.updateProjectionMatrix();
    renderer.setSize(window.innerWidth, window.innerHeight);
}
// Event-Listener für Fenstergrößenänderung hinzufügen
window.addEventListener('resize', handleWindowResize, false);


    //load objs + parallax
    light();
    loadSuzann();
    loadTeapot();
    
  
animate();
