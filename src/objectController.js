console.log('loading objcontroller successful');

const THREE = require('three');
const { GLTFLoader } = require('three-gltf-loader');

// Setup
function SetUp(){
    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
    const renderer = new THREE.WebGLRenderer();
    renderer.setSize(window.innerWidth, window.innerHeight);
    document.body.appendChild(renderer.domElement);
}

// GLTF Loader
function GLTFLoader(){
    const loader = new GLTFLoader();
    }

// Lights

function lights(){
    let lightHemisphere = new THREE.HemisphereLight(0xffffbb, 0x080820, 1);
    lightHemisphere.position.set(0,0,10);
    scene.add(lightHemisphere);
    helper = new THREE.HemisphereLightHelper(lightHemisphere, 1);
    scene.add(helper); 
}

function CameraSetUp(){
    camera.position.z = 5;
}
function loadObj(){
    loader.load('assets/suzann.glb', (gltf) => {
        // Position and add the loaded model to the scene
        gltf.scene.position.set(0, 0, 0);
        scene.add(gltf.scene);
    });
    }

    // Create a cube
    function addCube(){
    const geometry = new THREE.BoxGeometry();
    const material = new THREE.MeshBasicMaterial({ color: 0x00ff00 });
    const cube = new THREE.Mesh(geometry, material);
    cube.position.set(0, 0, 0);
    scene.add(cube);
    }

// Animation
function animate() {
    requestAnimationFrame(animate);

    // Rotate the cube
    cube.rotation.x += 0.01;
    cube.rotation.y += 0.01;

    // Render the scene
    renderer.render(scene, camera);
}
    SetUp();
    GLTFLoader();
    lights();
    CameraSetUp();
    addCube();
    loadObj();
    animate();
