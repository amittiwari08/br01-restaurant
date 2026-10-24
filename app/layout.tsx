import type { Metadata } from 'next';
import './globals.css';

export const metadata: Metadata = {
  title: 'The BR01 Restaurant | Anisabad, Patna',
  description: 'A family-friendly Indian restaurant concept for The BR01 Restaurant in Anisabad, Patna. Explore menu highlights, ambience and contact details.',
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return <html lang="en"><body>{children}</body></html>;
}
