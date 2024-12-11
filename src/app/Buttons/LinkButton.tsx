import Link from "next/link";
import { assignHoverColor, darkenColor } from "../Data/CardColorLUT";

type LinkButtonProps = {
  clr: string;
  lnk: string;
  txt: string;
  cardHvr: boolean;
};

const LinkButton: React.FC<LinkButtonProps> = ({ clr, lnk, txt, cardHvr }) => {
  const baseClr = darkenColor(clr);
  const cardHvrClr = darkenColor(baseClr);

  return (
    <Link
      href={lnk}
      target="_blank"
      className={`${cardHvr ? cardHvrClr : baseClr} ${assignHoverColor(cardHvrClr)} p-2 rounded-md h-10 text-nowrap transition-colors duration-300`}
    >
      {txt}
    </Link>
  );
};

export default LinkButton;
