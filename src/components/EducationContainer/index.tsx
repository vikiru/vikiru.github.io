import { UniversityCard } from '~components/index';
import { educationData } from '~data/index';

function EducationContainer() {
    const certificates = educationData.certificates;
    const courseraCertificates = certificates.filter(
        (cert) => cert.provider === 'Coursera',
    );

    return (
        <section className="min-h-[30vh] bg-background-950">
            <div>
                <h2 className="h2-text text-center">Education</h2>

                <UniversityCard />

                <section className="mt-2">
                    <div className="mx-4 10xl:mx-10">
                        <h4 className="h4-text">Coursera</h4>
                        {courseraCertificates.map((certificate) => {
                            return (
                                <div
                                    className="mt-2"
                                    key={certificate.certificationName}
                                >
                                    <div className="flex items-center justify-between">
                                        <div>
                                            <h5
                                                className="font-subheading italic"
                                                style={{
                                                    fontSize:
                                                        'clamp(0.65rem, 1.25vw, 5rem)',
                                                }}
                                            >
                                                {certificate.certificationName}
                                            </h5>
                                        </div>
                                        <div>
                                            <p className="info-text">
                                                {certificate.startDate} -{' '}
                                                {certificate.completionDate}
                                            </p>
                                        </div>
                                    </div>

                                    <div className="">
                                        <a
                                            className="body-text font-semibold text-accent-500 transition-colors duration-200 hover:text-accent-500/50"
                                            href={certificate.certificateLink}
                                            rel="noopener noreferrer"
                                            target="_blank"
                                            title="View my certificate"
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
