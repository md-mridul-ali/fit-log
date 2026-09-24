'use client'
import Link from "next/link";
import React from "react";
import logo from "../../../assets/logo.png";
import Image from "next/image";
import { usePathname } from "next/navigation";

const Navbar = () => {

  const pathName = usePathname();

  const links = (
    <>
      <li className="text-lg font-medium text-gray-200">
        <Link className={` ${pathName === '/' ? 'px-6 rounded-full bg-[#18230F] text-[#C2F800]' : ''}`} href="/">Workouts</Link>
      </li>
      <li className="text-lg font-medium text-gray-200">
        <Link className={` ${pathName === '/plan' ? 'px-6 rounded-full bg-[#18230F] text-[#C2F800]' : ''}`} href="/plan">My Plan</Link>
      </li>
    </>
  );

  return (
    <div className="navbar bg-[#090A0D] shadow-sm">
      <div className="navbar-start">
        <div className="dropdown">
          <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
            <svg
              aria-label="Menu"
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              {" "}
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h8m-8 6h16"
              />{" "}
            </svg>
          </div>
          <ul
            tabIndex={-1}
            className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow"
          >
            {links}
          </ul>
        </div>
        <div>
          {/* <a className="btn btn-ghost text-xl"></a> */}
          <Link
            className="flex justify-between items-center gap-2 text-xl font-bold text-white"
            href="/"
          >
            <Image src={logo} height={30} width={30} alt="logo"></Image>FITLOG
          </Link>
        </div>
      </div>
      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal px-1">{links}</ul>
      </div>
      <div className="navbar-end gap-4">
        <Link href="/plan" className="flex items-center gap-1">
          <span className="text-lg font-medium text-gray-200">Plan</span>

          <div className="h-6 w-6 rounded-full bg-[#C2F800] flex items-center justify-center">
            {0}
          </div>
        </Link>
        <Link href="/plan" className="flex items-center gap-1">
          <span className="text-lg font-medium text-gray-200">Saved</span>

          <div className="h-6 w-6 rounded-full border-2 border-gray-400 text-white flex items-center justify-center">
            {0}
          </div>
        </Link>
      </div>
    </div>
  );
};

export default Navbar;
