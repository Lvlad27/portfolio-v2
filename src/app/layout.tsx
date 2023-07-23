import type { Metadata } from 'next';
import './globals.css';

export const metadata: Metadata = {
  title: 'Vlad Leontescu',
  description: 'Personal Portfolio',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className="font-bbc bg-bunker-950 text-catskill-white-50">
        {children}
      </body>
    </html>
  );
}
