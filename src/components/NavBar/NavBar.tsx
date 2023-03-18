import { useState } from 'react';
import { Logo, Arrow, BurgerMenu } from '@/assets';
import { ArrowRose } from '@/assets/Arrow';
import { Link } from 'react-router-dom';
import { HashLink } from 'react-router-hash-link';
import appRoutes from '@/routes/routes';
import { AiOutlineClose } from 'react-icons/ai';
import ServicesToggle from '../ServicesToggle/ServicesToggle';

const NavBar = () => {
  const [open, setOpen] = useState(false);
  const [openMenu, setOpenMenu] = useState(false);

  return (
    <div className="z-0 fixed w-[100%] bg-dark">
      <div className="p-2 md:px-4 md:items-end px-16 flex justify-between">
        <div>
          <Link to={appRoutes.HOME}>
            <Logo />
          </Link>
        </div>
        <div className="md:hidden pt-2 text-white font-header text-sm font-semibold flex gap-6 items-center">
          <HashLink smooth to="/work" className="hover:text-rose">
            Our work
          </HashLink>
          <Link to={appRoutes.ABOUT} className="hover:text-rose">
            About us
          </Link>
          <Link to={appRoutes.SERVICES} onMouseEnter={() => setOpenMenu(true)} onMouseLeave={() => setOpenMenu(false)}>
            <div className="flex gap-1 items-center">
              <span className={`${openMenu ? 'text-rose' : ''}`}>Services</span>
              <div className={`${openMenu ? 'rotate-180' : ''}`}>{openMenu ? <ArrowRose /> : <Arrow />}</div>
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
              <AiOutlineClose className="text-white" color="white" style={{ color: 'white', width: 25, height: 25 }} />
            </div>
          </div>
        )}
        {open && (
          <div className="absolute px-4 mt-2 text-center top-10 left-0 hidden md:flex flex-col w-[100%] h-[100vh] text-white bg-dark">
            <Link to={appRoutes.WORK} className="my-2">
              Our work
            </Link>
            <Link to={appRoutes.ABOUT} className="my-2">
              About us
            </Link>
            <Link to={appRoutes.SERVICES} className="my-2">
              Services
            </Link>
            <Link to={appRoutes.CONTACT} className="bg-rose rounded-xl p-4">
              Contact us
            </Link>
          </div>
        )}
      </div>
      <div onMouseEnter={() => setOpenMenu(true)} onMouseLeave={() => setOpenMenu(false)} className="absolute top-[60px] w-[100%]">
        {openMenu && <ServicesToggle />}
      </div>
    </div>
  );
};

export default NavBar;
