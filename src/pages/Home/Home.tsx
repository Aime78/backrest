import { Footer } from '@/components';
import appRoutes from '@/routes/routes';
import { Link } from 'react-router-dom';
import { Hero, Section, ServiceContainer } from './components';
import sectionData from './data/SectionData';
import serviceData from './data/ServiceData';

const Home = () => {
  return (
    <div>
      <Hero />
      <div className="text-center pb-6">
        <h2 className="font-bold font-header mt-10 mb-2 text-3xl md:text-2xl text-breatheColor">We live and breathe web and mobile</h2>
        <p className="md:hidden font-body font-medium text-bodyText text-xl">
          Take a look at some of the web and mobile apps <br /> we developed since 2017. We’d be happy to work on <br /> your mobile app next.
        </p>
        <p className="md:block hidden font-body font-medium px-2 text-bodyText text-xl">
          Take a look at some of the web and mobile apps we developed since 2017. We’d be happy to work on your mobile app next.
        </p>
      </div>
      {sectionData.map((data) => (
        <Section key={data.id} {...data} />
      ))}
      <div className="flex flex-col items-center py-8">
        <Link to={appRoutes.ABOUT}>
          <div className="bg-rose w-[250px] text-center font-header font-semibold text-white text-medium rounded-3xl px-4 py-2">Explore more</div>
        </Link>

        <h2 className="md:text-center font-header font-bold text-3xl text-breatheColor mt-16">Start-to-end app development agency</h2>
        <p className="md:text-center font-body font-medium px-2 text-bodyText text-xl mb-4">
          This mobile app development agency is all in. We <br className="md:hidden" />
          provide app design and app development services for <br className="md:hidden" />
          every stage of your mobile project.
        </p>
        <div className="md:flex flex-col grid grid-cols-2 gap-6 mb-12">
          {serviceData.map((data) => (
            <ServiceContainer key={data.id} {...data} />
          ))}
        </div>
        <Link to={appRoutes.SERVICES}>
          <div className="bg-rose w-[250px] text-center font-header font-semibold text-white text-medium rounded-3xl px-4 py-2">App development services</div>
        </Link>
      </div>
      <div className="flex flex-col items-center text-center py-16" style={{ background: 'linear-gradient(90deg, #FAA43E 0%, #DB212F 100%)' }}>
        <h3 className="font-heading font-bold text-3xl text-white">Got a mobile riddle for us?</h3>
        <p className="font-body font-medium text-xl text-white mb-4">
          Challenge accepted. We’ve solved quite a few of those in the past. <br /> See for yourself.
        </p>
        <Link to={appRoutes.WORK}>
          <div className="bg-white w-[250px] text-center font-header font-semibold text-orange text-medium rounded-3xl px-4 py-2">Check our work</div>
        </Link>
      </div>
      <Footer />
    </div>
  );
};

export default Home;
