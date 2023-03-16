import { StrategyIcon } from '../../assets/icons/SectionIcons';
import image from '@/pages/ServicesPage/assets/images/strategy.png';
import { CheckIcon } from '../../assets/icons/Icons';

const SectionStrategy = () => {
  return (
    <div className="w-[700px] px-14 py-8 md:w-[100%] md:flex-col md:py-4 md:px-2 rounded-xl" style={{ background: '#FFFFFF' }}>
      <div className="flex items-center gap-4 mb-8">
        <img src={image} alt="product strategy" />
        <h2 className="font-header font-semibold text-breatheColor text-2xl">Product Strategy</h2>
      </div>

      <div className="flex md:flex-col justify-between">
        <div>
          <div className="flex gap-6 my-2 mx-4">
            <CheckIcon />
            <p className="font-normal text-sm text-breatheColor">Competition research</p>
          </div>
          <div className="flex gap-6 my-2 mx-4">
            <CheckIcon />
            <p className="font-normal text-sm text-breatheColor">
              Product positioning and <br /> differentiation
            </p>
          </div>
          <div className="flex gap-6 my-2 mx-4">
            <CheckIcon />
            <p className="font-normal text-sm text-breatheColor">
              Performance <br /> infrastructure: metrics and <br /> analytics
            </p>
          </div>
          <div className="flex gap-6 my-2 mx-4">
            <CheckIcon />
            <p className="font-normal text-sm text-breatheColor">
              Business model and value <br /> proposition advising{' '}
            </p>
          </div>
        </div>
        <p className="font-light text-sm text-breatheColor leading-6 md:mt-4">
          The strategic part that comes before <br className="md:hidden" /> building a digital product is essential. It <br className="md:hidden" /> makes the difference between a{' '}
          <br className="md:hidden" /> successful or a failed product. We ask <br className="md:hidden" /> you ‘why’ persistently to define your <br className="md:hidden" />
          product positioning and its <br className="md:hidden" /> differentiators. We decide together what <br className="md:hidden" /> is success, how we measure it, and lay{' '}
          <br className="md:hidden" /> down the milestones on how to get there.
        </p>
      </div>
    </div>
  );
};

export default SectionStrategy;
