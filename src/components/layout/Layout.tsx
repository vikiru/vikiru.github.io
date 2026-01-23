import Footer from '@/components/layout/Footer';
import NavBar from '@/components/layout/NavBar';

type LayoutProps = {
  children: React.ReactNode;
};

function Layout({ children }: LayoutProps) {
  return (
    <div className="scroller bg-light-background-950 dark:bg-dark-background-700">
      <NavBar />
      <main>{children}</main>
      <Footer />
    </div>
  );
}

export default Layout;
