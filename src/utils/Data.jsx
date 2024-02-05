import { FaCar, FaGift, FaHeadphones, FaRegCreditCard } from "react-icons/fa";
import { LuBadgePercent } from "react-icons/lu";
export const services =[
  {
    title : "Free Shipping",
    tagline: "From all orders over $5",
    image: <FaCar className="fs-2"/>
  },
  {
    title : "Daily Surprice offers",
    tagline: "Save upto 25% off",
    image: <FaGift className="fs-2"/>
  },
  {
    title : "Support 24/7",
    tagline: "Shop with an expert",
    image: <FaHeadphones className="fs-2"/>
  },
  {
    title : "Affordable Prices",
    tagline: "Get Factory Default Price",
    image: <LuBadgePercent className="fs-2"/>
  },
  {
    title : "Secure Payment",
    tagline: "100% protected",
    image: <FaRegCreditCard  className="fs-2"/>
  },
  
]