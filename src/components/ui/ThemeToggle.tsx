// src/components/ThemeToggle.tsx
import { useState, useEffect } from "react";
import { MoonIcon, SunIcon } from "./Icons";
import { motion, AnimatePresence } from "framer-motion";

const ThemeToggle = () => {
  const [isDarkMode, setIsDarkMode] = useState(false);

  useEffect(() => {
    // Verifica si el usuario tiene preferencia por el modo oscuro en su sistema
    const prefersDarkMode = window.matchMedia(
      "(prefers-color-scheme: dark)",
    ).matches;
    setIsDarkMode(prefersDarkMode);

    // Aplica la clase `dark` al elemento <html> si es necesario
    if (prefersDarkMode) {
      document.documentElement.classList.add("dark"); // Añade la clase del html
      document.documentElement.classList.remove("lightMode"); // Quita la clase del html
    } else {
      document.documentElement.classList.remove("dark");
      document.documentElement.classList.add("lightMode");
    }
  }, []);

  const toggleTheme = () => {
    setIsDarkMode(!isDarkMode);

    // Cambia las clases en el <html>
    if (isDarkMode) {
      document.documentElement.classList.remove("dark");
      document.documentElement.classList.add("lightMode");
    } else {
      document.documentElement.classList.add("dark");
      document.documentElement.classList.remove("lightMode");
    }
  };
  return (
    <button
      onClick={toggleTheme}
      className="p-2 transition ease-in-out duration-300 rounded flex items-center"
      aria-label={isDarkMode ? "Cambiar a modo claro" : "Cambiar a modo oscuro"}
    >
      <AnimatePresence mode="wait">
        {isDarkMode ? (
          <motion.div
            key="sun"
            initial={{ opacity: 0, rotate: -90 }}
            animate={{ opacity: 1, rotate: 0 }}
            exit={{ opacity: 0, rotate: 90 }}
            transition={{ duration: 0.2, ease: "easeInOut" }}
          >
            <SunIcon />
          </motion.div>
        ) : (
          <motion.div
            key="moon"
            initial={{ opacity: 0, rotate: 90 }}
            animate={{ opacity: 1, rotate: 0 }}
            exit={{ opacity: 0, rotate: -90 }}
            transition={{ duration: 0.1, ease: "easeInOut" }}
          >
            <MoonIcon />
          </motion.div>
        )}
      </AnimatePresence>
    </button>
  );
};

export default ThemeToggle;
