import Link from "next/link";
import { assignHoverColor, darkenColor } from "../Data/CardColorLUT";

type LinkButtonProps = {
  clr: string;
  lnk: string;
};

const LinkButton: React.FC<LinkButtonProps> = ({ clr, lnk }) => {
  const baseClr = darkenColor(clr);
  return (
    <Link
      href={lnk}
      className={`underline ${baseClr} ${assignHoverColor(baseClr)} p-2`}
    >
      Github Repo
    </Link>
  );
};

export default LinkButton;
