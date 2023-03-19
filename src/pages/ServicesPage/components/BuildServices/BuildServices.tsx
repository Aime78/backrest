import { AssessmentIcon, LineIcon, RowOneIcon, StrategyIcon } from '../../assets/icons/Icons';
import BuildServiceData from '../../data/BuildServiceData';

const BuildServices = () => {
  return (
    <div className="bg-dark flex flex-col items-center py-16 md:py-4 md:px-2">
      <h2 className="font-light text-white text-3xl">Build by our services</h2>
      <p className="font-light text-center text-footerColor text-sm md:my-2 mt-2 leading-6">
        We have the expertise to guide you through the whole process of <br className="md:hidden" /> getting from idea to a launched product, ready to delight users and <br className="md:hidden" />{' '}
        generate revenue.
      </p>
      <div className="flex flex-col items-center p-8">
        <AssessmentIcon />
        <h3 className="font-semibold text-white text-xl mb-4 mt-2">Assessment</h3>
        <p className="font-light text-white text-sm text-center">
          Nice to meet you! Let’s talk <br className="md:hidden" /> and get to know your <br className="md:hidden" /> needs and context.
        </p>
      </div>
      <div className="md:flex md:flex-col md:w-[100%] grid grid-cols-3 grid-rows-3 w-[800px]">
        {BuildServiceData.map((service) => (
          <div key={service.id} className="flex flex-col items-center relative p-8">
            <div className="absolute top-14 left-0 md:w-[50px] md:top-2 md:left-[155px] md:rotate-90">{service.rowIcon}</div>
            <div className="md:mt-8 ">{service.icon}</div>
            <h3 className="font-semibold text-white text-xl mb-4 mt-2">{service.title} </h3>
            {service.body.split('\n').map((line, index) => (
              <p key={index} className="font-light text-white text-sm text-center">
                {line}
              </p>
            ))}
          </div>
        ))}
      </div>
      <p className="font-light text-center text-footerColor text-sm md:my-2 mt-2 leading-6">
        You decide what comes next: do <br /> we maintain, help you scale, or <br /> handover entirely?
      </p>
    </div>
  );
};

export default BuildServices;
