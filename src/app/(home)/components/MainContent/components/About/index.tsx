import { HOME_PAGE } from '@src/app/(home)/constants';
import Typography from '@src/app/components/Typography';

const AboutSection = () => {
  const { title, p1, p2, p3 } = HOME_PAGE.section_1;

  return (
    <section id="about">
      <Typography as="h2" variant="body1" className="font-bold uppercase">
        {title}
      </Typography>
      <Typography variant="body1" color="secondary" className="mt-8">
        {p1}
      </Typography>
    </section>
  );
};

export default AboutSection;
