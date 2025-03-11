import { Project } from '~types/index';

type VideoPlayerProps = {
    project: Project;
};

function VideoPlayer({ project }: VideoPlayerProps) {
    return (
        <section className="pb-6 pt-2" id="project-video">
            <h3 className="h3-text mb-2 text-light-text-900 dark:text-dark-text-800">
                Demo
            </h3>
            <div className="demo-ctr">
                <video className="h-full w-full" controls muted preload="auto">
                    <source src={project.videoPath} type="video/mp4" />
                </video>
            </div>
        </section>
    );
}

export default VideoPlayer;
