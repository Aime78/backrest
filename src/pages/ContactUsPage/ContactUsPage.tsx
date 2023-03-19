import { useEffect } from 'react';
import { Footer, NavBar } from '@/components';
import { Link } from 'react-router-dom';
import { Mail } from './assets/icons/Icon';
import InputField from './components/InputField/InputField';
import RadioField from './components/RadioField/RadioField';

const ContactUsPage = () => {
  useEffect(() => {
    document.title = 'Contact Us - Backrest';
  }, []);

  return (
    <div>
      <div className="relative z-10">
        <NavBar />
      </div>
      <div className="flex flex-col items-center pt-[100px] md:pt-[80px] md:items-start md:px-4 pb-16">
        <h2 className="font-header font-light text-breatheColor text-3xl">Contact us</h2>
        <p className="font-light text-medium my-4 ">
          Tell us about your product concept and we’ll get back to you with details <br className="md:hidden" /> on how we can make this work. Or just ask us anything product related.
        </p>
        <div className="flex md:flex-col md:gap-0 gap-4">
          <InputField label="First Name" required={true} size="medium" type="text" />
          <InputField label="Last Name" required={true} size="medium" type="text" />
        </div>
        <InputField label="Email" required={true} size="large" type="email" />
        <InputField label="Phone number or Skype ID" required={false} size="large" type="number" />
        <div className="flex md:flex-col md:gap-0 gap-4">
          <InputField label="Country" required={true} size="medium" type="text" />
          <InputField label="Personal Linkedin URL" required={false} size="medium" type="text" placeholder="https://" />
        </div>
        <form>
          <div className="w-[816px] md:w-[100%] my-4">
            <div>
              <h3 className="font-header font-light text-breatheColor text-xl my-4">
                Choose whichever suits you best: <span style={{ color: '#790000' }}>*</span>
              </h3>
              <RadioField label="I'm a startup" name="company-size" />
              <RadioField label="I'm a small or medium business" name="company-size" />
              <RadioField label="I'm an enterprise company" name="company-size" />
            </div>

            <div className="mt-8">
              <h3 className="font-header font-light text-breatheColor text-xl my-4">
                How is your product funded? <span style={{ color: '#790000' }}>*</span>
              </h3>
              <RadioField label="Self-funded (bootstrapped)" name="funding" />
              <RadioField label="In process of fundraising" name="funding" />
              <RadioField label="Funding already secured via investors" name="funding" />
              <RadioField label="Not sure at the moment" name="funding" />
            </div>
            <div className="mt-8">
              <h3 className="font-header font-light text-breatheColor text-xl my-4">
                What is your current available budget? <span style={{ color: '#790000' }}>*</span>
              </h3>
              <RadioField label="Budget not secured yet" name="budget" />
              <RadioField label="Under $30,000" name="budget" />
              <RadioField label="Between $30,000 and $50,000" name="budget" />
              <RadioField label="Over $50,000" name="budget" />
            </div>
            <div className="mt-8">
              <label htmlFor="product-plans" className="font-header font-light text-breatheColor text-xl my-4 block">
                Tell us about your product plans <span style={{ color: '#790000' }}>*</span>
              </label>
              <textarea id="product-plans" required className={`block rounded p-2 h-[150px] font-light text-medium md:w-[300px] w-[816px]`} style={{ border: '2px solid #B8A6C1' }} />
              <p className="text-xs mt-4">Please include the core problem or struggle you want to solve, the audience you target, and describe the solution hypotheses.</p>
            </div>
            <div>
              <div className="flex relative z-0 mt-8">
                <div>
                  <input type="checkbox" id="personal-data" className="block mt-[5px]" required />
                  <span style={{ color: '#790000' }} className="block absolute left-[16px] top-0 z-0">
                    *
                  </span>
                </div>
                <label htmlFor="personal-data" className="font-header font-light text-breatheColor mx-6 block">
                  I consent that Backrest can process my personal data for the <br className="md:hidden" /> purpose of making me an offer for their services. Read our{' '}
                  <span className="text-rose">
                    Privacy <br className="md:hidden" />
                    Policy.
                  </span>{' '}
                </label>
              </div>
              <div className="flex mt-8">
                <div>
                  <input type="checkbox" id="newsletter" className="block mt-[5px]" />
                </div>
                <label htmlFor="newsletter" className="font-header font-light text-breatheColor mx-6 block">
                  I’d like to subscribe to the Backrest Newsletter and <br className="md:hidden" /> receive monthly cool stuff on product, design, and <br className="md:hidden" /> development.
                </label>
              </div>
            </div>
          </div>
          <div className="bg-rose md:w-[330px] w-[250px] h-[50px] flex justify-center items-center rounded-2xl md:ml-2 ml-[270px] mt-8">
            <button className="font-semibold text-sm text-white">Send message</button>
          </div>
        </form>
      </div>
      <div className="flex flex-col items-center text-center py-10 md:px-2" style={{ background: '#110B2D' }}>
        <h3 className="font-heading font-light text-3xl text-white">Questions</h3>
        <p className="font-light text-white md:my-2 my-6">
          Need more info on how we work, what we do or pretty much <br className="md:hidden" /> anything else mobile related?{' '}
        </p>
        <Link to="mailto:hello@backrest.com">
          <div className="flex gap-2 items-center">
            <Mail />
            <span className=" text-white">hello@backrest.com</span>
          </div>
        </Link>
      </div>
      <div className="flex md:flex-col md:py-4 py-12 justify-between">
        <div className="ml-24 mt-24 md:mx-4 md:my-8 md:text-center">
          <h3 className="font-header font-semibold text-2xl">Rwanda Office:</h3>
          <p className="font-light my-4 md:leading-6 leading-8">
            Westerwelle Startup Haus, Fairview Building <br /> 4th Floor,KG 622 st, Kigali, Rwanda
          </p>
          <p>+250 730672368</p>
        </div>
        <div className="">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3987.494564161752!2d30.09436401475478!3d-1.9555882985742836!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x19dca7a2558e243d%3A0xccc344b44bedaa10!2sWesterwelle%20Start%20Up%20Haus%20Kigali!5e0!3m2!1sen!2srw!4v1679075288464!5m2!1sen!2srw"
            width="630"
            height="350"
            loading="lazy"
            className="md:w-[100%]"
          ></iframe>
        </div>
      </div>
      <div className="flex md:flex-col py-4 justify-between">
        <div>
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3987.494564161752!2d30.09436401475478!3d-1.9555882985742836!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x19dca7a2558e243d%3A0xccc344b44bedaa10!2sWesterwelle%20Start%20Up%20Haus%20Kigali!5e0!3m2!1sen!2srw!4v1679075288464!5m2!1sen!2srw"
            width="630"
            height="350"
            loading="lazy"
            className="md:w-[100%]"
          ></iframe>
        </div>
        <div className="mr-24 mt-24 md:mx-4 md:my-8 md:text-center">
          <h3 className="font-header font-semibold text-2xl">Tokyo Office:</h3>
          <p className="font-light my-4 md:leading-6 leading-8">
            Share Leaf Nishi-Funabashi Gracenote <br />
            551-2 Hongo-choTokyo, Japan
          </p>
          <p>+81 70 4817 0842</p>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default ContactUsPage;
