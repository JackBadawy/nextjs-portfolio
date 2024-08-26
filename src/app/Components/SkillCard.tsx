import { Skill } from "../Types/Types";
import Image from "next/image";

const SkillCard: React.FC<Skill> = (props) => {
  const { ...skill } = props;

  return (
    <div className="w-32 border rounded p-4 flex flex-col items-center">
      <p className="font-bold text-center">{skill.name}</p>
      <Image src={skill.image} alt={skill.alt} width="64" height="64" />
      {/* <p className="text-center">{skill.description}</p> */}
    </div>
  );
};

export default SkillCard;
