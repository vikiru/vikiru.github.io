import { Link } from 'react-router-dom';
import { sitemap } from '~assets/data';

function SitemapSection() {
    return (
        <section className="min-h-[80vh] xs:pt-6 lg:py-12 " id="sitemap">
            <div className="xs:mx-4 10xl:mx-10">
                <h2 className="h2-text text-center">Sitemap</h2>
            </div>

            {sitemap.map((group) => (
                <section
                    className="8xl:pb-18 mx-4 lg:pb-6 3xl:pb-8 4xl:pb-10 5xl:pb-12 6xl:pb-14 7xl:pb-16 10xl:mx-10 11xl:mx-14"
                    id={group.category}
                    key={group.category}
                >
                    <h3 className="h3-text">{group.category}</h3>
                    <div className="9xl:my-18 border-t border-gray-300 xs:my-2 lg:my-4 3xl:my-6 4xl:my-8 5xl:my-10 6xl:my-12 7xl:my-14 8xl:my-16" />
                    <div className="grid grid-cols-2 gap-4 lg:grid-cols-3">
                        {group.items.map((item) => (
                            <div
                                className="body-text text-text-600 transition-colors duration-300 hover:text-accent-500 hover:underline"
                                key={item.name}
                            >
                                <Link to={item.url}>{item.name}</Link>
                            </div>
                        ))}
                    </div>
                    <div className="my-8" />
                </section>
            ))}
        </section>
    );
}

export default SitemapSection;
