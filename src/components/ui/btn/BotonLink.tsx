import React, { type ReactNode } from "react";

type Props = { texto: string; svg: ReactNode; enlace: string; label: string };

function BotonLink({ texto, svg, enlace, label }: Props) {
  return (
    <>
      <a href={enlace} target="_blank">
        <button
          aria-label={label}
          className="flex gap-x-2 btn btn-sm h-11 normal-case bg-gray-200 dark:bg-gray-300
             hover:bg-gray-800 text-black dark:text-black tracking-wide
             dark:hover:bg-gray-800 group"
        >
          {svg}
          <span className="group-hover:text-white dark:text-black dark:group-hover:text-white">
            {texto}
          </span>
        </button>
      </a>
    </>
  );
}

export default BotonLink;
