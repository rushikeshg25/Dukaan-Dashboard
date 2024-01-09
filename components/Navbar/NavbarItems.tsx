import React from "react";
import Home from "@/public/NavbarIcons/Home.svg";
import Orders from "@/public/NavbarIcons/Orders.svg";
import Products from "@/public/NavbarIcons/Products.svg";

const Items = [
  {
    title: "Home",
    logo: Home,
  },
  {
    title: "Orders",
    logo: Orders,
  },
  {
    title: "Products",
  },
  {
    title: "Delivery",
  },
  {
    title: "Products",
  },
  {
    title: "Marketing",
  },
  {
    title: "Analytics",
  },
  {
    title: "Payments",
  },
  {
    title: "Tools",
  },
  {
    title: "Discounts",
  },
  {
    title: "Audience",
  },
  {
    title: "Appearance",
  },
  {
    title: "Plugins",
  },
];

const NavbarItems = () => {
  return (
    <div className='w-52 px-4 py-2 rounded justify-start items-start gap-3 inline-flex'>
      <div className='w-5 h-5 relative opacity-80'></div>
      <div className="opacity-80 text-white text-sm font-medium font-['Inter'] leading-tight">
        Home
      </div>
    </div>
  );
};

export default NavbarItems;
