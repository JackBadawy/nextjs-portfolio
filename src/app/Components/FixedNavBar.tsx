import Image from "next/image";
import Link from "next/link";
import NavButton from "../Buttons/NavButton";

const FixedNavBar = () => {
  return (
    <>
      <div className="w-full h-16"></div>
      <div className="fixed top-0 w-screen h-16 bg-slate-200 opacity-70"></div>
      <nav className="flex justify-between items-center fixed top-0 w-screen">
        <div className="p-2">
          <Image
            src="/img/logo.svg"
            height="48"
            width="236"
            alt="Signature logo"
          />
        </div>
        <div className="text-black">
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
