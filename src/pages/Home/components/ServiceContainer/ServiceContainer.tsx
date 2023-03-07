import * as React from 'react';
import { MarketStrategy } from '@/pages/Home/assets/icons/Icons';

type ServiceContainerProps = {
  icon: React.ReactNode;
  title: string;
  body: string;
};
const ServiceContainer = ({ icon, title, body }: ServiceContainerProps) => {
  const bodyParts = body.split('\n');
  return (
    <div className="flex gap-4">
      {icon}
      <div>
        <h3 className="font-header font-semibold text-xl text-breatheColor">{title}</h3>
        <p className="font-body font-light text-base mb-2 md:mb-6 my-2">
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
