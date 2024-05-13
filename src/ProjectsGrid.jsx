/* eslint-disable react/prop-types */
import PropTypes from 'prop-types';

const ProjectsGrid = (props) => {

    return (
        <div className="projects-grid">
            {props.projects.map((project, index) => (
                <div className="projects-item" key={index}>
                    <img src={project.image} alt={project.name + " logo"} />
                    <h2>{project.name}</h2>
                    <p> {project.description}
                    </p>
                    <div className="tech-badges">
                        {project.technologies.map((tech) => (
                            <span key={tech.tech} style={{ backgroundColor: tech.color, cursor: 'pointer', }}>{tech.tech}</span>
                        ))}
                    </div>
                    <div className="projects-links">
                        {project.links.map((link, index) => (
                            <a href={link.href} target="_blank" key={index}><i className={link.icon}></i> {link.text}</a>
                        ))}
                    </div>

                </div>))}
        </div >
    );
};

ProjectsGrid.porpTypes = {
    projects: PropTypes.arrayOf(
        PropTypes.shape({
            name: PropTypes.string.isRequired,
            image: PropTypes.string.isRequired,
            description: PropTypes.string.isRequired,
            technologies: PropTypes.arrayOf(PropTypes.shape({
                tech: PropTypes.string.isRequired,
                color: PropTypes.string.isRequired,
            })).isRequired,
            links: PropTypes.arrayOf(
                PropTypes.shape({
                    href: PropTypes.string.isRequired,
                    icon: PropTypes.string.isRequired,
                    text: PropTypes.string.isRequired,
                })
            ).isRequired,
        })
    ).isRequired,
};
export default ProjectsGrid;