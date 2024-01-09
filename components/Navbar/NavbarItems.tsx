import React from "react";
import Home from "@/public/NavbarIcons/Home.svg";
import Orders from "@/public/NavbarIcons/Orders.svg";
import Products from "@/public/NavbarIcons/Products.svg";
import Delivery from "@/public/NavbarIcons/Delivery.svg";
import Marketing from "@/public/NavbarIcons/Marketing.svg";
import Analytics from "@/public/NavbarIcons/Analytics.svg";
import Payments from "@/public/NavbarIcons/Payments.svg";
import Tools from "@/public/NavbarIcons/Tools.svg";
import Discounts from "@/public/NavbarIcons/Discounts.svg";
import Audience from "@/public/NavbarIcons/Audiance.svg";
import Appearance from "@/public/NavbarIcons/Appearance.svg";
import Plugins from "@/public/NavbarIcons/Plugins.svg";
import Image from "next/image";

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
    logo: Products,
  },
  {
    title: "Delivery",
    logo: Delivery,
  },

  {
    title: "Marketing",
    logo: Marketing,
  },
  {
    title: "Analytics",
    logo: Analytics,
  },
  {
    title: "Payments",
    logo: Payments,
  },
  {
    title: "Tools",
    logo: Tools,
  },
  {
    title: "Discounts",
    logo: Discounts,
  },
  {
    title: "Audience",
    logo: Audience,
  },
  {
    title: "Appearance",
    logo: Appearance,
  },
  {
    title: "Plugins",
    logo: Plugins,
  },
];

const NavbarItems = () => {
  return (
    <>
      {Items.map((i: { title: string; logo: any }) => {
        return (
          <div className='w-52 px-4 py-2 rounded justify-start items-start gap-3 inline-flex'>
            <div className='w-5 h-5 relative opacity-80'>
              <Image src={i.logo} alt={`${i.title}`} />
            </div>
            <div className="opacity-80 text-white text-sm font-medium font-['Inter'] leading-tight">
              {i.title}
            </div>
          </div>
        );
      })}
    </>
  );
};

export default NavbarItems;
