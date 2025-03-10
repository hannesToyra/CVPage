export const WorkComponent = ({ workPlace, role, year, projects = []}) => {
    return (
    <div>
        <h3> <b> {workPlace} </b> - <i> {role} </i></h3>
        <p> {year} </p>

        {projects.length > 0 && projects.map((project, index) => (
        <div key={index}>
            <p> <b>{project.Name}</b> </p>  {/*kanske inte ha bold text här?*/}
            <ul>
            {project.details.map((item, i) => (
                <li key={i}><b>{item.Role}</b> - {item.RoleDescription}</li>
            ))}
            </ul>
        </div>
        ))}
    </div>
    );
};