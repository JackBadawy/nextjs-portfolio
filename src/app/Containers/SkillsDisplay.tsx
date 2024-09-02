import SkillCard from "../Components/SkillCard";
import { skillList } from "../Data/SkillList";

const SkillsDisplay = () => {
  return (
    <div
      id="skills"
      className="flex flex-wrap justify-center bg-slate-300 rounded pb-8 mb-8 mt-1 mx-2"
    >
      <div className="basis-full ">
        <h2 className="text-3xl py-6 ml-6 text-slate-800 font-extrabold">
          Skills:
        </h2>
      </div>
      <div className="flex flex-wrap gap-2 justify-center">
        {skillList.map((skill, index) => {
          return <SkillCard key={"sk" + index} {...skill} />;
        })}
      </div>
    </div>
  );
};

export default SkillsDisplay;
