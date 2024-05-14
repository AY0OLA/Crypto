import { Link, useLocation } from "react-router-dom";
import { useState } from "react"; 
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/solid"; 

const Navbar = () => {
  const location = useLocation();
  const pathName = location.pathname;
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav>
      <div className="bg-black grid lg:grid-cols-[200px_minmax(400px,_1fr)_200px] grid-cols-[1fr_50px] items-center lg:px-28 px-4 py-5 h-24">
        <Link to="/">
          <div>LOGO</div>
        </Link>
        <div className="justify-self-start lg:pl-16 hidden lg:flex items-center justify-center gap-2 md:gap-8">
          <Link className={pathName === "/schools" ? "" : "text-secondary-400"} to='/schools'>Schools</Link>
          <Link className={pathName === "/tutorials" ? "" : "text-secondary-400"} to='/tutorials'>Tutorials</Link>
          <Link className={pathName === "/how-it-works" ? "" : "text-secondary-400"} to='/how-it-works'>How it works</Link>
          <Link className={pathName === "/about" ? "" : "text-secondary-400"} to='/about'>About</Link>
        </div>
        <Link to="/join" className="hidden lg:flex">
          <div></div>
        </Link>
        <div className='lg:hidden flex justify-self-end cursor-pointer'>
          {isOpen ? (
            <XMarkIcon className='h-6 w-6' onClick={() => setIsOpen(false)} />
          ) : (
            <Bars3Icon className='h-6 w-6' onClick={() => setIsOpen(true)} />
          )}
        </div>
      </div>
      <div className={`block lg:hidden fixed h-64 -mt-4 transform left-0 w-full bg-white transition-transform duration-300 ease-in-out overflow-auto ${isOpen ? 'translate-x-0' : '-translate-x-full'} lg:relative lg:translate-x-0 lg:justify-self-start lg:pl-32 lg:flex lg:items-center lg:justify-center lg:gap-2 lg:md:gap-8 lg:bg-transparent`}>
        <div className="flex flex-col space-y-5 ml-5">
          <Link to='/schools'>Schools</Link>
          <Link to='/tutorials'>Tutorials</Link>
          <Link to='/how-it-works'>How it works</Link>
          <Link to='/about'>About</Link>
          <Link to="/join">
            <div></div>
          </Link>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
