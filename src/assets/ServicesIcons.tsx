import image1 from '@/assets/images/code.png';
import image2 from '@/assets/images/scale.png';

export const Polygon = () => (
  <>
    <svg width="64" height="54" viewBox="0 0 64 54" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M32 0L63.1769 54H0.823086L32 0Z" fill="#F1EDF6" />
    </svg>
  </>
);

export const Concept = () => (
  <>
    <svg width="40" height="40" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink">
      <rect width="40" height="40" fill="url(#pattern0)" />
      <defs>
        <pattern id="pattern0" patternContentUnits="objectBoundingBox" width="1" height="1">
          <use xlinkHref="#image0_281_116" transform="scale(0.025)" />
        </pattern>
        <image
          id="image0_281_116"
          width="40"
          height="40"
          xlinkHref="data:image/png;base64,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"
        />
      </defs>
    </svg>
  </>
);

export const Building = () => (
  <>
    <img src={image1} />
  </>
);

export const Scaling = () => (
  <>
    <img src={image2} />
  </>
);
