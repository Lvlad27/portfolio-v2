import AboutSection from '@src/app/(home)/components/MainContent/components/About';
import Experience from '@src/app/(home)/components/MainContent/components/Experience';
import { HOME_PAGE } from '@src/app/(home)/constants';

export default function MainContent() {
  const { title, p1, p2, p3 } = HOME_PAGE.section_2;

  return (
    <main className="font-primary mt-24 flex flex-col gap-y-16">
      <AboutSection />
      <Experience />
    </main>
  );
}
