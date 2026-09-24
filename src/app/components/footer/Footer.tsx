import React from "react";
import Image from "next/image"
import Link from "next/link";
import logo from "../../../assets/logo.png"

const Footer = () => {
  return (
    <footer className="flex justify-between items-center bg-[#15171d] text-white px-6 py-6">
      
      <Link className="flex justify-between items-center gap-2 font-medium text-lg" href="/"><Image src={logo} height={20} width={20} alt="logo"></Image>FITLOG</Link>
        <p className="text-[#6B7280]">
          Copyright © {new Date().getFullYear()} FitLog — Workout Library. Train hard, log honest.
        </p>
      
    </footer>
  );
};

export default Footer;
