import ProjectCard from "../Components/ProjectCard";
import SubHeading from "../Components/Subheading";
import { projectList } from "../Data/ProjectList";

const DisplayProjects = () => {
  return (
    <div
      id="projects"
      className="rounded relative p-1 mt-16 mb-2 mx-2 bg-gradient-to-b from-slate-400 via-slate-300 to-slate-300"
    >
      <div className="relative flex flex-wrap justify-center bg-slate-300 rounded pt-16 pb-8">
        <div className="basis-full absolute -top-[47px] left-12">
          <SubHeading txt="Projects" />
        </div>
        <div className="flex flex-wrap gap-2 px-4 sm:px-6 md:px-8  ">
          {projectList.map((project, index) => (
            <ProjectCard key={index} {...project} index={index} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default DisplayProjects;
