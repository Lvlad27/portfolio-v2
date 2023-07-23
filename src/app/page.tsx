import Image from 'next/image';
import Typography from '@src/app/components/Typography';

export default function Home() {
  return (
    <main className="font-primary flex flex-col justify-between p-4">
      <Typography
        variant="h1"
        color="primary"
        className="font-secondary text-left"
      >
        Vlad Leontescu
      </Typography>
      <Typography variant="h2" color="primary" className="text-left">
        Front End Engineer at Coherent Solutions
      </Typography>
    </main>
  );
}
