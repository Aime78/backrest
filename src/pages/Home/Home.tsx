import { Hero } from './components';

const Home = () => {
  return (
    <div>
      <Hero />
      <div className="text-center">
        <h2 className="font-bold font-header mt-10 mb-2 text-3xl md:text-2xl text-breatheColor">We live and breathe web and mobile</h2>
        <p className="md:hidden font-body font-medium text-bodyText text-xl">
          Take a look at some of the web and mobile apps <br /> we developed since 2017. We’d be happy to work on <br /> your mobile app next.
        </p>
        <p className="md:block hidden font-body font-medium px-2 text-bodyText text-xl">
          Take a look at some of the web and mobile apps we developed since 2017. We’d be happy to work on your mobile app next.
        </p>
      </div>
    </div>
  );
};

export default Home;
