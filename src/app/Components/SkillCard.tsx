import { Skill } from "../Types/Types";
import Image from "next/image";

const SkillCard: React.FC<Skill> = (props) => {
  const { ...skill } = props;

  return (
    <div className="w-32  rounded bg-slate-400 hover:bg-slate-500 p-4 flex flex-col items-center text-slate-900 shadow-lg transition-all duration-300">
      <p className="font-bold text-center">{skill.name}</p>
      <Image
        src={skill.image}
        alt={skill.alt}
        width="64"
        height="64"
        className="my-auto"
      />
      {/* <p className="text-center">{skill.description}</p> */}
    </div>
  );
};

export default SkillCard;
