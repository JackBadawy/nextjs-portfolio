import Link from "next/link";

type NavButtonProps = {
  name: string;
  lnk: string;
};

const NavButton: React.FC<NavButtonProps> = ({ name, lnk }) => {
  return (
    <li className="bg-slate-500 hover:brightness-50 p-1 rounded text-slate-100">
      <Link href={lnk}>{name}</Link>
    </li>
  );
};

export default NavButton;
