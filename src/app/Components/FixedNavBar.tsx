import Image from "next/image";
import Link from "next/link";
import NavButton from "../Buttons/NavButton";

const FixedNavBar = () => {
  return (
    <>
      <div className="w-full h-16"></div>
      <nav className="flex justify-between items-center fixed top-0 w-screen bg-slate-200/30 backdrop-blur-sm">
        <div className="p-2 flex items-center gap-10">
          <Image
            src="/img/logo.svg"
            height="48"
            width="236"
            alt="Signature logo"
          />
          <p className="text-slate-800 underline text-xl font-medium">
            Full-Stack Developer
          </p>
        </div>
        <div>
          <ul className="flex gap-2 mr-8">
            <NavButton lnk="#skills" name="Skills" />
            <NavButton lnk="#projects" name="Projects" />
            <NavButton lnk="#aboutMe" name="About Me" />
          </ul>
        </div>
      </nav>
    </>
  );
};

export default FixedNavBar;
