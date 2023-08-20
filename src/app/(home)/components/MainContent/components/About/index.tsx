import { HOME_PAGE } from '@src/app/(home)/constants';
import Typography from '@src/app/components/Typography';
import SocialIcon from '@src/app/components/SocialIcon';

const AboutSection = () => {
  const { title, p1, p2, p3 } = HOME_PAGE.section_1;

  return (
    <section id="about" className="flex flex-col gap-y-8">
      <Typography as="h2" color="secondary" className="font-bold uppercase">
        {title}
      </Typography>
      <div className="flex flex-col gap-y-4">
        <Typography>{p1}</Typography>
        <Typography>{p2}</Typography>
        <Typography>{p3}</Typography>
      </div>
    </section>
  );
};

export default AboutSection;
