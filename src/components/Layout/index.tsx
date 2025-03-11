import { Footer, NavBar } from '~components/index';

function Layout({ children }: { children: React.ReactNode }) {
    return (
        <div className="scroller bg-light-background-950 dark:bg-dark-background-700">
            <NavBar />
            <main>{children}</main>
            <Footer />
        </div>
    );
}

export default Layout;
