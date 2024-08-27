import Link from "next/link";
import React from "react";

const ProjectLinkButton = () => {
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
