import image from '@/pages/ServicesPage/assets/images/design.png';
import { CheckMajentaIcon } from '../../assets/icons/Icons';

const SectionDesign = () => {
  return (
    <div className="w-[700px] p-14 rounded-xl md:w-[100%] md:flex-col md:py-4 md:px-2" style={{ background: '#FFFFFF' }}>
      <div className="flex items-center gap-4 mb-8">
        <img src={image} alt="product strategy" />
        <h2 className="font-header font-semibold text-breatheColor text-2xl">Product Design</h2>
      </div>
      <div className="flex md:flex-col justify-between">
        <div>
          <div className="flex gap-6 my-2 mx-4">
            <CheckMajentaIcon />
            <p className="font-normal text-sm text-breatheColor">Full UI design creation</p>
          </div>
          <div className="flex gap-6 my-2 mx-4">
            <CheckMajentaIcon />
            <p className="font-normal text-sm text-breatheColor">Logo and app icons</p>
          </div>
          <div className="flex gap-6 my-2 mx-4">
            <CheckMajentaIcon />
            <p className="font-normal text-sm text-breatheColor">Design assets for app stores </p>
          </div>
          <div className="flex gap-6 my-2 mx-4">
            <CheckMajentaIcon />
            <p className="font-normal text-sm text-breatheColor">
              Design for marketing and <br /> communication materials{' '}
            </p>
          </div>
        </div>
        <p className="font-light text-sm text-breatheColor leading-6 md:mt-4">
          We design a visual language for your <br className="md:hidden" /> product that includes user interface <br className="md:hidden" /> elements, colours, photography and{' '}
          <br className="md:hidden" /> icons, as well as the various interactions <br className="md:hidden" /> happening throughout the product. When <br className="md:hidden" /> we’re done, we add it
          all up in an <br className="md:hidden" /> interactive design prototype ready to be <br className="md:hidden" /> showcased.
        </p>
      </div>
    </div>
  );
};

export default SectionDesign;
