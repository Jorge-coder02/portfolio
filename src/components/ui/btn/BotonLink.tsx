import React, { type ReactNode } from "react";

type Props = { texto: string; svg: ReactNode; enlace: string };

function BotonLink({ texto, svg, enlace }: Props) {
  return (
    <>
      <a href={enlace} target="_blank">
        <button className="flex gap-x-2 btn btn-sm h-11 normal-case bg-gray-200 hover:bg-gray-300 text-black tracking-wide">
          {svg}
          <span>{texto}</span>
        </button>
      </a>
    </>
  );
}

export default BotonLink;

{
  /* <style>
  button:hover .svg_github {
    fill: white;
  }
</style> */
}
