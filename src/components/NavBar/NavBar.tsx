import { useState } from 'react';
import { Logo, Arrow, BurgerMenu } from '@/assets';
import { Link } from 'react-router-dom';
import appRoutes from '@/routes/routes';

const NavBar = () => {
  const [open, setOpen] = useState(false);

  return (
    <div className="md:p-2 py-4 px-16 flex justify-between border-2 border-white items-end">
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
      <div className="md:block hidden">
        <BurgerMenu />
      </div>
    </div>
  );
};

export default NavBar;
