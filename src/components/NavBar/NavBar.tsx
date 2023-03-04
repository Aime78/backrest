import { useState } from 'react';
import { Logo, Arrow, BurgerMenu } from '@/assets';
import { Link } from 'react-router-dom';
import appRoutes from '@/routes/routes';
import { AiOutlineClose } from 'react-icons/ai';

const NavBar = () => {
  const [open, setOpen] = useState(false);

  return (
    <div className="md:p-4 py-4 px-16 flex justify-between  items-end">
      <Logo />
      <div className="md:hidden text-white font-header text-sm font-semibold flex gap-6 items-center">
        <Link to={appRoutes.WORK}>Our work</Link>
        <Link to={appRoutes.ABOUT}>About us</Link>
        <Link to={appRoutes.SERVICES}>
          <div className="flex gap-1 items-center">
            <span>Services</span>
            <Arrow />
          </div>
        </Link>
        <Link to={appRoutes.CONTACT} className="bg-rose rounded-3xl px-4 py-2">
          Contact us
        </Link>
      </div>
      {open ? null : (
        <div className="md:block hidden" onClick={() => setOpen(true)}>
          <BurgerMenu />
        </div>
      )}
      {open && (
        <div className="md:block hidden" onClick={() => setOpen(false)}>
          <div>
            <AiOutlineClose className=" text-white" color="white" style={{ color: 'white', width: 25, height: 25 }} />
          </div>
        </div>
      )}
      {open && (
        <div className="absolute px-4  text-center top-16 left-0 hidden md:flex flex-col w-[100%] h-[100vh] text-white bg-dark">
          <Link to={appRoutes.WORK} className="my-2">
            Our work
          </Link>
          <Link to={appRoutes.ABOUT} className="my-2">
            About us
          </Link>
          <Link to={appRoutes.ABOUT} className="my-2">
            Services
          </Link>
          <Link to={appRoutes.ABOUT} className="bg-rose rounded-xl p-4">
            Contact us
          </Link>
        </div>
      )}
    </div>
  );
};

export default NavBar;
