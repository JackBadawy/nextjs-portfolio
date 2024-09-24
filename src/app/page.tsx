import FixedNavBar from "./Components/FixedNavBar";
import AboutMe from "./Containers/AboutMe";
import DisplayProjects from "./Containers/DisplayProjects";
import SkillsDisplay from "./Containers/SkillsDisplay";

export default function Home() {
  return (
    <div>
      <div className="flex flex-col justify-center mx-auto bg-slate-200 min-h-screen">
        <FixedNavBar />
        <SkillsDisplay />
        <DisplayProjects />
        <AboutMe />
      </div>
    </div>
  );
}
