import React, { type ReactNode } from "react";

type Props = { titulo: string; children: ReactNode };

function ContenedorTech({ titulo, children }: Props) {
  return (
    <div className="flex flex-col h-full w-4/5 md:w-2/5 lg:w-screen p-8  gap-y-9 gap-x-3 border-3  border-purple-500 rounded-box shadow-lg">
      <h3 className="text-2xl font-semibold text-center text-purple-600">
        {titulo}
      </h3>
      {/* <!-- Contenedor iconos --> */}
      <div className="grid grid-cols-2  justify-items-center lg:gap-x-4 gap-y-8">
        {children}
      </div>
    </div>
  );
}

export default ContenedorTech;
