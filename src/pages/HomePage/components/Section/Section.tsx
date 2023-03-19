import * as React from 'react';
import { Link } from 'react-router-dom';
import appRoutes from '@/routes/routes';

type SectionProps = {
  title: string;
  subtitle: string;
  technologies: string[];
  techBackgroundColor: string;
  body: string;
  image: string;
  color: string;
  fontColor: string;
  backgroundColor: string;
  reverse?: boolean;
};
const Section = ({ title, subtitle, technologies, techBackgroundColor, body, image, color, fontColor, backgroundColor, reverse }: SectionProps) => {
  const subtitleParts = subtitle.split('\n');
  const bodyParts = body.split('\n');

  return (
    <div className={`md:flex-col-reverse flex ${reverse ? 'flex-row-reverse' : ''} md:text-center`} style={{ backgroundColor: `${backgroundColor}` }}>
      <div className={`p-14 md:px-2 md:py-4 flex flex-col justify-center w-[50%] md:w-[100%] text-${fontColor}`}>
        <h2 className="font-header font-semibold text-3xl md:text-2xl mb-2">{title}</h2>
        <div className={`md:hidden w-[60px]`} style={{ border: `1.5px solid ${color}` }}></div>
        <h3 className="font-header font-semibold text-xl mt-4 mb-2">
          {' '}
          {subtitleParts.map((part, index) => (
            <React.Fragment key={index}>
              {part}
              <br />
            </React.Fragment>
          ))}
        </h3>
        <div className="flex gap-2 mb-2 md:justify-center my-4">
          {technologies.map((tech) => (
            <div key={tech} className={`rounded-2xl px-4 py-[1px] font-body font-medium text-xs`} style={{ backgroundColor: `${techBackgroundColor}` }}>
              {tech}
            </div>
          ))}
        </div>
        <p className="font-body font-light text-base mb-2 md:mb-6 my-2 leading-7">
          {' '}
          {bodyParts.map((part, index) => (
            <React.Fragment key={index}>
              {part}
              <br className="md:hidden" />
            </React.Fragment>
          ))}
        </p>

        <Link to={appRoutes.WORK}>
          <div className={`md:w-[100%] w-[108px] md:rounded-xl rounded-3xl px-4 py-2 mt-2 font-body font-bold text-sm`} style={{ border: `1px solid ${color}` }}>
            View work
          </div>
        </Link>
      </div>
      <div className="w-[50%] md:w-[100%] py-16 md:py-2">
        <img src={image} alt="image" />
      </div>
    </div>
  );
};

export default Section;
