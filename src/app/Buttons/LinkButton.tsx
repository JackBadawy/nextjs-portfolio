import Link from "next/link";
import { assignHoverColor, darkenColor } from "../Data/CardColorLUT";

type LinkButtonProps = {
  clr: string;
  lnk: string;
  txt: string;
};

const LinkButton: React.FC<LinkButtonProps> = ({ clr, lnk, txt }) => {
  const baseClr = darkenColor(clr);
  return (
    <Link
      href={lnk}
      className={`${baseClr} ${assignHoverColor(
        baseClr
      )} p-2 rounded-md h-10 text-nowrap`}
    >
      {txt}
    </Link>
  );
};

export default LinkButton;
