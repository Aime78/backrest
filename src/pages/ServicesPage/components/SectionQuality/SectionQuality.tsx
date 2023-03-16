import image from '@/pages/ServicesPage/assets/images/quality.png';
import { CheckMajentaIcon } from '../../assets/icons/Icons';

const SectionQuality = () => {
  return (
    <div className="w-[700px] p-14 rounded-xl md:w-[100%] md:flex-col md:py-4 md:px-2" style={{ background: '#FFFFFF' }}>
      <div className="flex items-center gap-4 mb-8">
        <img src={image} alt="product strategy" />
        <h2 className="font-header font-semibold text-breatheColor text-2xl">Quality Assurance</h2>
      </div>
      <div className="flex md:flex-col justify-between">
        <div>
          <div className="flex mb-6 gap-8 md:ml-4">
            <div>
              <p className="mb-[6px] font-normal text-indigo-900">Manual</p>
              <div className="border-b-2 border-indigo-900 w-[30px]"></div>
            </div>
            <p>Automated</p>
          </div>
          <div className="flex gap-6 my-2 mx-4">
            <CheckMajentaIcon />
            <p className="font-normal text-sm text-breatheColor">Functionality testing</p>
          </div>
          <div className="flex gap-6 my-2 mx-4">
            <CheckMajentaIcon />
            <p className="font-normal text-sm text-breatheColor">Compatibility testing</p>
          </div>
          <div className="flex gap-6 my-2 mx-4">
            <CheckMajentaIcon />
            <p className="font-normal text-sm text-breatheColor">User interface testing </p>
          </div>
          <div className="flex gap-6 my-2 mx-4">
            <CheckMajentaIcon />
            <p className="font-normal text-sm text-breatheColor">Performance testing </p>
          </div>
          <div className="flex gap-6 my-2 mx-4">
            <CheckMajentaIcon />
            <p className="font-normal text-sm text-breatheColor">Regression testing</p>
          </div>
          <div className="flex gap-6 my-2 mx-4">
            <CheckMajentaIcon />
            <p className="font-normal text-sm text-breatheColor">Smoke testing</p>
          </div>
        </div>
        <p className="font-light text-sm text-breatheColor mt-14 md:mt-8 leading-6">
          Testing and quality control are core parts <br className="md:hidden" /> of delivering a great product and help us <br className="md:hidden" /> make sure nothing slips between the{' '}
          <br className="md:hidden" /> cracks. Our internal testing team will <br className="md:hidden" /> push every bit of the implemented <br className="md:hidden" /> product to reveal all possible
          cracks and <br className="md:hidden" /> make sure your product works as it’s <br className="md:hidden" /> supposed to.
        </p>
      </div>
    </div>
  );
};

export default SectionQuality;
