// const { Canvas } = require("@react-three/fiber");


// 145 //


// Scene 
const scene = new THREE.Scene();

// red cube 

const geometry = new THREE.BoxGeometry(1,1,1);

const material = new THREE.MeshBasicMaterial({color:'brown',});

const mesh = new THREE.Mesh(geometry, material);
scene.add(mesh);

// sizes //
const sizes = {
    width: 800,
    height: 600
}

// camera //

const camera= new THREE.PerspectiveCamera(75)
scene.add(camera);

// canvas //
const canvas = document.querySelector('.webgl');
console.log(canvas)
const render = new THREE.WebGLRenderer({
    canvas: canvas
});