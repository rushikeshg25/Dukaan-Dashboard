import React from "react";
import Navbar from "@/components/Navbar/Navbar";

const page = () => {
  return (
    <div className='min-h-screen max-h-fit bg-[#FAFAFA] flex w-screen'>
      <div className='w-56 bg-primary px-2.5 py-4 flex flex-col sticky top-0 h-screen'>
        <Navbar />
      </div>
      <div>rushikesh</div>
    </div>
  );
};

export default page;
