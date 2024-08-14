import { assignCardColor } from "../Data/CardColorLUT";
import { Project } from "../Types/Types";

interface ProjectCard extends Project {
  index: number;
}
//might add proj type back here if not used elsewhere

const ProjectCard: React.FC<ProjectCard> = (props) => {
  const { index, ...projectInfo } = props;

  return (
    <div className={`w-64 border rounded px-4 ${assignCardColor(index)}`}>
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
