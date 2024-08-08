import { Project } from "../Types/Types";
//might add proj type back here if not used elsewhere

const ProjectCard: React.FC<Project> = ({ ...projectInfo }) => {
  return (
    <div className="border rounded px-4">
      <p className="font-bold text-center mt-4">{projectInfo.projectName}</p>
      <p>{projectInfo.projectDescription}</p>
      <p>{projectInfo.projectImage}</p>
      <p>{projectInfo.projectRepositoryLink}</p>
      {projectInfo.projectLiveDeployLink && (
        <p>{projectInfo.projectLiveDeployLink}</p>
      )}
    </div>
  );
};

export default ProjectCard;
