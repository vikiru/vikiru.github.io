import { Footer, NavBar } from '~components/index';

function Layout({ children }: { children: React.ReactNode }) {
    return (
        <div className="scroller bg-background-950">
            <NavBar />
            <main>{children}</main>
            <Footer />
        </div>
    );
}

export default Layout;
