import { Footer } from '@/components/layout/Footer';
import { NavBar } from '@/components/layout/NavBar';

type LayoutProps = {
  children: React.ReactNode;
};

export function Layout({ children }: LayoutProps) {
  return (
    <>
      <NavBar />
      <main
        className="px-4 md:px-6 3xl:px-8 4xl:px-10 5xl:px-12"
        id="main-content"
      >
        {children}
      </main>
      <Footer />
    </>
  );
}
