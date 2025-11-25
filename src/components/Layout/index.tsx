import { Footer, HelmetMeta, NavBar } from '~components/index';

type LayoutProps = {
  title: string;
  description: string;
  children: React.ReactNode;
};

function Layout({ title, description, children }: LayoutProps) {
  return (
    <>
      <HelmetMeta description={description} title={title} />
      <div className="scroller bg-light-background-950 dark:bg-dark-background-700">
        <NavBar />
        <main>{children}</main>
        <Footer />
      </div>
    </>
  );
}

export default Layout;
