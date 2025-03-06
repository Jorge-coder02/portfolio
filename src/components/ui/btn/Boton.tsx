import React, { type ReactElement, type ReactNode } from "react";

type Props = { bg_color: string; texto: string; svg?: ReactNode };

function Boton({ bg_color, texto, svg }: Props) {
  return (
    <button
      style={{ backgroundColor: bg_color }}
      className="flex gap-x-1 btn rounded-badge btn-xs cursor-default border-0 normal-case dark:text-white"
    >
      {svg}
      <span>{texto}</span>
    </button>
  );
}

export default Boton;
