import * as React from 'react';
import { MarketStrategy } from '@/pages/HomePage/assets/icons/Icons';

type ServiceContainerProps = {
  icon: React.ReactNode;
  title: string;
  body: string;
};
const ServiceContainer = ({ icon, title, body }: ServiceContainerProps) => {
  const bodyParts = body.split('\n');
  return (
    <div className="flex gap-4 md:px-2 mt-4">
      {icon}
      <div>
        <h3 className="font-header font-semibold text-xl text-breatheColor">{title}</h3>
        <p className="font-body font-light text-base mb-2 md:mb-6 my-2 leading-7">
          {' '}
          {bodyParts.map((part, index) => (
            <React.Fragment key={index}>
              {part}
              <br />
            </React.Fragment>
          ))}
        </p>
      </div>
    </div>
  );
};

export default ServiceContainer;
