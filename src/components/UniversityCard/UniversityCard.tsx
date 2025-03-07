import { Link } from 'react-router-dom';
import { educationData } from '~assets/data/index';

function UniversityCard() {
    return (
        <section>
            <div className="mx-4 flex items-center justify-between">
                <div>
                    <h4 className="h4-text">{educationData.universityName}</h4>
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
                <h5
                    className="font-subheading italic"
                    style={{
                        fontSize: 'clamp(0.65rem, 1.25vw, 4rem)',
                    }}
                >
                    {educationData.degree} - {educationData.acronym},{' '}
                    {educationData.degreeProgram}
                </h5>

                <div>
                    <p className="info-text">
                        {educationData.enrollmentStart} -{' '}
                        {educationData.enrollmentEnd}
                    </p>
                </div>
            </div>

            <div className="mx-4">
                <Link
                    className="font-body font-semibold text-accent transition-colors duration-200 hover:text-accent/50"
                    style={{ fontSize: 'clamp(0.8rem, 1.25vw, 4rem)' }}
                    target="_blank"
                    to={'/education/courses'}
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
