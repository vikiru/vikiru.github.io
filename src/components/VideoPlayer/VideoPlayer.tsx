import { Project } from '~types/Project';

type VideoPlayerProps = {
    project: Project;
};

function VideoPlayer({ project }: VideoPlayerProps) {
    return (
        <section className="pb-6 pt-4" id="project-demo">
            <h3
                className="font-heading font-semibold text-gray-800"
                style={{ fontSize: 'clamp(2rem, 0.85vw, 4rem)' }}
            >
                Demo
            </h3>
            <div className="container h-full w-full">
                <video
                    className="h-full w-full"
                    controls
                    muted
                    preload="auto"
                    title={`${project.name} Demo`}
                >
                    <source src={project.videoPath} type="video/mp4" />
                </video>
            </div>
        </section>
    );
}

export default VideoPlayer;
