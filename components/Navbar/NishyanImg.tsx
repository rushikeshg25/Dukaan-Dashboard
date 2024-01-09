import Image from "next/image";
import React from "react";
import NishyanLogo from "@/public/Nishyan.png";

const NishyanImg = () => {
  return (
    <Image
      className='rounded'
      src={NishyanLogo}
      alt='NishyanLogo'
      height={39}
      width={39}
    />
  );
};

export default NishyanImg;
