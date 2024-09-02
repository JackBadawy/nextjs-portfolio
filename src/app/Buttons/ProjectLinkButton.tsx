import Link from "next/link";
import { assignHoverColor } from "../Data/CardColorLUT";

const ProjectLinkButton = (clr) => {
  return (
    <Link
      href={projectInfo.projectRepositoryLink}
      className="underline bg-black p-2"
    >
      Github Repo
    </Link>
  );
};

export default ProjectLinkButton;
