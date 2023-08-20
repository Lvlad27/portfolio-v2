import React from 'react';
import { HOME_PAGE } from '@src/app/(home)/constants';
import Typography from '@src/app/components/Typography';

const Experience = () => {
  const { title, p1, p2, p3 } = HOME_PAGE.section_2;

  return (
    <section id="experience" className="flex flex-col gap-y-8">
      <Typography as="h2" color="secondary" className="font-bold uppercase">
        {title}
      </Typography>
    </section>
  );
};

export default Experience;
