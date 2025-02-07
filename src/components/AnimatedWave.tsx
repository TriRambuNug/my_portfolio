"use client";
import { motion } from "framer-motion";
import { useEffect, useState } from "react";
import { useTheme } from "next-themes";

export default function PulsatingWave() {
  const [isClient, setIsClient] = useState(false);
  const { theme } = useTheme();

  useEffect(() => {
    setIsClient(true);
  }, []);

  if (!isClient) return null; // Don't render on the server

  const wafeColor = theme === "dark" ? "#1e40af" : "#3b82f6";

  return (
    <div className="absolute bottom-0 left-0 w-full overflow-hidden leading-none">
      <svg
        className="w-full h-[200px] md:h-[250px] lg:h-[300px]"
        viewBox="0 0 1440 320"
        preserveAspectRatio="none"
      >
        <motion.path
          fill={wafeColor}
          d="M0,224L48,208C96,192,192,160,288,154.7C384,149,480,171,576,181.3C672,192,768,192,864,202.7C960,213,1056,235,1152,229.3C1248,224,1344,192,1392,176L1440,160V320H0Z"
          initial={{ scale: 1 }}
          animate={{ scale: [1, 1.1, 1] }}
          transition={{
            repeat: Infinity,
            duration: 3,
            ease: "easeInOut",
          }}
        />
      </svg>
    </div>
  );
}