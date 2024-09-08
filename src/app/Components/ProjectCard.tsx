"use client";

import Link from "next/link";
import { assignCardColor, assignHoverColor } from "../Data/CardColorLUT";
import { Project } from "../Types/Types";
import Image from "next/image";
import LinkButton from "../Buttons/LinkButton";

interface ProjectCard extends Project {
  index: number;
}

const ProjectCard: React.FC<ProjectCard> = (props) => {
  const { index, ...projectInfo } = props;

  const baseColorClass = assignCardColor(index);
  const hoverColorClass = assignHoverColor(baseColorClass);

  return (
    <div
      className={`w-52 rounded-md px-4 ${baseColorClass} ${hoverColorClass} text-center shadow-lg`}
    >
      <p className="font-bold text-center mt-4">{projectInfo.projectName}</p>
      {projectInfo.projectImage && (
        <Image
          src={projectInfo.projectImage}
          width="64"
          height="64"
          alt="Picture of a calculator"
          className={`mx-auto fill-current text-blue-500 opacity-60`}
        />
      )}
      <p>{projectInfo.projectDescription}</p>

      <div className="my-4 rounded flex gap-1 justify-center">
        {/* <Link
          href={projectInfo.projectRepositoryLink}
          className="underline bg-black p-2"
        >
          Github Repo
        </Link> */}
        <LinkButton
          clr={baseColorClass}
          lnk={projectInfo.projectRepositoryLink}
          txt="Github Repo"
        />

        {projectInfo.projectLiveDeployLink && (
          <LinkButton
            clr={baseColorClass}
            lnk={projectInfo.projectLiveDeployLink}
            txt="Live Deploy"
          />
        )}
      </div>
    </div>
  );
};

export default ProjectCard;
