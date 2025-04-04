import React, { useEffect, useRef } from 'react';
import * as THREE from 'three';
const GalaxyBackground = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const sceneRef = useRef<THREE.Scene | null>(null);
  const cameraRef = useRef<THREE.PerspectiveCamera | null>(null);
  const rendererRef = useRef<THREE.WebGLRenderer | null>(null);
  const starsRef = useRef<THREE.Points | null>(null);
  useEffect(() => {
    if (!containerRef.current) return;
    // Initialize scene
    const scene = new THREE.Scene();
    sceneRef.current = scene;
    // Initialize camera
    const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
    camera.position.z = 20;
    cameraRef.current = camera;
    // Initialize renderer
    const renderer = new THREE.WebGLRenderer({
      alpha: true,
      antialias: true
    });
    renderer.setSize(window.innerWidth, window.innerHeight);
    renderer.setClearColor(0x000000, 0);
    containerRef.current.appendChild(renderer.domElement);
    rendererRef.current = renderer;
    // Create stars
    const starsGeometry = new THREE.BufferGeometry();
    const starsMaterial = new THREE.PointsMaterial({
      color: 0xffffff,
      size: 0.1,
      transparent: true
    });
    const starsCount = 1500;
    const starsPositions = new Float32Array(starsCount * 3);
    const starsColors = new Float32Array(starsCount * 3);
    for (let i = 0; i < starsCount * 3; i += 3) {
      // Position
      starsPositions[i] = (Math.random() - 0.5) * 50;
      starsPositions[i + 1] = (Math.random() - 0.5) * 50;
      starsPositions[i + 2] = (Math.random() - 0.5) * 50;
      // Color - purple/blue hues
      const colorChoice = Math.random();
      if (colorChoice < 0.3) {
        // Purple
        starsColors[i] = 0.5 + Math.random() * 0.5;
        starsColors[i + 1] = 0.1 + Math.random() * 0.3;
        starsColors[i + 2] = 0.8 + Math.random() * 0.2;
      } else if (colorChoice < 0.6) {
        // Blue
        starsColors[i] = 0.1 + Math.random() * 0.2;
        starsColors[i + 1] = 0.3 + Math.random() * 0.4;
        starsColors[i + 2] = 0.7 + Math.random() * 0.3;
      } else {
        // White
        starsColors[i] = 0.8 + Math.random() * 0.2;
        starsColors[i + 1] = 0.8 + Math.random() * 0.2;
        starsColors[i + 2] = 0.8 + Math.random() * 0.2;
      }
    }
    starsGeometry.setAttribute('position', new THREE.BufferAttribute(starsPositions, 3));
    starsGeometry.setAttribute('color', new THREE.BufferAttribute(starsColors, 3));
    starsMaterial.vertexColors = true;
    const stars = new THREE.Points(starsGeometry, starsMaterial);
    scene.add(stars);
    starsRef.current = stars;
    // Animation loop
    const animate = () => {
      requestAnimationFrame(animate);
      if (starsRef.current) {
        starsRef.current.rotation.x += 0.0003;
        starsRef.current.rotation.y += 0.0002;
      }
      renderer.render(scene, camera);
    };
    animate();
    // Handle window resize
    const handleResize = () => {
      if (!cameraRef.current || !rendererRef.current) return;
      cameraRef.current.aspect = window.innerWidth / window.innerHeight;
      cameraRef.current.updateProjectionMatrix();
      rendererRef.current.setSize(window.innerWidth, window.innerHeight);
    };
    window.addEventListener('resize', handleResize);
    // Cleanup
    return () => {
      window.removeEventListener('resize', handleResize);
      if (containerRef.current && rendererRef.current) {
        containerRef.current.removeChild(rendererRef.current.domElement);
      }
      if (starsRef.current) {
        scene.remove(starsRef.current);
        starsGeometry.dispose();
        starsMaterial.dispose();
      }
    };
  }, []);
  return <div ref={containerRef} className="absolute inset-0 z-0" />;
};
export default GalaxyBackground;