import React, { useEffect, useRef } from "react";

const GlobeBackground = () => {
  const mountRef = useRef(null);

  useEffect(() => {
    if (!mountRef.current) return;

    let scene, camera, renderer, globe, stars;
    let animationId;

    const init = () => {
      // Load THREE.js from CDN ONLY if missing
      if (!window.THREE) {
        const script = document.createElement("script");
        script.src =
          "https://cdnjs.cloudflare.com/ajax/libs/three.js/r128/three.min.js";
        script.onload = setupScene;
        document.body.appendChild(script);
      } else {
        setupScene();
      }
    };

    const setupScene = () => {
      const THREE = window.THREE;

      // Scene
      scene = new THREE.Scene();
      scene.fog = new THREE.FogExp2(0x0f172a, 0.002);

      // Camera
      const width = mountRef.current.clientWidth;
      const height = mountRef.current.clientHeight;
      camera = new THREE.PerspectiveCamera(60, width / height, 0.1, 1000);
      camera.position.set(0, 5, 25);

      // Renderer
      renderer = new THREE.WebGLRenderer({ alpha: true, antialias: true });
      renderer.setSize(width, height);
      renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
      mountRef.current.appendChild(renderer.domElement);

      // Globe
      const geometry = new THREE.IcosahedronGeometry(10, 2);
      const material = new THREE.MeshBasicMaterial({
        color: 0x38bdf8,
        wireframe: true,
        transparent: true,
        opacity: 0.3,
      });
      globe = new THREE.Mesh(geometry, material);
      scene.add(globe);

      // Inner core
      const coreGeo = new THREE.IcosahedronGeometry(9.8, 2);
      const coreMat = new THREE.MeshBasicMaterial({
        color: 0x0ea5e9,
        transparent: true,
        opacity: 0.1,
      });
      const core = new THREE.Mesh(coreGeo, coreMat);
      globe.add(core);

      // Floating stars
      const particlesGeo = new THREE.BufferGeometry();
      const particlesCount = 700;
      const posArray = new Float32Array(particlesCount * 3);

      for (let i = 0; i < posArray.length; i++) {
        posArray[i] = (Math.random() - 0.5) * 60;
      }

      particlesGeo.setAttribute(
        "position",
        new THREE.BufferAttribute(posArray, 3)
      );

      const particlesMat = new THREE.PointsMaterial({
        size: 0.05,
        color: 0xffffff,
        transparent: true,
        opacity: 0.6,
      });

      stars = new THREE.Points(particlesGeo, particlesMat);
      scene.add(stars);

      // Lights
      scene.add(new THREE.AmbientLight(0xffffff, 0.5));

      const pointLight = new THREE.PointLight(0x38bdf8, 1);
      pointLight.position.set(20, 20, 20);
      scene.add(pointLight);

      animate();
    };

    const animate = () => {
      animationId = requestAnimationFrame(animate);

      if (globe) {
        globe.rotation.y += 0.002;
        globe.rotation.x += 0.0005;
      }

      if (stars) {
        stars.rotation.y -= 0.0005;
      }

      renderer?.render(scene, camera);
    };

    const handleResize = () => {
      if (!mountRef.current || !camera || !renderer) return;

      const width = mountRef.current.clientWidth;
      const height = mountRef.current.clientHeight;

      camera.aspect = width / height;
      camera.updateProjectionMatrix();
      renderer.setSize(width, height);
    };

    init();
    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
      cancelAnimationFrame(animationId);

      if (renderer?.domElement && mountRef.current) {
        mountRef.current.removeChild(renderer.domElement);
      }
    };
  }, []);

  return (
    <div
      ref={mountRef}
      className="absolute inset-0 z-0 pointer-events-none"
    />
  );
};

export default GlobeBackground;
