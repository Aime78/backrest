import { Footer, NavBar } from '@/components';
import { useEffect } from 'react';
import { BubbleIconSmall } from './assets/Icons';
import MobileFirst from './components/MobileFirst/MobileFirst';
import Reasons from './components/Reasons/Reasons';

const AboutUsPage = () => {
  useEffect(() => {
    document.title = 'About Us | Backrest';
  }, []);

  return (
    <div>
      <div className="z-10 relative">
        <NavBar />
      </div>

      <div className="md:py-10 md:h-[300px] px-2 relative z-0 bg-dark">
        <h2 className="absolute bottom-[130px] left-[250px] md:left-0 md:top-[100px] text-white text-center text-4xl font-header font-bold">
          About us: a product studio for the brave <br /> ones
        </h2>
        <div className="md:hidden ">
          <BubbleIconSmall />
        </div>
      </div>
      <MobileFirst />
      <Reasons />
      <Footer />
    </div>
  );
};

export default AboutUsPage;
