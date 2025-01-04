import { Fascinate_Inline } from "next/font/google";
type SubHeadingProps = {
  txt: string;
};
const fascinateInline = Fascinate_Inline({
  subsets: ["latin"],
  weight: ["400"],
});

const SubHeading: React.FC<SubHeadingProps> = ({ txt }) => {
  return (
    <div className="flex z-10">
      <span className="flex border-[4px] border-slate-500 rounded-full p-[2px] bg-slate-300 z-10">
        <span className="flex border-[4px] border-slate-500 rounded-full p-[2px]">
          <span className="flex border-[4px] border-slate-500 rounded-full p-[2px]">
            <h2
              className={
                fascinateInline.className +
                " bg-slate-300 px-3 text-4xl font-extrabold text-slate-800 border-[5px] border-slate-500 rounded-full"
              }
            >
              {txt}
            </h2>
          </span>
        </span>
      </span>
    </div>
  );
};
export default SubHeading;
