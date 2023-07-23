import Typography from '@src/app/components/Typography';
import { HOME_PAGE } from '@src/app/(home)/constants';

export default function Header() {
  const { title, subtitle, description } = HOME_PAGE.header;

  return (
    <header className="text-left">
      <Typography
        as="h1"
        variant="title"
        color="primary"
        className="font-saira"
      >
        {title}
      </Typography>
      <Typography as="h2" variant="subtitle1Regular" color="primary">
        {subtitle}
      </Typography>
      <Typography variant="body1" color="secondary" className="mt-4">
        {description}
      </Typography>
    </header>
  );
}
