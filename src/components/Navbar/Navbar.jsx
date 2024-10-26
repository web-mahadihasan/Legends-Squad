import { useState } from "react";
import PropTypes from 'prop-types'
import { RiCoinsFill } from "react-icons/ri";
import { RiMenu2Fill, RiCloseLargeFill } from "react-icons/ri";
import img from "../../../public/assets/logo.png";

const Navbar = ({claimCoin}) => {
 const [isOpen, setIsOpen] = useState(false);

 const toggleMenu = () => {
   setIsOpen(!isOpen);
 };
  return (
    <div className=" w-full sticky top-0  bg-white/50 z-40 backdrop-blur-2xl lg:border-slate-200 shadow-md shadow-slate-700/5">
      <div className="relative  z-30 max-w-screen-xl mx-auto px-4  ">
        <nav className="flex justify-between items-center py-6 gap-4">
          <div className="flex-1">
            <img src={img} alt="" className="h-12 w-16" />
          </div>

          {/* Menu*/}
          <div className="flex gap-5 items-center">
            <ul className="gap-5 items-center hidden lg:flex">
              <li>
                <a className="px-4 py-2 text-secondary-color hover:text-emerald-600 duration-300 cursor-pointer">
                  Home
                </a>
              </li>
              <li>
                <a className="px-4 py-2 text-secondary-color hover:text-emerald-600 duration-300 cursor-pointer">
                  Fixture
                </a>
              </li>
              <li>
                <a className="px-4 py-2 text-secondary-color hover:text-emerald-600 duration-300 cursor-pointer">
                  Teams
                </a>
              </li>
              <li>
                <a className="px-4 py-2 text-secondary-color hover:text-emerald-600 duration-300 cursor-pointer">
                  Schedules
                </a>
              </li>
            </ul>
            <div className=" px-6 py-1 border border-gray-200 rounded-md flex items-center gap-2 text-xl font-semibold">
              <span>{claimCoin}</span>
              <RiCoinsFill size="30px" className="text-orange-500" />
            </div>
          </div>

          {/* Hamburger */}
          <button
            onClick={toggleMenu}
            className="text-3xl lg:hidden cursor-pointer"
          >
            {isOpen ? <RiCloseLargeFill /> : <RiMenu2Fill />}
          </button>
          {isOpen && (
            <div
              className={`absolute left-0 top-0 z-[-1] h-fit w-full justify-center overflow-hidden  overflow-y-auto overscroll-contain bg-white px-8 pb-6 pt-24 font-medium transition-[opacity,visibility] duration-700 shadow-lg shadow-slate-700/5 
              ${
                isOpen
                  ? "visible opacity-100 backdrop-blur-sm"
                  : "invisible opacity-0"
              }`}
            >
              <ul className="flex gap-4 items-center flex-col">
                <li>
                  <a className="px-4 py-2 text-secondary-color hover:text-emerald-600 duration-300 cursor-pointer">
                    Home
                  </a>
                </li>
                <li>
                  <a className="px-4 py-2 text-secondary-color hover:text-emerald-600 duration-300 cursor-pointer">
                    Fixture
                  </a>
                </li>
                <li>
                  <a className="px-4 py-2 text-secondary-color hover:text-emerald-600 duration-300 cursor-pointer">
                    Teams
                  </a>
                </li>
                <li>
                  <a className="px-4 py-2 text-secondary-color hover:text-emerald-600 duration-300 cursor-pointer">
                    Schedules
                  </a>
                </li>
              </ul>
            </div>
          )}
        </nav>
      </div>
    </div>
  );
};

Navbar.propTypes = {
  claimCoin: PropTypes.number.isRequired,
};

export default Navbar;
