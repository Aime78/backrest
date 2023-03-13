const Reasons = () => {
  return (
    <div className="flex flex-col items-center py-16 md:py-4 md:px-2" style={{ background: '#F8F7F9' }}>
      <h2 className="font-header font-bold text-3xl text-breatheColor md:text-center">5 reasons to choose Backrest</h2>
      <div className="grid grid-cols-2  grid-rows-3 gap-8 md:flex md:flex-col mt-6">
        <div className="py-2">
          <h3 className="font-header font-bold text-xl text-breatheColor">1. App development solutions – the full package</h3>
          <p className="font-light text-sm md:my-2 mt-2 leading-6">
            We cover the entire flow of taking an idea and launching it as a full <br className="md:hidden" /> mobile product, along with testing and go-to-market advising.{' '}
            <br className="md:hidden" /> This includes everything from product strategy, UI/UX design to <br className="md:hidden" /> cross-platform and native{' '}
            <span className="text-rose">iOS mobile development</span> and{' '}
            <span className="text-rose">
              {' '}
              Android <br className="md:hidden" /> mobile development.
            </span>
          </p>
        </div>
        <div className="py-2">
          <h3 className="font-header font-bold text-xl text-breatheColor">2. Experienced app creators</h3>
          <p className="font-light text-sm md:my-2 mt-2 leading-6">
            With over 100 digital products built in the last six years, for various <br className="md:hidden" /> industries, we know what it takes to build a strong, engaging mobile or{' '}
            <br className="md:hidden" /> web app. About 40% of our team members have reached senior level <br className="md:hidden" /> of expertise in their field. You can rest assured: your product
            is in good <br className="md:hidden" /> hands.
          </p>
        </div>
        <div className="py-2">
          <h3 className="font-header font-bold text-xl text-breatheColor">3. In-house app developers only</h3>
          <p className="font-light text-sm md:my-2 mt-2 leading-6">
            We’ve taken special care to build a strong and steady team in-house. <br className="md:hidden" /> All of our people are trained in our custom processes and have the{' '}
            <br className="md:hidden" /> specific focus and attention to details that has made Backrest one of <br className="md:hidden" /> the strongest app development agencies in Japan. Our
            internal <br className="md:hidden" /> mobile development school brings fresh talent in the development team <br className="md:hidden" /> every year.
          </p>
        </div>
        <div className="py-2 col-start-2 row-start-1">
          <h3 className="font-header font-bold text-xl text-breatheColor">4. Focus on efficiency and effectiveness</h3>
          <p className="font-light text-sm md:my-2 mt-2 leading-6">
            We work agile: two-week sprints and stand-ups ensure a fast delivery <br className="md:hidden" /> and an effective communication with the client. Our Product <br className="md:hidden" />{' '}
            Discovery Workshops, Mobile MVP solutions and accurate Prototypes <br className="md:hidden" /> bring our clients clarity and amazing product value. We always advise{' '}
            <br className="md:hidden" /> on fast validation and doing user testing as early and as often as <br className="md:hidden" /> possible.
          </p>
        </div>
        <div className="py-2 col-start-2 row-start-2">
          <h3 className="font-header font-bold text-xl text-breatheColor">5. Great communication and smart, fun people</h3>
          <p className="font-light text-sm md:my-2 mt-2 leading-6">
            We work tightly with our client’s teams. This brings many advantages <br className="md:hidden" /> in terms of communication and reduces many of the usual hiccups of{' '}
            <br className="md:hidden" /> outsourced development. It’s probably why our clients come over in <br className="md:hidden" /> our beautiful offices quite often for workshops and working
            sessions.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Reasons;
