import CustomLink from '@src/app/components/CustomLink';

export const HOME_PAGE = {
  header: {
    title: 'Vlad Leontescu',
    subtitle: 'Software Developer at Coherent Solutions',
    description:
      'Crafting digital experiences with a knack for problem-solving.',
    githubUrl: 'https://github.com/Lvlad27',
    linkedinUrl: 'https://www.linkedin.com/in/vladleontescu/',
  },
  section_1: {
    title: 'About',
    p1: (
      <>
        Back in 2021, guided by a a deep appreciation for design and
        problem-solving, I decided to steer more towards programming. I was
        hooked by the potential for creative expression through logic and
        critical thinking. Fast forward to today, I've had the opportunity to
        work for a&nbsp;
        <CustomLink href="https://www.coherentsolutions.com/">
          globally widespread company
        </CustomLink>
        &nbsp;on enterprise level applications.
      </>
    ),
    p2: `Right now I'm contributing in the engineering of a custom UI library for a fintech project. I'm also working on personal projects, trying out various technologies that interest me, learning and building projects that can help improve my programming skills.`,
    p3: `When I'm not at the computer, I like to spend time with my family and friends or practising martial arts.`,
  },
  section_2: {
    title: 'Experience',
    card_1: {
      date: 'March 2022 -  Present',
      title: 'Front End Engineer',
      description:
        'As a fullstack engineer I developed, maintained and shipped production code for Fusion Markets websites and applications. I also contributed in the engineering of a component library for an internal project redesign scope.',
      projects: [
        {
          title: 'Global Prime',
          url: 'https://globalprime.com/',
        },
        {
          title: 'Fusion Markets',
          url: 'https://fusionmarkets.com/',
        },
      ],
      technologies: [
        'React',
        'Node',
        'MongoDB',
        'JavaScript',
        'TypeScript',
        'Material UI',
        'Chakra UI',
      ],
    },
  },
};
