import { Canvas } from "@react-three/fiber";
import { OrbitControls, Sphere, useTexture } from "@react-three/drei";
import { motion } from "framer-motion";

function Panorama({ image }) {
  const texture = useTexture(image);

  return (
    <Sphere args={[500, 60, 40]} scale={-1}>
      <meshBasicMaterial map={texture} />
    </Sphere>
  );
}

export default function VirtualTourModal({ open, onClose, image }) {
  if (!open) return null;

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="fixed inset-0 z-50 flex items-center justify-center"
    >
      {/* BLUR BACKDROP */}
      <div
        className="absolute inset-0 bg-black/80 backdrop-blur-md"
        onClick={onClose}
      />

      {/* MODAL */}
      <motion.div
        initial={{ scale: 0.8 }}
        animate={{ scale: 1 }}
        className="relative w-full max-w-5xl h-[80vh] rounded-2xl overflow-hidden border border-white/20"
      >
        {/* CLOSE */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 z-10 text-white bg-black/60 px-4 py-2 rounded-full"
        >
          ✕ Close
        </button>

        {/* CANVAS */}
        <Canvas camera={{ position: [0, 0, 0.1] }}>
          <OrbitControls
            enableZoom={false}
            enablePan={false}
            rotateSpeed={-0.3}
          />
          <Panorama image={image} />
        </Canvas>
      </motion.div>
    </motion.div>
  );
}
