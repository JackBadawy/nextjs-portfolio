import DisplayProjects from "./Containers/DisplayProjects";
import SkillsDisplay from "./Containers/SkillsDisplay";

export default function Home() {
  return (
    <div>
      <div className="flex flex-col justify-center mx-auto bg-slate-200 min-h-screen">
        <SkillsDisplay />
        <DisplayProjects identifyer="" />
      </div>
    </div>
  );
}
