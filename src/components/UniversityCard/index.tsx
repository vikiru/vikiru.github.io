import { Link } from 'react-router-dom';
import { educationData } from '~data/index';

function UniversityCard() {
    return (
        <section id="university-info">
            <div className="mx-4 flex items-center justify-between 10xl:mx-10">
                <div>
                    <h3 className="h4-text text-light-text-900 dark:text-dark-text-800">
                        {educationData.universityName}
                    </h3>
                </div>

                <div>
                    <p
                        className="font-body text-light-text-600 dark:text-dark-text-700"
                        style={{
                            fontSize: 'clamp(0.75rem, 1.45vw, 4.5rem)',
                        }}
                    >
                        {educationData.location}
                    </p>
                </div>
            </div>
            <div className="mx-4 flex items-center justify-between 10xl:mx-10">
                <h4
                    className="font-subheading italic text-light-text-600 dark:text-dark-text-700"
                    style={{
                        fontSize: 'clamp(0.65rem, 1.25vw, 5rem)',
                    }}
                >
                    {educationData.degree} - {educationData.acronym},{' '}
                    {educationData.degreeProgram}
                </h4>

                <div>
                    <p className="info-text">
                        {educationData.enrollmentStart} -{' '}
                        {educationData.enrollmentEnd}
                    </p>
                </div>
            </div>

            <div className="mx-4 10xl:mx-10">
                <Link
                    className="text-clamp-button font-semibold text-light-accent-500 transition-colors duration-200 hover:text-light-accent-500/50 motion-reduce:transition-none dark:text-dark-accent-500 dark:hover:text-dark-accent-500/50"
                    to={'/education/courses'}
                >
                    View Courses <span>→</span>
                </Link>
            </div>
        </section>
    );
}

export default UniversityCard;
