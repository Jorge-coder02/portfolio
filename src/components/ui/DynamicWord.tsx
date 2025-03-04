import { motion } from "framer-motion";
import { useState, useEffect } from "react";

const DynamicWord = () => {
  const [currentWord, setCurrentWord] = useState("Jorge");
  const words = ["Desarrollador", "Diseñador", "Creativo", "Jorge"];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentWord((prev) => {
        const nextIndex = (words.indexOf(prev) + 1) % words.length;
        return words[nextIndex];
      });
    }, 3500000);

    return () => clearInterval(interval);
  }, []);

  // Calcula el ancho aproximado de la palabra más larga (ajusta según tu fuente y tamaño)
  const fixedWidth = 150; // Ajusta este valor según sea necesario

  return (
    <motion.span
      key={currentWord}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 1 }}
      className="font-bold"
      style={{
        width: `${fixedWidth}px`,
        display: "inline-block",
        textAlign: "center",
      }} // Aplica el ancho fijo
    >
      {currentWord}
    </motion.span>
  );
};

export default DynamicWord;
