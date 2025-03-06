import { img } from "framer-motion/client";
import React, { type ReactNode } from "react";

type Props = { img_src: string };

function IconoTech({ img_src }: Props) {
  return (
    <div className="relative group">
      <img className="rounded-btn w-16 h-16" src={img_src} alt={"icono"} />
      <div className="absolute top-0 left-1/2 transform -translate-x-1/2 mb-14 px-2 py-1 text-sm text-white bg-black rounded-md opacity-0 group-hover:opacity-100 transition-opacity duration-300">
        Node.js
      </div>
    </div>
  );
}

export default IconoTech;
