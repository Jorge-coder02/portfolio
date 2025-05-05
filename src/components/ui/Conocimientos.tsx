import { useState } from "react";

type Technology = {
  name: string;
  subItems?: {
    name: string;
    description: string;
    projects?: string[];
    level: "Básico" | "Intermedio" | "Avanzado";
  }[];
};

// Función para obtener el enlace del proyecto según su nombre
const getEnlace = (proyecto: string) => {
  switch (proyecto) {
    case "Cartelera de cine":
      return "https://devflixcinema.netlify.app/";
    case "FinTech":
      return "https://growbit.netlify.app/";
    case "Acortador de URL":
      return "https://short-url-frontend-khaki.vercel.app/";
    case "Restaurante con reservas":
      return "https://restauranteesp.netlify.app/";
    case "Todos mis proyectos recientes":
      return "#proyectos";
    case "Varios proyectos recientes":
      return "#proyectos";
    default:
      return "#"; // Retorna un enlace por defecto si no se encuentra el proyecto
  }
};

const Conocimientos = () => {
  const [selectedTech, setSelectedTech] = useState<string | null>(null);
  const [selectedSubItem, setSelectedSubItem] = useState<string | null>(null);

  const technologies: Technology[] = [
    {
      name: "React",
      subItems: [
        {
          name: "React Router",
          description:
            "Dominio en la creación de SPA con navegación cliente. Implementación de rutas protegidas, lazy loading y manejo de parámetros URL.",
          projects: ["Cartelera de cine", "FinTech"],
          level: "Avanzado",
        },
        {
          name: "React Hooks",
          description:
            "Uso de useState, useEffect, useReducer y useContext. Creación de hooks personalizados para lógica reutilizable. Aplicado en formularios, manejo de APIs, validación de sesiones...",
          projects: ["Todos mis proyectos recientes"],
          level: "Intermedio",
        },
        {
          name: "Styled Components",
          description:
            "Uso de Styled Components para crear estilos dinámicos y reutilizables en componentes React. Integración con temas y diseño responsivo.",
          projects: ["FinTech"],
          level: "Intermedio",
        },
      ],
    },
    {
      name: "JavaScript",
      subItems: [
        {
          name: "ES6+ Moderno",
          description: `
             Dominio de características modernas: arrow functions, destructuring, spread/rest, promises, async/await, módulos.`,
          level: "Avanzado",
        },
        {
          name: "Patrones y Buenas Prácticas",
          description: `
            - Functional Programming: Uso de map, filter, funciones puras e inmutabilidad.\n
            - POO: Clases, herencia, encapsulamiento.\n
            - Event Loop: Conocimiento de cómo funciona el asincronismo en JS (call stack, task queue, microtasks).\n
            - Web APIs: Integración con APIs del navegador (Fetch, DOM, LocalStorage, etc.).
            `,
          level: "Avanzado",
        },
      ],
    },
    {
      name: "TypeScript",
      subItems: [
        {
          name: "TypeScript",
          description: `Desarrollo con tipado estático, interfaces y tipos personalizados.  Tipado de componentes, props, hooks (useState, useContext con tipos). 
          
          Uso de TypeScript para mejorar mantenibilidad y reducir bugs en proyectos a escala potencial media/grande.`,
          projects: [
            "Todos mis proyectos recientes",
            "Migración de código JavaScript a TypeScript en diversos proyectos.",
          ],
          level: "Avanzado",
        },
      ],
    },
    {
      name: "Tailwind CSS",
      subItems: [
        {
          name: "Tailwind CSS",
          description: `Uso de Tailwind CSS para crear interfaces responsivas y modernas. Dominio de clases utilitarias, diseño mobile-first y personalización de temas.`,
          projects: ["Todos mis proyectos recientes"],
          level: "Avanzado",
        },
        {
          name: "Daisy UI",
          description: `Daisy UI es una biblioteca de componentes de Tailwind CSS que permite crear interfaces de usuario de manera rápida y sencilla. 
          
          Utilizo Daisy UI puntualmente para acelerar el desarrollo y mantener la coherencia visual en mis proyectos.`,
          level: "Avanzado",
        },
      ],
    },

    {
      name: "Backend",
      subItems: [
        {
          name: "Node.js",
          description: `Desarrollo de aplicaciones backend con Node.js. Creación de APIs RESTful y manejo de bases de datos.`,
          projects: [
            "Cartelera de cine",
            "Acortador de URL",
            "Restaurante con reservas",
          ],
          level: "Intermedio",
        },
        {
          name: "Express",
          description: `Uso de Express para crear APIs RESTful. Manejo de rutas, middleware y gestión de errores.`,
          projects: [
            "Cartelera de cine",
            "Acortador de URL",
            "Restaurante con reservas",
          ],
          level: "Intermedio",
        },
        {
          name: "MongoDB",
          description: `Uso de MongoDB para almacenamiento de datos. Creación de esquemas y modelos con Mongoose. Integración con aplicaciones Node.js.`,
          projects: [
            "Cartelera de cine",
            "Acortador de URL",
            "Restaurante con reservas",
          ],
          level: "Intermedio",
        },
      ],
    },
    {
      name: "Testing",
      subItems: [
        {
          name: "Jest",
          description: `Pruebas unitarias y de integración. Creación de mocks sencillos y spies para simular comportamientos en pruebas.
            `,
          level: "Básico",
        },
        {
          name: "React Testing Library",
          description: `Pruebas de componentes React. Enfoque en pruebas centradas en el usuario y simulación de interacciones.`,
          level: "Básico",
        },
      ],
    },
  ];

  const currentItem = technologies
    .find((tech) => tech.name === selectedTech)
    ?.subItems?.find((item) => item.name === selectedSubItem);

  return (
    <section
      className={`py-12 px-4 sm:px-6 lg:px-8 lg:bg-gray-900 text-white rounded-xl shadow-lg`}
    >
      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-8">
        {/* Menú lateral */}
        <div className="md:col-span-1 bg-gray-800 rounded-lg p-4">
          <h3 className="text-xl font-semibold mb-4">Tecnologías</h3>
          <ul className="space-y-2">
            {technologies.map((tech) => (
              <li key={tech.name}>
                <button
                  onClick={() => {
                    setSelectedTech(tech.name);
                    setSelectedSubItem(null);
                  }}
                  className={`w-full text-left p-2 rounded hover:bg-gray-700 transition ${selectedTech === tech.name ? "bg-gray-700" : ""}`}
                >
                  {tech.name}
                </button>

                {selectedTech === tech.name && tech.subItems && (
                  <ul className="ml-4 mt-1 space-y-1">
                    {tech.subItems.map((item) => (
                      <li key={item.name}>
                        <button
                          onClick={() => setSelectedSubItem(item.name)}
                          className={`w-full text-left p-2 rounded hover:bg-gray-600 transition text-sm ${selectedSubItem === item.name ? "bg-gray-600" : ""}`}
                        >
                          {item.name}
                        </button>
                      </li>
                    ))}
                  </ul>
                )}
              </li>
            ))}
          </ul>
        </div>

        {/* Área de contenido */}
        <div className="md:col-span-3 bg-gray-800 rounded-lg p-6">
          {currentItem ? (
            <div>
              <h3 className="text-2xl font-bold mb-2">{currentItem.name}</h3>
              <div className="flex items-center mb-4">
                <span className="px-3 py-1 rounded-full text-xs font-medium bg-cyan-500 text-white">
                  {currentItem.level}
                </span>
              </div>
              <p className="whitespace-pre-line mb-4">
                {currentItem.description}
              </p>

              {currentItem.projects && (
                <div>
                  <h4 className="font-semibold mb-2">
                    Proyectos donde lo he aplicado:
                  </h4>
                  <ul className="list-disc pl-5 space-y-1">
                    {currentItem.projects.map((project, index) => (
                      <a
                        href={getEnlace(project)}
                        target={`${project === "Todos mis proyectos recientes" ? "_self" : "_blank"}`}
                        rel="noopener noreferrer"
                        className="hover:underline"
                      >
                        <li key={index}>{project}</li>
                      </a>
                    ))}
                  </ul>
                </div>
              )}
            </div>
          ) : (
            <div className="flex items-center justify-center h-full">
              <p className="text-gray-400">
                Selecciona una tecnología para ver detalles
              </p>
            </div>
          )}
        </div>
      </div>
    </section>
  );
};

export default Conocimientos;
