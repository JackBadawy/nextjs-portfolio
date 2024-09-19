import ProjectCard from "../Components/ProjectCard";
import { projectList } from "../Data/ProjectList";

const DisplayProjects = (identifyer: string) => {
  return (
    <div id="projects" className="bg-slate-300 rounded pb-8 mx-2">
      <h2 className="text-3xl py-6 ml-6 text-slate-800 font-extrabold">
        Projects:
      </h2>
      <div className="columns-1 sm:columns-2 md:columns-3 lg:columns-4 xl:columns-5 2xl:columns-6 gap-4 px-4 sm:px-6 md:px-8 space-y-4 ">
        {projectList.map((project, index) => (
          <ProjectCard key={index} {...project} index={index} />
        ))}
      </div>
    </div>
  );
};

export default DisplayProjects;
