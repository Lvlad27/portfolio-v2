import { HOME_PAGE } from '@src/app/(home)/constants';
import Typography from '@src/app/components/Typography';

export default function MainContent() {
  const { title, p1, p2, p3 } = HOME_PAGE.about;

  return (
    <main className="font-primary mt-24">
      <section>
        <Typography as="h2" variant="body1" className="font-bold uppercase">
          {title}
        </Typography>
        <Typography variant="body1" color="secondary" className="mt-10">
          {p1}
        </Typography>
      </section>
    </main>
  );
}
