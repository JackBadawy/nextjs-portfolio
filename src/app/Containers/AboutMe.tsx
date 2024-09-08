const AboutMe = () => {
  return (
    <div
      id="skills"
      className="flex flex-wrap justify-center bg-slate-300 rounded pb-8 mb-8 mt-1 mx-2"
    >
      <div className="basis-full ">
        <h2 className="text-3xl py-6 ml-6 text-slate-800 font-extrabold">
          About Me:
        </h2>
        <p>
          I'm Jack. A Junior full stack developer based in Melbourne, Australia.
          Programming is my passion and I enjoy all thing Tech. Asides from
          Programming my greatest joys come from reading a good book and
          spending time in my garden.
        </p>
        <p>image</p>
        <div>
          <p>Contact Me</p>
          <p>Email: jackbadawy1999@gmail.com</p>
          <p>LinkedIn: @Jack-Badawy</p>
          <p>GitHub: @JackBadawy</p>
        </div>
      </div>
      <div className="flex flex-wrap gap-2 justify-center"></div>
    </div>
  );
};

export default AboutMe;
