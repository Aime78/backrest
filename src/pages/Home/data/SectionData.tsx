import imageOne from '@/pages/Home/assets/images/my-city-report.png';
import imageTwo from '@/pages/Home/assets/images/lobsta.png';
import imageThree from '@/pages/Home/assets/images/aviator-logistics.png';

const sectionData = [
  {
    id: 1,
    title: 'My City Report',
    subtitle: 'Report local issues',
    technologies: ['iOS', 'Open Government', 'Japan'],
    techBackgroundColor: 'rgba(255, 255, 255, 0.15)',
    body: 'With this app, citizens can use their smartphones to report local issues such \n as local photos, locations on maps, and short messages to local \n governments, and to We aim to create a next-generation citizen \n collaboration platform for people to collaborate and solve problems \n themselves.',
    image: imageOne,
    fontColor: 'white',
    color: 'white',
    backgroundColor: '#F3654A',
  },
  {
    id: 2,
    title: 'Lobsta',
    subtitle: `A new Task Management \n that connects Places and \n Tasks`,
    technologies: ['Flutter', 'GIS', 'Japan'],
    techBackgroundColor: 'rgba(51, 50, 58, 0.2)',
    body: 'LOBSTA is a new kind of task manager that helps you manage all kinds of \n location-based tasks collaboratively and more efficient.',
    image: imageTwo,
    fontColor: 'breatheColor',
    color: 'black',
    backgroundColor: 'white',
    reverse: true,
  },
  {
    id: 3,
    title: 'Aviato Logistics',
    subtitle: `Streamline your Logistics with \n an Experienced Company`,
    technologies: ['Web development', 'Logistic', 'Rwanda'],
    techBackgroundColor: 'rgba(255, 255, 255, 0.15)',
    body: 'We offer cargo clearance, warehousing, transportation and a host of other \n services that make shipping and receiving goods in Rwanda easier than \n ever.',
    image: imageThree,
    fontColor: 'white',
    color: 'white',
    backgroundColor: 'black',
  },
];

export default sectionData;
