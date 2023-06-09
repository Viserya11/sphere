import * as THREE from "three";
import { OrbitControls } from "three/examples/jsm/controls/OrbitControls.js";
import React from "react";
import "./index.css";
import { gsap } from "gsap";

export default function App() {
  //setting up the scene

  const scene = new THREE.Scene();

  //camera perspective

  const camera = new THREE.PerspectiveCamera(45, innerWidth / innerHeight);

  //renderer

  const renderer = new THREE.WebGLRenderer({
    antialias: true,
  });

  renderer.setSize(innerWidth, innerHeight);
  renderer.setPixelRatio(window.devicePixelRatio);
  document.body.appendChild(renderer.domElement);

  // creating the sphere
  const sphere = new THREE.Mesh(
    new THREE.SphereGeometry(5, 20, 20),
    new THREE.MeshBasicMaterial({
      color: 0xedddab,
      wireframe: true,
      transparent: true,
      opacity: 0.35,
    })
  );

  scene.add(sphere);

  //light
  const light = new THREE.PointLight(0xffffff, 1, 100);
  light.position.set(0, 10, 10);
  scene.add(light);

  //camera position
  camera.position.z = 20;

  const sizes = {
    width: window.innerWidth,
    height: window.innerHeight,
  };

  const controls = new OrbitControls(camera, renderer.domElement);
  controls.enableDamping = true;
  controls.enablePan = false;
  controls.enableZoom = false;
  controls.autoRotateSpeed = 8;

  function animate() {
    controls.update();
    sphere.rotation.y += 0.007;
    requestAnimationFrame(animate);
    renderer.render(scene, camera);
  }
  animate();

  window.addEventListener("resize", () => {
    sizes.width = window.innerWidth;
    sizes.height = window.innerHeight;
    camera.aspect = sizes.width / sizes.height;
    camera.updateProjectionMatrix();
    renderer.setSize(sizes.width, sizes.height);
  });

  const loop = () => {
    renderer.render(scene, camera);
    window.requestAnimationFrame(loop);
  };
  loop();



  return <></>;
}
