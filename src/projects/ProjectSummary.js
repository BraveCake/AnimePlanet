const ProjectSummary = ({project})=>{
    return(<div className="twhite card z-depth-0 project-summary">
    <div className="card-content grey-text text-darken-3">
        <span className="card-title">{project.title}</span>
        <div>Posted by <span className="pink-text">{project.author}</span></div>
    </div>
</div>)
}
export default ProjectSummary;