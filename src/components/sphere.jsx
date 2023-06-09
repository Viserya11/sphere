import React from 'react'
import * as THREE from "three";
import { OrbitControls } from "three/examples/jsm/controls/OrbitControls.js";
import React from "react";

export default function Globe() {
    //setting up the scene

  const scene = new THREE.Scene();

  //camera perspective

  const camera = new THREE.PerspectiveCamera(
    75,
    innerWidth / innerHeight,
    0.1,
    1000
  );

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
      color: 0x7851a9,
      wireframe: true, transparent: true, opacity: 0.75
    })
  );

  scene.add(sphere);

  //light
  const light = new THREE.PointLight(0xffffff, 1);
  scene.add(light);

  //camera position
  camera.position.z = 20;

  const controls = new OrbitControls(camera, renderer.domElement);
  controls.enableDamping = true

  function animate() {
    controls.update();
    requestAnimationFrame(animate);
    renderer.render(scene, camera);
  }
  animate();
  return (
    <div>sphere</div>
  )
}
