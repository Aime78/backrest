import { Footer, NavBar } from '@/components';
import { BubbleIcon } from './assets/icons/Icons';
import sectionData from './data/SectionData';
import Section from './components/Section/Section';

const WorkPage = () => {
  return (
    <div>
      <div className="z-10 relative">
        <NavBar />
      </div>

      <div className="md:py-10 md:h-[300px] px-2 relative z-0 bg-dark pt-16">
        <h2 className="absolute bottom-[130px] left-[250px] md:left-0 md:top-[100px] text-white text-center text-4xl font-header font-bold">
          We build state of the art apps that delight <br /> both clients and users
        </h2>
        <div className="md:hidden w-[400px]">
          <BubbleIcon />
        </div>
      </div>

      {sectionData.map((data) => (
        <Section key={data.id} {...data} />
      ))}
      <Footer />
    </div>
  );
};

export default WorkPage;
