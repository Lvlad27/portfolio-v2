import Header from '@src/app/(home)/components/Header';
import MainContent from '@src/app/(home)/components/MainContent';

export default function Home() {
  return (
    <div className="text-left py-8 p-4">
      <Header />
      <MainContent />
    </div>
  );
}
