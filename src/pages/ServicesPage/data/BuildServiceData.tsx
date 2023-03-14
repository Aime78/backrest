import { DefinitionIcon, DesignIcon, DevelopmentIcon, GrowthIcon, HandoverIcon, Launch, MaintencanceIcon, QAIcon, RowOneIcon, RowThreeIcon, RowTwoIcon, StrategyIcon } from '../assets/icons/Icons';

const BuildServiceData = [
  {
    id: 1,
    icon: <StrategyIcon />,
    title: 'Strategy',
    body: 'Clarify what matters: your \n objectives, your value \n proposition, your unique \n advantage.',
    rowIcon: <RowOneIcon />,
  },
  {
    id: 2,
    icon: <DefinitionIcon />,
    title: 'Definition',
    body: 'Turn your idea into a plan: \n define user flows, the \n product architecture, and \n tech needs.',
    rowIcon: <RowOneIcon />,
  },
  {
    id: 3,
    icon: <DesignIcon />,
    title: 'Design',
    body: 'Get your first prototype. We’ll \n wireframe and then fully \n design an interactive \n prototype.',
    rowIcon: <RowOneIcon />,
  },
  {
    id: 4,
    icon: <DevelopmentIcon />,
    title: 'Development',
    body: 'Go from demos to done. Watch \n our team develop your product \n with the right tech stack.',
    rowIcon: <RowTwoIcon />,
  },
  {
    id: 5,
    icon: <QAIcon />,
    title: 'QA Testing',
    body: 'Get a product that works \n exactly as we planned it to \n work.',
    rowIcon: <RowTwoIcon />,
  },
  {
    id: 6,
    icon: <Launch />,
    title: 'Launch',
    body: 'Make sure you tick all the \n boxes for a successful launch \n and see your product go live.',
    rowIcon: <RowTwoIcon />,
  },
  {
    id: 7,
    icon: <MaintencanceIcon />,
    title: 'Maintenance',
    body: '',
    rowIcon: <RowThreeIcon />,
  },
  {
    id: 8,
    icon: <GrowthIcon />,
    title: 'Growth',
    body: '',
    rowIcon: '',
  },
  {
    id: 9,
    icon: <HandoverIcon />,
    title: 'Handover',
    body: '',
    rowIcon: '',
  },
];

export default BuildServiceData;
