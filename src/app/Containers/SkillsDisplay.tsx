import SkillCard from "../Components/SkillCard";
import SubHeading from "../Components/Subheading";
import { skillList } from "../Data/SkillList";

const SkillsDisplay = () => {
  return (
    <div
      id="skills"
      className="rounded relative p-1 mt-11 mb-2 mx-2 bg-gradient-to-b from-slate-400 via-slate-300 to-slate-300"
    >
      <div className="relative flex flex-wrap justify-center bg-slate-300 rounded pt-16 pb-8">
        <div className="basis-full absolute -top-[47px] left-12">
          <SubHeading txt="Skills" />
        </div>
        <div className="flex flex-wrap gap-2 justify-center">
          {skillList.map((skill, index) => {
            return <SkillCard key={"sk" + index} {...skill} />;
          })}
        </div>
      </div>
    </div>
  );
};
export default SkillsDisplay;
