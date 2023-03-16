import image from '@/pages/ServicesPage/assets/images/product-scale.png';
import { CheckOrangeIcon } from '../../assets/icons/Icons';

const SectionScale = () => {
  return (
    <div className="w-[700px] p-14 rounded-xl md:w-[100%] md:flex-col md:py-4 md:px-2" style={{ background: '#FFFFFF' }}>
      <div className="flex items-center gap-4 mb-8">
        <img src={image} alt="product strategy" />
        <h2 className="font-header font-semibold text-breatheColor text-2xl">Product Scaling</h2>
      </div>

      <div className="flex md:flex-col justify-between">
        <div>
          <div className="flex gap-6 my-2 mx-4">
            <CheckOrangeIcon />
            <p className="font-normal text-sm text-breatheColor">Maintenance solutions</p>
          </div>
          <div className="flex gap-6 my-4 mx-4">
            <CheckOrangeIcon />
            <p className="font-normal text-sm text-breatheColor">
              Ongoing development and <br /> product updates{' '}
            </p>
          </div>
          <div className="flex gap-6 my-4 mx-4">
            <CheckOrangeIcon />
            <p className="font-normal text-sm text-breatheColor">Dedicated product team</p>
          </div>
          <div className="flex gap-6 my-4 mx-4">
            <CheckOrangeIcon />
            <p className="font-normal text-sm text-breatheColor">
              Advising and consultancy on <br /> scaling-up
            </p>
          </div>
        </div>
        <p className="font-light text-sm text-breatheColor md:mt-8 leading-6">
          A digital product needs constant care and <br className="md:hidden" /> investment, either as maintenance or as <br className="md:hidden" /> ongoing product updates. We can help you{' '}
          <br className="md:hidden" /> keep your product running in an <br className="md:hidden" /> ecosystem of neverending updates. We <br className="md:hidden" /> can also improve your product
          based on <br className="md:hidden" /> user feedback. Whichever it is, you can <br className="md:hidden" /> rely on us as product partners for the <br className="md:hidden" /> long-haul.
        </p>
      </div>
    </div>
  );
};

export default SectionScale;
