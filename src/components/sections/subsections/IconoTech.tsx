import React, { type ReactNode } from "react";

type Props = { img_src: string };

function IconoTech({ img_src }: Props) {
  const [, , ...texto_extension] = img_src.split("/"); // /images/nodejs.png
  const texto = texto_extension[0].replace(
    /\.(png|jpg|jpeg|jpg|svg|jfif|webp)$/,
    "",
  );
  return (
    <div
      className="flex justify-center items-center transform transition-transform 
    hover:scale-105 duration relative group w-16 h-16"
    >
      <img
        className="rounded-btn w-full h-full object-contain"
        src={img_src}
        alt={"icono"}
        loading="lazy"
      />
      <div className="cursor-default absolute top-0 left-1/2 transform -translate-x-1/2 mb-14 px-2 py-1 text-sm text-white bg-black rounded-md opacity-0 group-hover:opacity-100 transition-opacity duration-200">
        {texto}
      </div>
    </div>
  );
}

export default IconoTech;
