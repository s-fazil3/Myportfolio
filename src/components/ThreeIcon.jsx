import { useRef } from 'react';
import { useFrame } from '@react-three/fiber';
import { Float, Text3D, Center } from '@react-three/drei';

const ThreeIcon = ({ text, color, position }) => {
    const meshRef = useRef();

    useFrame((state, delta) => {
        if (meshRef.current) {
            meshRef.current.rotation.y += delta * 0.5;
        }
    });

    return (
        <Float speed={2} rotationIntensity={1.5} floatIntensity={2} position={position}>
            <mesh ref={meshRef}>
                <boxGeometry args={[1, 1, 1]} />
                <meshStandardMaterial color={color} roughness={0.1} metalness={0.8} />
            </mesh>
        </Float>
    );
};

export default ThreeIcon;
