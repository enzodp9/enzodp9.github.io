import PropTypes from 'prop-types';

const SkillsGrid = (props) => {
    return (
        <div className="skills-container">
            <h2>{props.title}</h2>
            <div className="skills-grid">
                {props.skillList.map((skill, index) => (
                    <figure className="skills-item" key={index}>
                        <img src={skill.image} alt={skill.name} />
                        <figcaption>{skill.name}</figcaption>
                    </figure>
                ))}
            </div>
        </div>
    );
};

SkillsGrid.propTypes = {
    title: PropTypes.string.isRequired,
    skillList: PropTypes.arrayOf(
        PropTypes.shape({
            name: PropTypes.string.isRequired,
            image: PropTypes.string.isRequired,
        })
    ).isRequired,
};


export default SkillsGrid;
