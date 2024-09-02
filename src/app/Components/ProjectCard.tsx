"use client";

import Link from "next/link";
import { assignCardColor, assignHoverColor } from "../Data/CardColorLUT";
import { Project } from "../Types/Types";
import Image from "next/image";

interface ProjectCard extends Project {
  index: number;
}

const ProjectCard: React.FC<ProjectCard> = (props) => {
  const { index, ...projectInfo } = props;

  const baseColorClass = assignCardColor(index);
  const hoverColorClass = assignHoverColor(baseColorClass);

  return (
    <div
      className={`w-64 border rounded px-4 ${baseColorClass} ${hoverColorClass}`}
    >
      <p className="font-bold text-center mt-4">{projectInfo.projectName}</p>
      <p>{projectInfo.projectDescription}</p>
      <p>{projectInfo.projectImage}</p>
      {projectInfo.projectImage && (
        <Image
          src={projectInfo.projectImage}
          width="64"
          height="64"
          alt="Pictue of a calculator"
        />
      )}

      <div className="my-4 rounded">
        <Link
          href={projectInfo.projectRepositoryLink}
          className="underline bg-black p-2"
        >
          Github Repo
        </Link>
      </div>
      {projectInfo.projectLiveDeployLink && (
        <div className="my-4">
          <Link
            href={projectInfo.projectLiveDeployLink}
            className="underline bg-black p-2"
          >
            Live Deploy
          </Link>
        </div>
      )}
    </div>
  );
};

export default ProjectCard;
