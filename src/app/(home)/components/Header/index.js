import Typography from '@src/app/components/Typography';
import { HOME_PAGE } from '@src/app/(home)/constants';
import SocialIcon from '@src/app/components/SocialIcon';
import CustomLink from '@src/app/components/CustomLink';
import GithubIcon from '@public/images/GithubIcon';
import LinkedinIcon from '@public/images/LinkedinIcon';

const Header = () => {
  const { title, subtitle, description, githubUrl, linkedinUrl } =
    HOME_PAGE.header;

  return (
    <header className="text-left">
      <Typography
        as="h1"
        color="secondary"
        variant="title"
        className="font-saira"
      >
        {title}
      </Typography>
      <div className="flex flex-col gap-y-4">
        <Typography as="h2" color="secondary" variant="subtitle1Regular">
          {subtitle}
        </Typography>
        <Typography>{description}</Typography>
        <ul className="flex space-x-3">
          <li>
            <SocialIcon icon={<GithubIcon />} href={githubUrl} />
          </li>
          <li>
            <SocialIcon icon={<LinkedinIcon />} href={linkedinUrl} />
          </li>
        </ul>
      </div>
    </header>
  );
};

export default Header;
