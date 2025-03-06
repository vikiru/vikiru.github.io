import { Link } from 'react-router-dom';
import { educationData } from '~assets/data/index';
import { UniversityCard } from '~components/index';

function EducationContainer() {
    const certificates = educationData.certificates;
    const courseraCertificates = certificates.filter(
        (cert) => cert.provider === 'Coursera',
    );

    return (
        <section className="min-h-[30vh] bg-gray-50">
            <div>
                <h2
                    className="text-center font-heading font-semibold text-gray-800"
                    style={{ fontSize: 'clamp(2rem, 2vw, 9rem)' }}
                >
                    Education
                </h2>

                <UniversityCard />

                <section className="mt-2">
                    <div className="mx-4">
                        <h3
                            className="font-heading font-semibold text-gray-800"
                            style={{
                                fontSize: 'clamp(1rem, 1.5vw, 4rem)',
                            }}
                        >
                            Coursera
                        </h3>
                        {courseraCertificates.map((certificate) => {
                            return (
                                <div
                                    className="mt-2"
                                    key={certificate.certificationName}
                                >
                                    <div className="flex items-center justify-between">
                                        <div>
                                            <h3
                                                className="font-subheading italic"
                                                style={{
                                                    fontSize:
                                                        'clamp(0.65rem, 1.25vw, 4rem)',
                                                }}
                                            >
                                                {certificate.certificationName}
                                            </h3>
                                        </div>
                                        <div>
                                            <p
                                                className="font-body italic text-gray-500"
                                                style={{
                                                    fontSize:
                                                        'clamp(0.65rem, 1.12vw, 4rem)',
                                                }}
                                            >
                                                {certificate.startDate} -{' '}
                                                {certificate.completionDate}
                                            </p>
                                        </div>
                                    </div>

                                    <div className="">
                                        <Link
                                            className="font-body font-semibold text-accent transition-colors duration-200 hover:text-accent/50"
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
