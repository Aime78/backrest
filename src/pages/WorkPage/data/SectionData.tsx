import imageOne from '@/pages/WorkPage/assets/images/wrist.png';
import imageTwo from '@/pages/WorkPage/assets/images/phones.png';
import imageThree from '@/pages/HomePage/assets/images/lobsta.png';
import imageFour from '@/pages/HomePage/assets/images/my-city-report.png';
import imageFive from '@/pages/HomePage/assets/images/aviator-logistics.png';

const sectionData = [
  {
    id: 1,
    title: 'WristWrist',
    subtitle: 'Supercharge Your Events \n With WristWrist',
    technologies: ['Ruby on Rails', 'Fintech', 'Rwanda'],
    techBackgroundColor: 'rgba(255, 255, 255, 0.15)',
    body: 'Take control of your event sales with WristWrist payments. We provide an easy cashless and guest management system to deliver the smoothest guest experience and increase visibility and profitability for your events.',
    image: imageOne,
    fontColor: 'white',
    color: 'white',
    backgroundColor: 'linear-gradient(90deg, #1340B2 0%, #007ADD 100%)',
  },
  {
    id: 2,
    title: 'Strawberry taxi',
    subtitle: 'Streamline your Logistics with an Experienced Company',
    technologies: ['Flutter', 'Mobility', 'Japan'],
    techBackgroundColor: 'rgba(255, 255, 255, 0.15)',
    body: 'We offer cargo clearance, warehousing, transportation and a host of other services that make shipping and receiving goods in Rwanda easier than ever.',
    image: imageTwo,
    fontColor: 'white',
    color: 'white',
    backgroundColor: 'linear-gradient(79.22deg, #7200A5 0%, #110046 99.99%)',
    reverse: true,
  },
  {
    id: 3,
    title: 'Lobsta',
    subtitle: `A new Task Management \n that connects Places and \n Tasks`,
    technologies: ['Flutter', 'GIS', 'Japan'],
    techBackgroundColor: 'rgba(51, 50, 58, 0.2)',
    body: 'LOBSTA is a new kind of task manager that helps you manage all kinds of \n location-based tasks collaboratively and more efficient.',
    image: imageThree,
    fontColor: 'breatheColor',
    color: 'black',
    backgroundColor: 'white',
    reverse: true,
  },
  {
    id: 4,
    title: 'My City Report',
    subtitle: 'Report local issues',
    technologies: ['iOS', 'Open Government', 'Japan'],
    techBackgroundColor: 'rgba(255, 255, 255, 0.15)',
    body: 'With this app, citizens can use their smartphones to report local issues such \n as local photos, locations on maps, and short messages to local \n governments, and to We aim to create a next-generation citizen \n collaboration platform for people to collaborate and solve problems \n themselves.',
    image: imageFour,
    fontColor: 'white',
    color: 'white',
    backgroundColor: '#F3654A',
  },
  {
    id: 5,
    title: 'Aviato Logistics',
    subtitle: `Streamline your Logistics with \n an Experienced Company`,
    technologies: ['Web development', 'Logistic', 'Rwanda'],
    techBackgroundColor: 'rgba(255, 255, 255, 0.15)',
    body: 'We offer cargo clearance, warehousing, transportation and a host of other \n services that make shipping and receiving goods in Rwanda easier than \n ever.',
    image: imageFive,
    fontColor: 'white',
    color: 'white',
    backgroundColor: 'black',
  },
];

export default sectionData;
