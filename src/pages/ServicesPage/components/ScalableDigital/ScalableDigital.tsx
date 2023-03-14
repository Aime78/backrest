import { CheckIcon } from '../../assets/icons/Icons';
import image from '../../assets/images/idea-products.png';

const ScalableDigital = () => (
  <div className="flex flex-col items-center py-16 md:py-4 md:px-2">
    <h2 className="font-header font-bold text-3xl text-breatheColor text-center">
      Build solid and scalable digital <br className="md:hidden" /> products with a partner who <br className="md:hidden" /> understands the journey
    </h2>
    <p className="font-medium text-bodyText text-xl text-center my-4 ">
      Call us a product partner, or a product studio, or a full-stack <br className="md:hidden" /> app development agency. What we do stays the same, and <br className="md:hidden" /> that's product
      services. In a world where mobile has <br className="md:hidden" /> changed how we live and work on the move, we listen, <br className="md:hidden" /> design, develop, and help you launch great
      products.
    </p>
    <div className="flex md:flex-col mt-16 gap-20">
      <div>
        <h3 className="font-header font-bold text-3xl text-breatheColor mb-8">
          Our commitments <br className="md:hidden" /> as a product <br className="md:hidden" /> partner:
        </h3>
        <div className="flex items-center gap-6 mt-2">
          <CheckIcon />
          <p className="font-light text-sm md:my-2 ">Open communication</p>
        </div>
        <div className="flex gap-6 mt-2">
          <CheckIcon />
          <p className="font-light text-sm md:my-2 ">Transparent execution</p>
        </div>
        <div className="flex gap-6 mt-2">
          <CheckIcon />
          <p className="font-light text-sm md:my-2 ">On-time delivery</p>
        </div>
        <div className="flex gap-6 mt-2">
          <CheckIcon />
          <p className="font-light text-sm md:my-2 ">
            Custom code with full and exclusive <br /> intellectual property
          </p>
        </div>
      </div>
      <img src={image} alt="development process" width={300} />
    </div>
  </div>
);

export default ScalableDigital;
