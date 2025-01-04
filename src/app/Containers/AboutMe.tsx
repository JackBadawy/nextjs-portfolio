import Image from "next/image";
import Link from "next/link";
import SubHeading from "../Components/Subheading";
const AboutMe = () => {
  return (
    <div
      id="aboutMe"
      className="rounded relative p-1 mt-16 mb-2 mx-2 bg-gradient-to-b from-slate-400 via-slate-300 to-slate-300"
    >
      <div className="basis-full text-slate-800 relative flex flex-wrap justify-center bg-slate-300 rounded pt-16 pb-8">
        <div className="basis-full absolute -top-[47px] left-12">
          <SubHeading txt="About Me" />
        </div>
        <div className="flex flex-wrap justify-center gap-24 items-center">
          <div className="w-72">
            <h3 className="font-extrabold underline">Who I am</h3>
            <p>
              I&apos;m Jack. A full stack developer based in Melbourne,
              Australia. Programming is my passion and I enjoy all thing Tech.
              Asides from Programming my greatest joys come from reading a good
              book and spending time in my garden.
            </p>
          </div>
          <Image
            src="/img/photo.jpg"
            alt="Photo of me"
            width="240"
            height="240"
            className="rounded-full"
          />
          <div className="w-72">
            <h3 className="font-extrabold underline">Contact Me</h3>
            <p>Email: jackbadawy1999@gmail.com</p>
            <p>
              LinkedIn:{" "}
              <Link
                href="https://www.linkedin.com/in/jack-badawy-997a30191"
                className="underline"
              >
                @Jack-Badawy
              </Link>
            </p>
            <p>
              GitHub:{" "}
              <Link href="https://github.com/JackBadawy" className="underline">
                @JackBadawy
              </Link>
            </p>
          </div>
        </div>
      </div>
      <div className="flex flex-wrap gap-2 justify-center"></div>
    </div>
  );
};

export default AboutMe;
