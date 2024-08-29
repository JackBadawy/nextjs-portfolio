export type Project = {
  projectName: string;
  projectDescription: string;
  projectImage?: string;
  projectRepositoryLink: string;
  projectLiveDeployLink?: string;
};

export type Skill = {
  name: string;
  image: string;
  alt: string;
  description: string;
  projects?: string[];
};
