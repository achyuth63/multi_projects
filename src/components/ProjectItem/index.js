import './index.css'

const ProjectItem = props => {
  const {projectDetails} = props
  const {projectId, imageURL, description, title, appURL} = projectDetails
  return (
    <>
      <li className="project-item-container">
        <a href={appURL}>
          <img
            className="project-item-image"
            src={imageURL}
            alt={`project-item${projectId}`}
          />

          <div className="project-item-details-container">
            <h1 className="project-item-title">{title}</h1>
          </div>
        </a>
        <div className="project-item-details-container">
          <p className="project-item-description">{description}</p>
        </div>
      </li>
    </>
  )
}

export default ProjectItem
