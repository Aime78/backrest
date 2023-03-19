import { useEffect } from 'react';
import { Footer, NavBar } from '@/components';
import appRoutes from '@/routes/routes';
import { Link } from 'react-router-dom';
import { BubbleServices } from './assets/icons/Icons';
import BuildServices from './components/BuildServices/BuildServices';
import ScalableDigital from './components/ScalableDigital/ScalableDigital';
import SectionDefinition from './components/SectionDefinition/SectionDefinition';
import SectionDesign from './components/SectionDesign/SectionDesign';
import SectionDevelopment from './components/SectionDevelopment/SectionDevelopment';
import SectionLaunch from './components/SectionLaunch/SectionLaunch';
import SectionQuality from './components/SectionQuality/SectionQuality';
import SectionScale from './components/SectionScale/SectionScale';
import SectionStrategy from './components/SectionStrategy/SectionStrategy';

const ServicePage = () => {
  useEffect(() => {
    document.title = 'Our Services As a Product Partner | Backrest';
  }, []);
  return (
    <div>
      <div className="z-10 relative">
        <NavBar />
      </div>

      <div className="md:py-10 md:h-[300px] flex justify-end px-2 relative z-0 bg-dark">
        <h2 className="absolute bottom-[130px] left-[350px] md:left-0 md:top-[100px] text-white text-center text-4xl font-header font-bold">
          Product Services for Startups <br /> and Brands{' '}
        </h2>
        <div className="md:hidden w-[100%] h-[100%]">
          <BubbleServices />
        </div>
      </div>
      <ScalableDigital />
      <BuildServices />
      <div className="py-16 md:px-4 flex flex-col gap-10 md:gap-6 items-center" style={{ background: '#F8F8FA' }}>
        <SectionStrategy />
        <SectionDefinition />
        <SectionDesign />
        <SectionDevelopment />
        <SectionQuality />
        <SectionLaunch />
        <SectionScale />
      </div>
      <div className="flex flex-col items-center text-center py-16 md:px-2" style={{ background: 'linear-gradient(90deg, #FAA43E 0%, #DB212F 100%)' }}>
        <h3 className="font-heading font-bold text-3xl text-white">Ready to build the right digital product?</h3>
        <p className="font-light text-normal text-white mb-8 mt-4">
          We take ownership of your product and process, so you never feel alone on your journey. Build a <br /> solid and scalable product with the right partner by your side.{' '}
        </p>
        <Link to={appRoutes.WORK}>
          <div className="bg-white w-[190px] text-center font-header font-semibold text-orange text-medium rounded-2xl px-4 py-2">See how it works</div>
        </Link>
      </div>
      <Footer />
    </div>
  );
};

export default ServicePage;
