"use client";

import React, { useEffect, useRef } from 'react';
import * as THREE from 'three';

const PuzzleScene = () => {
  const mountRef = useRef(null);

  useEffect(() => {
    const width = mountRef.current.clientWidth;
    const height = mountRef.current.clientHeight;

    // Create the scene
    const scene = new THREE.Scene();
    scene.background = new THREE.Color(0xffffff);

    // Create the camera
    const camera = new THREE.PerspectiveCamera(75, width / height, 0.1, 1000);
    camera.position.z = 5;

    // Create the renderer
    const renderer = new THREE.WebGLRenderer({ antialias: true });
    renderer.setSize(width, height);
    mountRef.current.appendChild(renderer.domElement);

    // Create the shape with square base and four semicircles
    const shape = new THREE.Shape();
    const radius = 0.35;
    const squareSize = 2;

    // Square base
    shape.moveTo(-squareSize / 2, -squareSize / 2);
    shape.lineTo(squareSize / 2, -squareSize / 2);
    shape.lineTo(squareSize / 2, squareSize / 2);
    shape.lineTo(-squareSize / 2, squareSize / 2);
    shape.lineTo(-squareSize / 2, -squareSize / 2);

    // Semicircular cut at the bottom
    shape.absarc(0, -squareSize / 2, radius, Math.PI * 2, 0, false);

    shape.lineTo(squareSize / 2.2, squareSize / 2);

    // Semicircular cut at the top
    shape.absarc(0, squareSize / 2, radius, 0, Math.PI * 2, false);

    shape.lineTo(-squareSize / 2.2, squareSize / 2);

    // Semicircle attached to the right side of the square
    shape.absarc(squareSize / 2, 0, radius, Math.PI * 1.5, -Math.PI * 1.5, false);

    // Semicircle attached to the left side of the square
    shape.absarc(-squareSize / 2, 0, radius, -Math.PI * 1.5, Math.PI * 1.5, false);

    // Extrude the shape into 3D geometry with depth and beveling
    const extrudeSettings = { depth: 0.3, bevelEnabled: true, bevelSize: 0.05, bevelSegments: 3 };
    const geometry = new THREE.ExtrudeGeometry(shape, extrudeSettings);

   
   const position = geometry.attributes.position;
   const vector = new THREE.Vector3();

   const angle = -Math.PI / 12;  
   const cosAngle = Math.cos(angle);
   const sinAngle = Math.sin(angle);

   for (let i = 0; i < position.count; i++) {
     vector.fromBufferAttribute(position, i);

     // Apply rotation matrix for X-axis
     const y = vector.y * cosAngle - vector.z * sinAngle;
     const z = vector.y * sinAngle + vector.z * cosAngle;

     position.setXYZ(i, vector.x, y, z);
   }

   position.needsUpdate = true;

    position.needsUpdate = true;

    // Create material with a more realistic appearance
    const material = new THREE.MeshPhongMaterial({ color: 0x000000, shininess: 200 })

    // Create the puzzle piece mesh
    const puzzlePiece = new THREE.Mesh(geometry, material);
    puzzlePiece.position.set(0, 0, 0); // Adjust position so it's centered
    scene.add(puzzlePiece);

    // Add lights for a more realistic lighting environment
    const directionalLight = new THREE.DirectionalLight(0xffffff, 1)
    directionalLight.position.z = 9
    scene.add(directionalLight)


    // Add an environment map for reflections (ensure you have a valid HDR image)
    const loader = new THREE.CubeTextureLoader();
    const texture = loader.load([
      'https://dl.polyhaven.com/file/hdr/10k/venice_sunset_10k.hdr',
      'https://dl.polyhaven.com/file/hdr/10k/venice_sunset_10k.hdr',
      'https://dl.polyhaven.com/file/hdr/10k/venice_sunset_10k.hdr',
      'https://dl.polyhaven.com/file/hdr/10k/venice_sunset_10k.hdr',
      'https://dl.polyhaven.com/file/hdr/10k/venice_sunset_10k.hdr',
      'https://dl.polyhaven.com/file/hdr/10k/venice_sunset_10k.hdr',
    ]);
    scene.environment = texture;

    // Animation loop
    const animate = () => {
      requestAnimationFrame(animate);

      // Rotate puzzle piece horizontally only
      puzzlePiece.rotation.y += 0.005;
      renderer.render(scene, camera);
    };

    animate();

    // Clean up on component unmount
    return () => {
      mountRef.current.removeChild(renderer.domElement);
    };
  }, []);

  return <div ref={mountRef} style={{ width: '100%', height: '100%' }} />;
};

export default PuzzleScene;