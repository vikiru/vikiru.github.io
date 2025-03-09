import { Link } from 'react-router-dom';
import { educationData } from '~assets/data/index';
import { UniversityCard } from '~components/index';

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
                    <div className="mx-4">
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
                                                        'clamp(0.65rem, 1.25vw, 4rem)',
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
                                        <Link
                                            className="font-body font-semibold text-accent-500 transition-colors duration-200 hover:text-accent-500/50"
                                            rel="noopener noreferrer"
                                            style={{
                                                fontSize:
                                                    'clamp(0.8rem, 1.25vw, 4rem)',
                                            }}
                                            target="_blank"
                                            to={certificate.certificateLink}
                                        >
                                            View Certificate{' '}
                                            <span
                                                style={{
                                                    fontSize:
                                                        'clamp(0.8rem, 1.55vw, 4rem)',
                                                }}
                                            >
                                                →
                                            </span>
                                        </Link>
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
