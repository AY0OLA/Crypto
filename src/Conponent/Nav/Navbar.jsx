import { Link, useLocation } from "react-router-dom";
import { useState } from "react";
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/solid";

const Navbar = () => {
  const location = useLocation();
  const pathName = location.pathname;
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="fixed z-[100] w-[100%]">
      <div className="bg-[#01c300] fixed relative grid lg:grid-cols-[200px_minmax(400px,_1fr)_200px] grid-cols-[1fr_50px] items-center lg:px-28 p-[30px] ">
        <Link to="/" className="flex text-center items-center">
          <img
            src="https://s3-alpha-sig.figma.com/img/f73e/c525/34ddeb66be0b89dcad920fba0d323c96?Expires=1716768000&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=pFVxF6TO7LQaw1iv68Yyot9DzEarlji2XUVCGbCOD4lJU~yfcylcuDSGYOp2up35qEM65ir3wQ3hrzZfvVq5riWOJuS~ptlxFq-iL2QFfuE2S9mXVt6OWlklDGj2kdJgt~-BZ316uq03OcuGo4gFqNMGERKxm~H2LU37hSww1AaM~~mUcAbJGJb3kvryI2LWApSm3jNhPCmiZqNHE9rvnFuvAc~CuQrkfZv0p0AQTLia-Xbqwp2QxYmXh5qSFeJI4MfcwcP0tiJO6TStvQ6B3DlPKjfS8JgI9lQEUQlXsW7u8dJCAOKFtBaUcyZCbTO26ldgQzZY-e674qBcVISKBw__"
            className="w-[240px] max-lg:w-[190px] max-lg:h-[100px] max-lg:left[-2rem] h-[130px] absolute left-[-1rem]"
          />
          <div className="flex items-center text-center gap-[10px] ml-[3rem] max-lg:hidden">
            <div className="flex flex-col leading-6 text-center items-center">
              <span className="text-[2rem] font-extrabold">B</span>
              <span className="text-[1rem] font-medium">Better</span>
            </div>
            <div className="flex flex-col leading-6 text-center items-center">
              <span className="text-[2rem] font-extrabold">D</span>
              <span className="text-[1rem] font-medium">Days</span>
            </div>
            <div className="flex flex-col leading-6 text-center items-center">
              <span className="text-[2rem] font-extrabold">T</span>
              <span className="text-[1rem] font-medium">Through</span>
            </div>
            <div className="flex flex-col leading-6 text-center items-center">
              <span className="text-[2rem] font-extrabold">C</span>
              <span className="text-[1rem] font-medium">Crypto</span>
            </div>
          </div>
        </Link>
        <div className="justify-self-start lg:pl-16 hidden lg:flex items-center justify-center gap-2 md:gap-8 ml-[1rem]">
          <Link
            className={
              pathName === "/"
                ? ""
                : "text-secondary-400 text-[1.6rem] text-[#cbd5e1]"
            }
            to="/"
          >
            Home
          </Link>
          <Link
            className={
              pathName === "/service"
                ? ""
                : "text-secondary-400 text-[1.6rem] text-[#cbd5e1]"
            }
            to="/service"
          >
            Project
          </Link>
          <Link
            className={
              pathName === "/project"
                ? ""
                : "text-secondary-400 text-[1.6rem] text-[#cbd5e1]"
            }
            to="/project"
          >
            Service
          </Link>
          <Link
            className={
              pathName === "/contact"
                ? ""
                : "text-secondary-400 text-[1.6rem] text-[#cbd5e1]"
            }
            to="/contact"
          >
            Contact
          </Link>
        </div>
        <Link to="/" className="hidden lg:flex ">
          <div className="text-[#cbd5e1] bg-[#000] font-medium p-[6px] rounded-[70px] text-[1.4rem] ml-[5rem]">
            Book Now
          </div>
        </Link>
        <div className="lg:hidden flex justify-self-end cursor-pointer">
          {isOpen ? (
            <XMarkIcon className="h-6 w-6" onClick={() => setIsOpen(false)} />
          ) : (
            <Bars3Icon className="h-6 w-6" onClick={() => setIsOpen(true)} />
          )}
        </div>
      </div>
      <div
        className={`block lg:hidden fixed h-[100vh] z-10 -mt-4 transform left-0 w-full bg-[#01c300] transition-transform duration-300 ease-in-out overflow-auto ${
          isOpen ? "translate-x-0" : "-translate-x-full"
        } lg:relative lg:translate-x-0 lg:justify-self-start lg:pl-32 lg:flex lg:items-center lg:justify-center lg:gap-2 lg:md:gap-8 lg:bg-transparent`}
      >
        <div className="flex flex-col space-y-5 ml-5 text-center items-center mt-[2rem]">
          <Link to="/home" className="text-[1.7rem] text-[#cbd5e1]">
            Home
          </Link>
          <Link to="/service" className="text-[1.7rem] text-[#cbd5e1]">
            Project
          </Link>
          <Link to="/project" className="text-[1.7rem] text-[#cbd5e1]">
            Service
          </Link>
          <Link to="/contact" className="text-[1.7rem] text-[#cbd5e1]">
            Contact
          </Link>
          <Link to="/">
            <div className="text-[#cbd5e1] bg-[#000] font-medium p-[6px] rounded-[70px] text-[1.4rem]">
              Book Now
            </div>
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
