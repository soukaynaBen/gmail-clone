import '../styles/section.css'
function Section({title,Icon,selected,color}) {
    return (
        <div className={`section ${selected && "section--selected"}`} style={{
            borderBottom:`3px solid ${  color}`,
            color:`${selected && color}`,
        }}>
            <Icon/>
            <h4> {title} </h4>
        </div>
    )
}

export default Section
