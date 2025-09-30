export default function Projects({ projectRef, className, myProjects }) {
    return (
        <>
            <div ref={projectRef} className={`projects-container ${className}`}>
                <h1 className="projects-tilt-text">
                    P
                    <span>r</span>
                    <span>o</span>
                    <span>J</span>
                    <span>e</span>
                    cts
                    <span>˙🗁˖｡⋆</span>
                </h1>
                <div className="project-items-container">

                    {
                        myProjects.map(project => (
                            <div className="project-item" key={project.project_id}>
                                <div style={project.style} className="project-item-header">
                                    <i className={project.project_icon}></i>
                                    <div className="project-links">
                                        <a target="_blank" href={project.github_link}>
                                            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-github w-5 h-5 text-white" aria-hidden="true"><path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4"></path><path d="M9 18c-4.51 2-5-2-7-2"></path></svg>
                                        </a>
                                        <a target="_blank" href={project.web_link}>
                                            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-external-link w-5 h-5 text-white" aria-hidden="true"><path d="M15 3h6v6"></path><path d="M10 14 21 3"></path><path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"></path></svg>

                                        </a>
                                    </div>
                                </div>
                                <div className="project-item-text">
                                    <p className="project-title">{project.project_title}</p>
                                    <p className="project-description">
                                        {project.project_description}
                                    </p>
                                    <p className="project-sub-title">Key Features</p>
                                    <ul className="project-feature">
                                        {
                                            project.project_feature.map((feature, index) => (
                                                <li key={index}>{feature}</li>
                                            ))
                                        }
                                    </ul>

                                    <p className="project-sub-title">Tech stack</p>
                                    <ul className="project-techstack">
                                        {
                                            project.project_techStack.map((tech, index) => (
                                                <li key={index}>{tech}</li>
                                            ))
                                        }
                                    </ul>
                                </div>
                            </div>
                        ))
                    }
                </div>

                <a target="_blank" className="view-more-btn" href="https://github.com/may22802?tab=repositories">
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-github w-5 h-5 text-white" aria-hidden="true">
                        <path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4"></path>
                        <path d="M9 18c-4.51 2-5-2-7-2"></path>
                    </svg>
                View more on GitHub</a>
            </div>
        </>
    )
}