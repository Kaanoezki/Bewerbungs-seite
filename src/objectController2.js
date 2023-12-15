console.log('loading objcontroller successful');

// instanz three js
const THREE = require('three');
const { GLTFLoader } = require('three-gltf-loader');

// setup
const scene = new THREE.Scene();
const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
const renderer = new THREE.WebGLRenderer();
renderer.setSize(window.innerWidth, window.innerHeight);
document.body.appendChild(renderer.domElement);

// gltf
const loader = new GLTFLoader();

// loading model
let gltfObject;

// Load the model
loader.load('../assets/suzann.gltf', (gltf) => {
    // Position and add the loaded model to the scene
    gltf.scene.position.set(0, 0, -10); // Adjust the z position
    scene.add(gltf.scene);
    gltfObject = gltf;
});

camera.position.z = -5;

// Create a cube
const geometry = new THREE.BoxGeometry();
const material = new THREE.MeshBasicMaterial({ color: 0x00ff00 });
const cube = new THREE.Mesh(geometry, material);

// Position the cube
cube.position.set(0, 0, 0);

// Add the cube to the scene
scene.add(cube);

// Light
// Create a point light
const pointLight = new THREE.PointLight(0xffffff, 1, 1000);
pointLight.position.set(50, 50, 50);

// Create an ambient light
const ambientLight = new THREE.AmbientLight(0xffffff, 0.5);

// Add the lights to the scene
scene.add(pointLight);
scene.add(ambientLight);

// Animator
function animate() {
    requestAnimationFrame(animate);

    // Rotate the loaded model if it exists
    if (gltfObject) {
        gltfObject.scene.rotation.y += 0.01;
    }

    // Rotate the cube
    cube.rotation.x += 0.01;
    cube.rotation.y += 0.01;

    // Render the scene
    renderer.render(scene, camera);
}

animate();

// Set a transparent background
renderer.setClearColor(0x000000, 0);
