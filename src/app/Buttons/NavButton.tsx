import Link from "next/link";

type NavButtonProps = {
  name: string;
  lnk: string;
};

const NavButton: React.FC<NavButtonProps> = ({ name, lnk }) => {
  return (
    <li>
      <Link
        className="bg-slate-500 hover:bg-slate-600 p-2 rounded text-slate-200 transition-all duration-200"
        href={lnk}
      >
        {name}
      </Link>
    </li>
  );
};

export default NavButton;
