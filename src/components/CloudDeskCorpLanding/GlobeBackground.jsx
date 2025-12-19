import React, { useRef, useEffect } from "react";

const GlobeBackground = () => {
  const mountRef = useRef(null);

  useEffect(() => {
    if (!mountRef.current) return;

    let scene, camera, renderer, globe, stars;
    let animationId;

    const init = async () => {
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

      scene = new THREE.Scene();
      scene.fog = new THREE.FogExp2(0x0f172a, 0.002);

      camera = new THREE.PerspectiveCamera(
        60,
        mountRef.current.clientWidth / mountRef.current.clientHeight,
        0.1,
        1000
      );
      camera.position.z = 25;
      camera.position.y = 5;

      renderer = new THREE.WebGLRenderer({ alpha: true, antialias: true });
      renderer.setSize(
        mountRef.current.clientWidth,
        mountRef.current.clientHeight
      );
      renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
      mountRef.current.appendChild(renderer.domElement);

      const geometry = new THREE.IcosahedronGeometry(10, 2);
      const material = new THREE.MeshBasicMaterial({
        color: 0x38bdf8,
        wireframe: true,
        transparent: true,
        opacity: 0.2,
      });

      globe = new THREE.Mesh(geometry, material);
      scene.add(globe);

      // Stars
      const particlesGeo = new THREE.BufferGeometry();
      const particlesCount = 800;
      const posArray = new Float32Array(particlesCount * 3);

      for (let i = 0; i < particlesCount * 3; i++)
        posArray[i] = (Math.random() - 0.5) * 60;

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

      animate();
    };

    const animate = () => {
      animationId = requestAnimationFrame(animate);

      if (globe) {
        globe.rotation.y += 0.0015;
        globe.rotation.x += 0.0003;
      }

      if (stars) stars.rotation.y -= 0.0005;

      if (renderer && scene && camera)
        renderer.render(scene, camera);
    };

    const handleResize = () => {
      if (!mountRef.current || !camera || !renderer) return;

      camera.aspect =
        mountRef.current.clientWidth / mountRef.current.clientHeight;
      camera.updateProjectionMatrix();

      renderer.setSize(
        mountRef.current.clientWidth,
        mountRef.current.clientHeight
      );
    };

    init();
    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
      cancelAnimationFrame(animationId);
      if (mountRef.current && renderer)
        mountRef.current.removeChild(renderer.domElement);
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
