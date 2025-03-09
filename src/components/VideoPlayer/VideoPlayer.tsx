import { Project } from '~types/index';

type VideoPlayerProps = {
    project: Project;
};

function VideoPlayer({ project }: VideoPlayerProps) {
    return (
        <section className="pb-6 pt-2" id="project-demo">
            <h3 className="h3-text mb-2">Demo</h3>
            <div className="demo-ctr">
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
