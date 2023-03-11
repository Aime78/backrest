import LogoFooter from '@/assets/LogoFooter';
import { Link } from 'react-router-dom';
import appRoutes from '@/routes/routes';

const Footer = () => {
  const time = new Date();
  const year = time.getFullYear();

  return (
    <div>
      <div className="bg-footerBackground md:px-4 text-footerColor font-body font-medium text-base px-16 pt-12">
        {/* First part */}
        <div className="flex md:flex-col justify-between pb-8 border-b-[1px] border-footerColor">
          <div>
            <LogoFooter />
            <p className="mt-4">
              We design and develop iOS and <br />
              Android mobile apps for startups and <br />
              international brands innovating on <br />
              mobile.
            </p>
          </div>
          <div>
            <p className="md:my-4">
              <Link to={appRoutes.WORK}>Our work</Link>
            </p>
            <p className="md:my-4 my-8">
              <Link to={appRoutes.SERVICES}>Services</Link>
            </p>
            <p className="md:my-4">
              <Link to={appRoutes.ABOUT}>About us</Link>
            </p>
          </div>
          <div>
            <p>Privacy policy</p>
            <p className="md:my-4 my-8">Cookie Settings</p>
          </div>
          <Link to={appRoutes.CONTACT}>
            <div className="w-[110px] text-center font-header font-semibold text-footerColor text-sm rounded-3xl px-2 py-2 border-[1px] border-footerColor">Contact us</div>
          </Link>
        </div>

        {/* Second part */}
        <div className="flex md:gap-6 justify-between py-4">
          <div>
            <p>Rwanda Office:</p>
            <p className="py-4">
              Westerwelle Startup Haus <br />
              Fairview Building 4th Floor
              <br />
              KG 622 st, Kigali, Rwanda
            </p>
            <p>+250 730672368</p>
          </div>
          <div>
            <p>Tokyo Office:</p>
            <p className="py-4">
              Share Leaf Nishi-Funabashi Gracenote
              <br />
              551-2 Hongo-choTokyo, Japan
            </p>
            <p>+81 70 4817 0842</p>
          </div>
        </div>
      </div>

      {/* Third part */}
      <div className="bg-footerBottom md:px-4 text-footerColor font-body font-medium px-16">
        <p className="py-4">{`© ${year} Backrest Tech. All rights reserved.`}</p>
      </div>
    </div>
  );
};

export default Footer;
