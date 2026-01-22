import Footer from '@/components/layout/Footer';
import NavBar from '@/components/layout/NavBar';
import { useMetaData } from '@/hooks/useMetaData';

type LayoutProps = {
  title: string;
  description: string;
  children: React.ReactNode;
};

function Layout({ title, description, children }: LayoutProps) {
  useMetaData(title, description);

  return (
    <div className="scroller bg-light-background-950 dark:bg-dark-background-700">
      <NavBar />
      <main>{children}</main>
      <Footer />
    </div>
  );
}

export default Layout;
