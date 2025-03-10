import { Link } from 'react-router-dom';
import { educationData } from '~data/index';

function UniversityCard() {
    return (
        <section id="university-info">
            <div className="mx-4 flex items-center justify-between 10xl:mx-10">
                <div>
                    <h3 className="h4-text">{educationData.universityName}</h3>
                </div>

                <div>
                    <p
                        className="font-body text-gray-700"
                        style={{
                            fontSize: 'clamp(0.65rem, 1.25vw, 4.5rem)',
                        }}
                    >
                        {educationData.location}
                    </p>
                </div>
            </div>
            <div className="mx-4 flex items-center justify-between 10xl:mx-10">
                <h4
                    className="font-subheading italic"
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
                    className="body-text font-semibold text-accent-500 transition-colors duration-200 hover:text-accent-500/50"
                    target="_blank"
                    to={'/education/courses'}
                >
                    View Courses <span>→</span>
                </Link>
            </div>
        </section>
    );
}

export default UniversityCard;
