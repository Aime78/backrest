import image from '@/pages/ServicesPage/assets/images/definition.png';
import { CheckOrangeIcon } from '../../assets/icons/Icons';

const SectionDefinition = () => {
  return (
    <div className="w-[700px] p-14 rounded-xl md:w-[100%] md:flex-col md:py-4 md:px-2" style={{ background: '#FFFFFF' }}>
      <div className="flex items-center gap-4 mb-8">
        <img src={image} alt="product strategy" />
        <h2 className="font-header font-semibold text-breatheColor text-2xl">Product Definition</h2>
      </div>
      <div className="flex md:flex-col justify-between">
        <div>
          <div className="flex gap-6 my-2 mx-4">
            <CheckOrangeIcon />
            <p className="font-normal text-sm text-breatheColor">
              User definition and audience <br /> profiling
            </p>
          </div>
          <div className="flex gap-6 my-2 mx-4">
            <CheckOrangeIcon />
            <p className="font-normal text-sm text-breatheColor">User flow creation</p>
          </div>
          <div className="flex gap-6 my-2 mx-4">
            <CheckOrangeIcon />
            <p className="font-normal text-sm text-breatheColor">UX research and analysis</p>
          </div>
          <div className="flex gap-6 my-2 mx-4">
            <CheckOrangeIcon />
            <p className="font-normal text-sm text-breatheColor">Wireframing and prototyping</p>
          </div>
          <div className="flex gap-6 my-2 mx-4">
            <CheckOrangeIcon />
            <p className="font-normal text-sm text-breatheColor">User testing consultancy</p>
          </div>
          <div className="flex gap-6 my-2 mx-4">
            <CheckOrangeIcon />
            <p className="font-normal text-sm text-breatheColor">
              Product value and user <br /> behaviour mapping
            </p>
          </div>
        </div>
        <div>
          <p className="font-light text-sm text-breatheColor mb-4 md:mt-4">
            Our job in this step is to help your product <br /> become clear on a few fronts. We make:
          </p>
          <div className="font-light text-sm text-breatheColor relative ">
            <span className="font-black absolute top-[5px]">.</span>
            <p className="px-4 py-[7px]">
              UX explorations to decide the core <br /> flows of your product
            </p>
          </div>
          <div className="font-light text-sm text-breatheColor relative">
            <span className="font-black absolute top-[5px]">.</span>
            <p className="px-4 py-[7px]">
              Wireframes that define functionalities <br /> and where business value is created{' '}
            </p>
          </div>
          <div className="font-light text-sm text-breatheColor relative">
            <span className="font-black absolute top-[5px]">.</span>
            <p className="px-4 py-[7px]">
              A thorough specs documentation, <br /> based on the previous decisions{' '}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SectionDefinition;
