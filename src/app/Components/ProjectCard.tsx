"use client";

import Link from "next/link";
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
      <div className="my-4 rounded">
        <Link
          href={projectInfo.projectRepositoryLink}
          className="underline bg-black p-2"
        >
          Github Repo
        </Link>
      </div>
      {projectInfo.projectLiveDeployLink && (
        <p>{projectInfo.projectLiveDeployLink}</p>
      )}
    </div>
  );
};

export default ProjectCard;
