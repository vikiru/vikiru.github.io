import { useMetaData } from '@/hooks/useMetaData';
import Footer from './Footer';
import NavBar from './NavBar';

type LayoutProps = {
  title: string;
  description: string;
  children: React.ReactNode;
};

export default function Layout({ title, description, children }: LayoutProps) {
  useMetaData(title, description);

  return (
    <div className="scroller bg-light-background-950 dark:bg-dark-background-700">
      <NavBar />
      <main>{children}</main>
      <Footer />
    </div>
  );
}
