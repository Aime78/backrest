import { Building, Concept, Polygon, Scaling } from '@/assets/ServicesIcons';

const ServicesToggle = () => (
  <div className="text-black border-2 border-white flex justify-between px-24 pt-6 pb-20" style={{ background: '#F1EDF6' }}>
    <div className="absolute top-[-20px] right-[190px] ">
      <Polygon />
    </div>
    <div className="flex gap-4">
      <div>
        <Concept />
      </div>
      <div>
        <h3 className="font-header font-semibold py-2 cursor-pointer">Product Concepting</h3>
        <p className="font-light text-sm py-2 cursor-pointer">Product Concepting</p>
        <p className="font-light text-sm py-2 cursor-pointer">Design Sprint</p>
        <p className="font-light text-sm py-2 cursor-pointer">Product UX & UI Design</p>
      </div>
    </div>
    <div className="flex gap-4">
      <div>
        <Building />
      </div>
      <div>
        <h3 className="font-header font-semibold py-2 cursor-pointer">Product Building</h3>
        <p className="font-light text-sm py-2 cursor-pointer">Mobile Development Solutions</p>
        <div className="font-light text-xs pl-2 cursor-pointer text-slate-600 border-l-[1px] border-slate-300">
          <p className="">iOS App Develpment</p>
          <p className="py-2">Android App Development</p>
          <p className="">React Native App Development</p>
        </div>
        <p className="font-light text-sm py-2 cursor-pointer">Design Sprint</p>
        <p className="font-light text-sm py-2 cursor-pointer">Product UX & UI Design</p>
      </div>
    </div>
    <div className="flex gap-4">
      <div>
        <Scaling />
      </div>
      <div>
        <h3 className="font-header font-semibold py-2 cursor-pointer">Product Scaling</h3>
        <p className="font-light text-sm py-2 cursor-pointer">Product Launch Solution</p>
      </div>
    </div>
  </div>
);

export default ServicesToggle;
