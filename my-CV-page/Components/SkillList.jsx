export const SkillList = ({ listOfSkills }) => {
    return (
      <div className="skills-container">
        {listOfSkills.map((skill, index) => (
          <p 
            className="skill-item" 
            key={skill}
            style={{ animationDelay: `${index * 0.2}s` }}
          >
            {skill}
          </p>
        ))}
      </div>
    );
};