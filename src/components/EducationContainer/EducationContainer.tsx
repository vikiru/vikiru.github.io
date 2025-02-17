import { Link } from 'react-router-dom';
import educationData from '~assets/data/education';

function EducationContainer() {
    const certificates = educationData.certificates;
    const courseraCertificates = certificates.filter(
        (cert) => cert.provider === 'Coursera',
    );

    return (
        <section
            className="bg-primary dark:bg-darkPrimary mx-auto w-screen pb-6 pt-2"
            id="education"
        >
            <div className="px-4">
                <h2 className="heading-text dark:text-primary pt-2 text-center uppercase underline">
                    Education
                </h2>
            </div>

            <section className="grid grid-cols-1">
                {/* University Section*/}
                <section className="px-4 pt-4" id="unversity-info">
                    <div>
                        <h3 className="subheading-text dark:text-primary text-center uppercase">
                            {educationData.universityName}
                        </h3>
                    </div>

                    <div className="xxs:block">
                        <div>
                            <div>
                                <p className="subheading-text dark:text-primary text-center">
                                    {educationData.degree} -{' '}
                                    {educationData.acronym}.,{' '}
                                    {educationData.degreeProgram}
                                </p>
                            </div>

                            <div>
                                <h3 className="body-text dark:text-primary text-center  uppercase tracking-wide">
                                    {educationData.enrollmentStart} -{' '}
                                    {educationData.enrollmentEnd}
                                </h3>
                            </div>
                        </div>

                        <div className="2xl:w-[50%]dark:border-primary border-secondary bg-accent hover:bg-accent/80 dark:bg-darkAccent dark:hover:bg-darkAccent/80 mx-auto rounded-lg border-b-4 drop-shadow-lg hover:cursor-pointer xxs:h-auto xxs:w-full xl:h-[50%] xl:w-[53%] 2xl:w-[50%]">
                            <Link
                                id="Courses Link"
                                title="View my courses"
                                to="/education/courses"
                            >
                                <h2 className="body-text text-secondary dark:text-primary m-auto py-2 text-center font-body font-semibold uppercase">
                                    View courses {'  '}
                                </h2>
                            </Link>
                        </div>
                    </div>
                </section>

                {/* Coursera Section */}
                <section
                    className="m-2 mx-auto xxs:block"
                    id="coursera-certificate-info"
                >
                    <div className="px-4">
                        <h2 className="subheading-text dark:text-primary text-center uppercase">
                            Coursera
                        </h2>
                    </div>
                    {courseraCertificates.map((certificate) => (
                        <div
                            className="px-4 pb-2 xxs:block"
                            id={certificate.certificationName.toLowerCase()}
                            key={certificate.certificationName}
                        >
                            <div>
                                <div>
                                    <h3 className="subheading-text dark:text-primary text-center">
                                        {certificate.certificationName}
                                    </h3>
                                </div>
                                <div>
                                    <h4 className="body-text dark:text-primary text-center uppercase tracking-wide">
                                        {certificate.startDate} -{' '}
                                        {certificate.completionDate}
                                    </h4>
                                </div>
                            </div>
                            <div className="border-secondary bg-accent hover:bg-accent/80 dark:border-primary dark:bg-darkAccent dark:hover:bg-darkAccent/80 mx-auto rounded-lg border-b-4 drop-shadow-lg hover:cursor-pointer xxs:w-full xl:h-[50%] 5xl:w-[40rem]">
                                <a
                                    href={certificate.certificateLink}
                                    id={
                                        certificate.certificationName.toLowerCase() +
                                        'Link'
                                    }
                                    rel="noopener noreferrer"
                                    target="_blank"
                                    title="View my certificate"
                                >
                                    <h2 className="body-text text-secondary dark:text-primary m-auto py-2 text-center font-body font-semibold uppercase">
                                        View certificate{'  '}
                                    </h2>
                                </a>
                            </div>
                        </div>
                    ))}
                </section>
            </section>
        </section>
    );
}

export default EducationContainer;
