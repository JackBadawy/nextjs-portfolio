import Image from "next/image";
import Link from "next/link";

const FixedNavBar = () => {
  //might need nav standin for space
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
          <ul className="flex gap-2 px-2">
            <li className="bg-gray-500">
              <Link href={"#skills"}>Skills</Link>
            </li>
            <li className="bg-gray-500">
              <Link href={"#projects"}>Projects</Link>
            </li>
          </ul>
        </div>
      </nav>
    </>
  );
};

export default FixedNavBar;
