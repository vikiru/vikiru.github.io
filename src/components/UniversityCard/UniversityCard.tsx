import { Link } from 'react-router-dom';
import educationData from '~assets/data/education';

function UniversityCard() {
    return (
        <section>
            <div className="mx-4 flex items-center justify-between">
                <div>
                    <h3
                        className="font-heading font-semibold text-gray-800"
                        style={{ fontSize: 'clamp(1rem, 1.5vw, 4rem)' }}
                    >
                        {educationData.universityName}
                    </h3>
                </div>

                <div>
                    <p
                        className="font-body text-gray-700"
                        style={{
                            fontSize: 'clamp(0.65rem, 1.25vw, 4rem)',
                        }}
                    >
                        {educationData.location}
                    </p>
                </div>
            </div>
            <div className="mx-4 flex items-center justify-between">
                <h3
                    className="font-subheading italic"
                    style={{
                        fontSize: 'clamp(0.65rem, 1.25vw, 4rem)',
                    }}
                >
                    {educationData.degree} - {educationData.acronym},{' '}
                    {educationData.degreeProgram}
                </h3>

                <div>
                    <p
                        className="font-body italic text-gray-500"
                        style={{ fontSize: 'clamp(0.65rem, 1.12vw, 4rem)' }}
                    >
                        {educationData.enrollmentStart} -{' '}
                        {educationData.enrollmentEnd}
                    </p>
                </div>
            </div>

            <div className="mx-4">
                <Link
                    className="font-body font-semibold text-accent transition-colors duration-200 hover:text-accent/50"
                    style={{ fontSize: 'clamp(0.8rem, 1.25vw, 4rem)' }}
                    to={'/education/courses'}
                    target="_blank"
                >
                    View Courses{' '}
                    <span style={{ fontSize: 'clamp(0.8rem, 1.55vw, 4rem)' }}>
                        →
                    </span>
                </Link>
            </div>
        </section>
    );
}

export default UniversityCard;
