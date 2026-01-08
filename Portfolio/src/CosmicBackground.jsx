import { useEffect, useRef } from "react";
import * as THREE from "three";

const CosmicBackground = () => {
  const mountRef = useRef(null);
  const animationRef = useRef(null);
  const mouse = useRef({ x: 0, y: 0 });

  useEffect(() => {
    if (!mountRef.current) return;

    /* ================= Scene ================= */
    const scene = new THREE.Scene();
    scene.background = new THREE.Color(0x04030f);

    /* ================= Camera ================= */
    const camera = new THREE.PerspectiveCamera(
      75,
      window.innerWidth / window.innerHeight,
      0.1,
      4000
    );
    camera.position.z = 500;

    /* ================= Renderer ================= */
    const renderer = new THREE.WebGLRenderer({ antialias: true, alpha: true });
    renderer.setSize(window.innerWidth, window.innerHeight);
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
    mountRef.current.appendChild(renderer.domElement);

    /* ================= Stars ================= */
    const starCount = 18000;
    const starPositions = new Float32Array(starCount * 3);

    for (let i = 0; i < starCount; i++) {
      starPositions[i * 3] = (Math.random() - 0.5) * 3000;
      starPositions[i * 3 + 1] = (Math.random() - 0.5) * 3000;
      starPositions[i * 3 + 2] = -Math.random() * 3000;
    }

    const starGeometry = new THREE.BufferGeometry();
    starGeometry.setAttribute(
      "position",
      new THREE.BufferAttribute(starPositions, 3)
    );

    const starMaterial = new THREE.PointsMaterial({
      color: 0xffffff,
      size: 1.2,
      transparent: true,
      opacity: 0.85,
      depthWrite: false,
    });

    const stars = new THREE.Points(starGeometry, starMaterial);
    scene.add(stars);

    /* ================= Nebula (Color Shifting) ================= */
    const nebulaMaterial = new THREE.MeshBasicMaterial({
      color: new THREE.Color(0x6a5cff),
      transparent: true,
      opacity: 0.08,
      side: THREE.BackSide,
    });

    const nebula = new THREE.Mesh(
      new THREE.SphereGeometry(2000, 64, 64),
      nebulaMaterial
    );
    scene.add(nebula);

    /* ================= Planet ================= */
    const planet = new THREE.Mesh(
      new THREE.SphereGeometry(120, 64, 64),
      new THREE.MeshStandardMaterial({
        color: 0x3b82f6,
        roughness: 0.6,
        metalness: 0.2,
        emissive: 0x1e3a8a,
        emissiveIntensity: 0.35,
      })
    );
    planet.position.set(-300, 120, -800);
    scene.add(planet);

    const glow = new THREE.Mesh(
      new THREE.SphereGeometry(140, 64, 64),
      new THREE.MeshBasicMaterial({
        color: 0x60a5fa,
        transparent: true,
        opacity: 0.18,
      })
    );
    glow.position.copy(planet.position);
    scene.add(glow);

    /* ================= Lights ================= */
    scene.add(new THREE.AmbientLight(0xffffff, 0.8));

    const dirLight = new THREE.DirectionalLight(0x9f9cff, 1.2);
    dirLight.position.set(200, 300, 400);
    scene.add(dirLight);

    /* ================= Spaceship ================= */
    const ship = new THREE.Mesh(
      new THREE.ConeGeometry(10, 40, 16),
      new THREE.MeshStandardMaterial({
        color: 0xe5e7eb,
        metalness: 0.9,
        roughness: 0.3,
        emissive: 0x93c5fd,
        emissiveIntensity: 0.6,
      })
    );
    ship.rotation.x = Math.PI / 2;
    ship.position.set(600, -120, -1200);
    scene.add(ship);

    /* ================= Mouse Parallax ================= */
    const onMouseMove = (e) => {
      mouse.current.x = (e.clientX / window.innerWidth - 0.5) * 2;
      mouse.current.y = (e.clientY / window.innerHeight - 0.5) * 2;
    };
    window.addEventListener("mousemove", onMouseMove);

    /* ================= Animation ================= */
    let hue = 0;

    const animate = () => {
      animationRef.current = requestAnimationFrame(animate);

      /* Stars */
      const pos = starGeometry.attributes.position.array;
      for (let i = 0; i < pos.length; i += 3) {
        pos[i + 2] += 3;
        if (pos[i + 2] > 500) pos[i + 2] = -3000;
      }
      starGeometry.attributes.position.needsUpdate = true;

      /* Nebula color shift */
      hue += 0.0003;
      nebulaMaterial.color.setHSL(0.65 + Math.sin(hue) * 0.1, 0.7, 0.55);

      /* Planet motion */
      planet.rotation.y += 0.0015;
      glow.rotation.y += 0.0015;

      /* Spaceship fly */
      ship.position.x -= 0.7;
      ship.position.y += Math.sin(Date.now() * 0.001) * 0.15;
      if (ship.position.x < -700) ship.position.x = 700;

      /* Mouse parallax (SMOOTH) */
      camera.position.x += (mouse.current.x * 40 - camera.position.x) * 0.05;
      camera.position.y += (-mouse.current.y * 40 - camera.position.y) * 0.05;
      camera.lookAt(0, 0, -800);

      renderer.render(scene, camera);
    };

    animate();

    /* ================= Resize ================= */
    const onResize = () => {
      camera.aspect = window.innerWidth / window.innerHeight;
      camera.updateProjectionMatrix();
      renderer.setSize(window.innerWidth, window.innerHeight);
    };
    window.addEventListener("resize", onResize);

    /* ================= Cleanup ================= */
    return () => {
      cancelAnimationFrame(animationRef.current);
      window.removeEventListener("resize", onResize);
      window.removeEventListener("mousemove", onMouseMove);
      renderer.dispose();
      mountRef.current.removeChild(renderer.domElement);
    };
  }, []);

  return (
    <div
      ref={mountRef}
      style={{
        position: "fixed",
        inset: 0,
        zIndex: -50,
        pointerEvents: "none",
      }}
    />
  );
};

export default CosmicBackground;
