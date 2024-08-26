import SkillCard from "../Components/SkillCard";
import { skillList } from "../Data/SkillList";

const SkillsDisplay = () => {
  return (
    <div className="flex flex-wrap justify-center">
      <div className="basis-full">
        <h2 className="text-3xl py-6 ml-6">Skills:</h2>
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
