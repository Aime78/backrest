import { NavBar } from '@/components';
import image from '@/pages/Home/assets/images/bk-hero.png';

const Hero = () => (
  <div className="bg-dark">
    <NavBar />
    <div className="mt-4">
      <h1 className="mb-6 md:p-2 text-white text-center text-4xl md:text-4xl font-header font-bold">
        We <span className="text-rose">develop</span> products that <br />
        delight your users and grow your business.
      </h1>
      <div className="flex justify-center">
        <img src={image} alt="bk rest" width={600} height={500} />
      </div>
    </div>
  </div>
);

export default Hero;
