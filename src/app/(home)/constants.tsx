import CustomLink from '@src/app/components/Link';

export const HOME_PAGE = {
  header: {
    title: 'Vlad Leontescu',
    subtitle: 'Software Developer at Coherent Solutions',
    description:
      'Crafting digital experiences with a knack for problem-solving.',
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
        <CustomLink
          href="https://www.coherentsolutions.com/"
          className="text-slate-100 hover:underline"
        >
          globally widespread company
        </CustomLink>
        &nbsp;on enterprise level applications.
      </>
    ),
    p2: `Right now I'm contributing in the engineering of a UI library for an internal project redesign scope. I'm also working on personal projects, trying out various technologies that interest me and learning anything that can improve my programming skills.`,
    p3: `When I'm not at the computer, I like to spend time with my family and friends and practising martial arts`,
  },
  section_2: {
    title: 'Experience',
    card_1: {
      date: 'March 2022 - Present',
      title: 'Front End Engineer',
      description:
        'As a fullstack engineer I developed, maintained and shipped production code for Fusion Markets websites and applications. I also contributed in the engineering of a component library for an internal project redesign scope',
      projects: [],
      technologies: [],
    },
  },
};
