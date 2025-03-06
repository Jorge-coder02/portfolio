import React, { type ReactNode } from "react";

type Props = { texto: string; svg: ReactNode; enlace: string };

function BotonLink({ texto, svg, enlace }: Props) {
  return (
    <>
      <a href={enlace} target="_blank">
        <button className="flex gap-x-2 btn btn-sm h-11 normal-case bg-gray-200 hover:bg-gray-800 hover:text-white text-black tracking-wide">
          {svg}
          <span>{texto}</span>
        </button>
      </a>
    </>
  );
}

export default BotonLink;
