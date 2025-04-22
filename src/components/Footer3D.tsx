
import React, { useRef, useState } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { Text, Float } from '@react-three/drei';

const FooterText = ({ text, position, url }: { text: string; position: [number, number, number]; url: string }) => {
  const [hovered, setHovered] = useState(false);
  const textRef = useRef<any>();
  
  // Animation when hovering - using useFrame from @react-three/fiber
  useFrame(() => {
    if (textRef.current) {
      if (hovered) {
        textRef.current.position.z = Math.sin(Date.now() * 0.001) * 0.2 + 0.5;
      } else {
        textRef.current.position.z = 0;
      }
    }
  });

  return (
    <Float speed={1.5} rotationIntensity={0.2} floatIntensity={0.5}>
      <Text
        ref={textRef}
        position={position}
        fontSize={0.5}
        color="#FFFFFF"
        font="/fonts/Inter-Bold.woff"
        anchorX="center"
        anchorY="middle"
        onClick={() => window.location.href = url}
        onPointerOver={() => {
          document.body.style.cursor = 'pointer';
          setHovered(true);
        }}
        onPointerOut={() => {
          document.body.style.cursor = 'auto';
          setHovered(false);
        }}
      >
        {text}
        {hovered && (
          <meshStandardMaterial 
            color="#FFFFFF" 
            emissive="#FFFFFF"
            emissiveIntensity={0.5}
          />
        )}
      </Text>
    </Float>
  );
};

export const Footer3D = () => {
  const footerItems = [
    { text: 'Shop Now', url: '/find-job', position: [-2.5, 0, 0] },
    { text: 'About Us', url: '/about', position: [0, 0, 0] },
    { text: 'Contact', url: '/contact', position: [2.5, 0, 0] },
  ];

  return (
    <div className="h-[400px] w-full bg-[#3A5A40] relative">
      <div className="absolute inset-0 bg-gradient-to-b from-[#3A5A40]/90 to-[#3A5A40]"></div>
      <Canvas camera={{ position: [0, 0, 5], fov: 50 }}>
        <ambientLight intensity={1.5} />
        <pointLight position={[10, 10, 10]} intensity={1.5} />
        <fog attach="fog" args={['#3A5A40', 4, 10]} />
        
        {footerItems.map((item, index) => (
          <FooterText 
            key={index} 
            text={item.text} 
            position={item.position as [number, number, number]} 
            url={item.url} 
          />
        ))}
      </Canvas>
      
      {/* Add a visible title at the top of the footer for clarity */}
      <div className="absolute top-4 left-0 right-0 text-center text-white text-2xl font-bold z-10">
        Connect With Us
      </div>
    </div>
  );
};
