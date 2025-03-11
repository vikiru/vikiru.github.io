import { UniversityCard } from '~components/index';
import { educationData } from '~data/index';

function EducationContainer() {
    const certificates = educationData.certificates;
    const courseraCertificates = certificates.filter(
        (cert) => cert.provider === 'Coursera',
    );

    return (
        <section className="section-ctr min-h-[30vh] bg-light-background-950 pb-4 7xl:py-12 11xl:py-16 dark:bg-dark-background-700">
            <div>
                <h2 className="h2-text text-center text-light-text-900 dark:text-dark-text-800">
                    Education
                </h2>
                {/* University Info */}
                <UniversityCard />

                {/* Coursera Certificates */}
                <section className="mt-2" id="coursera-certificates">
                    <div className="mx-4 xs:pt-2 7xl:pt-4 10xl:mx-10 11xl:pt-12">
                        <h3 className="h4-text text-light-text-900 7xl:pb-6 dark:text-dark-text-800">
                            Coursera
                        </h3>
                        {courseraCertificates.map((certificate) => {
                            return (
                                <div
                                    className="pb-2 11xl:pt-16"
                                    key={certificate.certificationName}
                                >
                                    <div className="flex items-center justify-between">
                                        <div>
                                            <h4
                                                className="info-text font-subheading italic text-light-text-900 dark:text-dark-text-800"
                                                style={{
                                                    fontSize:
                                                        'clamp(0.66rem, 1.25vw, 5rem)',
                                                }}
                                            >
                                                {certificate.certificationName}
                                            </h4>
                                        </div>
                                        <div>
                                            <p className="info-text">
                                                {certificate.startDate} -{' '}
                                                {certificate.completionDate}
                                            </p>
                                        </div>
                                    </div>

                                    <div className="10xl:pt-4">
                                        <a
                                            className="text-clamp-button font-semibold text-light-accent-500 transition-colors duration-200 hover:text-light-accent-500/50 motion-reduce:transition-none dark:text-dark-accent-500 dark:hover:text-dark-accent-500/50"
                                            href={certificate.certificateLink}
                                            rel="noopener noreferrer"
                                            target="_blank"
                                        >
                                            View Certificate <span>→</span>
                                        </a>
                                    </div>
                                </div>
                            );
                        })}
                    </div>
                </section>
            </div>
        </section>
    );
}

export default EducationContainer;
