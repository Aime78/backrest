import { NavBar } from '@/components';
import { BubbleServices } from './assets/icons/Icons';
import BuildServices from './components/BuildServices/BuildServices';
import ScalableDigital from './components/ScalableDigital/ScalableDigital';

const ServicePage = () => {
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
    </div>
  );
};

export default ServicePage;
