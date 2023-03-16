import image from '@/pages/ServicesPage/assets/images/launch.png';
import { CheckIcon } from '../../assets/icons/Icons';

const SectionLaunch = () => {
  return (
    <div className="w-[700px] p-14 rounded-xl md:w-[100%] md:flex-col md:py-4 md:px-2" style={{ background: '#FFFFFF' }}>
      <div className="flex items-center gap-4 mb-8">
        <img src={image} alt="product strategy" />
        <h2 className="font-header font-semibold text-breatheColor text-2xl">Product Launch Solutions</h2>
      </div>

      <div className="flex md:flex-col justify-between">
        <div>
          <div className="flex gap-6 my-2 mx-4">
            <CheckIcon />
            <p className="font-normal text-sm text-breatheColor">App Store and Google Play setup</p>
          </div>
          <div className="flex gap-6 my-4 mx-4">
            <CheckIcon />
            <p className="font-normal text-sm text-breatheColor">
              Basic optimisation for app <br /> store listings and design <br /> assets
            </p>
          </div>
          <div className="flex gap-6 my-4 mx-4">
            <CheckIcon />
            <p className="font-normal text-sm text-breatheColor">Advising on go-to-market plans </p>
          </div>
          <div className="flex gap-6 my-4 mx-4">
            <CheckIcon />
            <p className="font-normal text-sm text-breatheColor">Validation plans for MVPs </p>
          </div>
        </div>
        <p className="font-light text-sm text-breatheColor md:mt-6 leading-6">
          The product launch is an essential <br className="md:hidden" /> milestone in the life of a product, yet it <br className="md:hidden" /> only marks the beginning of the startup{' '}
          <br className="md:hidden" /> experience. We’ll make sure your product <br className="md:hidden" /> has all the pieces lined up for a lean <br className="md:hidden" /> launch, so you can
          focus on preparing <br className="md:hidden" /> and implementing your go-to-market <br className="md:hidden" /> plans.
        </p>
      </div>
    </div>
  );
};

export default SectionLaunch;
