export const EducationComponent = ({ school, degree, year}) => {
    return (
    <div>
        <h3> <b>{school}</b> - <i>{degree}</i> </h3>
        <p> {year} </p>
    </div>
    )
}