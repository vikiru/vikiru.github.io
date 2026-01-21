import UniversityCard from './UniversityCard';
import educationData from '@/data/education';

export default function EducationContainer() {
  const certificates = educationData.certificates;
  const courseraCertificates = certificates.filter(
    (cert) => cert.provider === 'Coursera',
  );

  return (
    <section className="section-ctr min-h-[30vh] bg-secondary pb-4 7xl:py-12 11xl:py-16 dark:bg-secondary/20">
      <div>
        <h2 className="text-2xl font-bold tracking-tight text-center text-foreground sm:text-3xl lg:text-4xl">
          Education
        </h2>
        <UniversityCard />

        <section className="mt-2" id="coursera-certificates">
          <div className="mx-4 xs:pt-2 6xl:pt-4 10xl:mx-10 11xl:pt-12">
            <div className="xl:pb-1 2xl:pb-2 3xl:pb-4">
              <h3 className="text-xl font-bold tracking-tight text-foreground sm:text-2xl">
                Coursera
              </h3>
            </div>

            <div className="xl:mt-2">
              {courseraCertificates.map((certificate) => {
                return (
                  <div
                    className="pb-2 4xl:my-0 5xl:py-3 10xl:pb-2 11xl:pt-16"
                    key={certificate.certificationName}
                  >
                    <div className="flex items-center justify-between">
                      <div>
                        <h4 className="italic text-muted-foreground 3xl:text-lg 8xl:text-2xl">
                          {certificate.certificationName}
                        </h4>
                      </div>
                      <div>
                        <p className="text-muted-foreground 3xl:text-lg 8xl:text-2xl">
                          {certificate.startDate} - {certificate.completionDate}
                        </p>
                      </div>
                    </div>

                    <div className="2xl:my-2 5xl:pt-2 10xl:pt-4">
                      <a
                        className="font-semibold text-accent transition-colors hover:text-accent/80"
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
          </div>
        </section>
      </div>
    </section>
  );
}
