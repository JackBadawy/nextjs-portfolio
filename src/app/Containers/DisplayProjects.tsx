import ProjectCard from "../Components/ProjectCard";
import { projectList } from "../Data/ProjectList";

const DisplayProjects = (identifyer: string) => {
  //will have identifyer be passed into component to show specific projects map projects
  return (
    <div className="flex flex-wrap justify-center w-3/4">
      <div className="basis-full">
        <h2 className="text-3xl py-6">Projects:</h2>
      </div>
      <div className="flex flex-wrap gap-2 w-3/4">
        {projectList.map((project, index) => {
          return <ProjectCard key={index} {...project} index={index} />;
        })}
      </div>
    </div>
  );
};

export default DisplayProjects;
