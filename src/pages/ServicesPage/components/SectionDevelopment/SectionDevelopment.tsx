import image from '@/pages/ServicesPage/assets/images/development.png';
import appRoutes from '@/routes/routes';
import { Link } from 'react-router-dom';
import { CheckIcon } from '../../assets/icons/Icons';

const SectionDevelopment = () => {
  return (
    <div className="w-[700px] p-14 rounded-xl md:w-[100%] md:flex-col md:py-4 md:px-2" style={{ background: '#FFFFFF' }}>
      <div className="flex items-center gap-4 mb-8">
        <img src={image} alt="product strategy" />
        <h2 className="font-header font-semibold text-breatheColor text-2xl">Product Development</h2>
      </div>
      <div className="flex md:flex-col justify-between">
        <div>
          <div className="flex mb-6 gap-8 md:ml-4">
            <div>
              <p className="mb-[6px] font-normal text-rose">Mobile</p>
              <div className="border-b-2 border-red-600 w-[30px]"></div>
            </div>
            <p>Web</p>
            <p>Backend</p>
          </div>
          <div className="flex gap-6 my-2 mx-4">
            <CheckIcon />
            <p className="font-normal text-sm text-breatheColor text-rose">Native iOS app development</p>
          </div>
          <div className="flex gap-6 my-2 mx-4">
            <CheckIcon />
            <p className="font-normal text-sm text-breatheColor text-rose">
              Native Android app <br /> development
            </p>
          </div>
          <div className="flex gap-6 my-2 mx-4">
            <CheckIcon />
            <p className="font-normal text-sm text-breatheColor text-rose">
              Cross platform app <br /> development using <br /> React Native{' '}
            </p>
          </div>
        </div>
        <p className="font-light text-sm text-breatheColor leading-6 md:mt-4">
          The development stage is where all the <br className="md:hidden" /> previous product decisions, components <br className="md:hidden" /> and assets come together. This includes{' '}
          <br className="md:hidden" /> mobile development, web components <br className="md:hidden" /> and backend integrations, even artificial <br className="md:hidden" /> intelligence and data
          science solutions <br className="md:hidden" /> where needed.
          <div className="flex justify-end mt-10">
            <button className="w-[150px] h-[40px] text-white font-semibold bg-rose rounded-xl">
              <Link to={appRoutes.WORK}>Read more</Link>
            </button>
          </div>
        </p>
      </div>
    </div>
  );
};

export default SectionDevelopment;
