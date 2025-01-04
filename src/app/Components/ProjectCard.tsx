"use client";

import { assignCardColor, assignHoverColor } from "../Data/CardColorLUT";
import { Project } from "../Types/Types";
import Image from "next/image";
import LinkButton from "../Buttons/LinkButton";
import { useState } from "react";

interface ProjectCard extends Project {
  index: number;
}

const ProjectCard: React.FC<ProjectCard> = (props) => {
  const { index, ...projectInfo } = props;

  const baseColorClass = assignCardColor(index);
  const hoverColorClass = assignHoverColor(baseColorClass);

  const [isHovering, setIsHovering] = useState(false);

  return (
    <div
      className={`break-inside-avoid flex flex-col justify-between rounded-md p-4 ${baseColorClass} ${hoverColorClass} text-center shadow-lg transition-all duration-300 mb-4 w-60`}
      onMouseEnter={() => setIsHovering(true)}
      onMouseLeave={() => setIsHovering(false)}
    >
      <div>
        <p className="font-bold text-center mb-4">{projectInfo.projectName}</p>
        {projectInfo.projectImage && (
          <Image
            src={projectInfo.projectImage}
            width="64"
            height="64"
            alt="Picture of a calculator"
            className={`mx-auto fill-current text-blue-500 opacity-60 mb-4`}
          />
        )}
        <p>{projectInfo.projectDescription}</p>
      </div>

      <div className="group mt-4 rounded flex gap-1 justify-center">
        <LinkButton
          clr={baseColorClass}
          lnk={projectInfo.projectRepositoryLink}
          txt="Github Repo"
          cardHvr={isHovering}
        />

        {projectInfo.projectLiveDeployLink && (
          <LinkButton
            clr={baseColorClass}
            lnk={projectInfo.projectLiveDeployLink}
            txt="Live Deploy"
            cardHvr={isHovering}
          />
        )}
      </div>
    </div>
  );
};

export default ProjectCard;
