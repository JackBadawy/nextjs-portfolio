import Image from "next/image";
import Link from "next/link";
const AboutMe = () => {
  return (
    <div
      id="aboutMe"
      className="flex flex-wrap justify-center bg-slate-300 rounded pb-8 mb-8 mt-1 mx-2 px-8"
    >
      <div className="basis-full text-slate-800">
        <h2 className="text-3xl py-6  font-extrabold">About Me:</h2>
        <div className="flex flex-wrap justify-center gap-24 items-center">
          <div className="w-72">
            <h3 className="font-extrabold underline">Who I am</h3>
            <p>
              I&apos;m Jack. A Junior full stack developer based in Melbourne,
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
