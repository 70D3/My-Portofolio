import DataImage from "./data";

function App() {
  return (
    <>
      <div className="hero grid md:grid-cols-2 items-center pt-10 xl:gap-0 gap-6 grid-cols-1">
        <div>
          <div className="flex items-center gap-3 mb-6 bg-zinc-800 w-fit p-4 rounded-2xl">
            <img
              src={DataImage.HeroImage}
              alt="Hero Image"
              className="w-10 rounded-md"
            />
            <q>Believe you can and you're halfway there!</q>
          </div>
          <h1 className="text-5xl/tight font-bold mb-6">
            Hi, I'm Yonathan Dewangga
          </h1>
          <p className="text-base/loose mb-6 opacity-50">
            I am an active fourth-semester student focusing on programming and
            web design. My interests include UI/UX design, website development,
            and web-based and mobile applications. I believe that good
            technology is not only about code that works, but also about
            intuitive user experiences and solutions that truly meet user needs.
          </p>
          <div className="flex items-center sm:gap-4 gap-2">
            <a
              href="#"
              className="bg-blue-700 p-4 rounded-2xl hover:bg-blue-600"
            >
              Download CV <i className="ri-download-2-line ri-lg"></i>
            </a>
            <a
              href=""
              className="bg-zinc-700 p-4 rounded-2xl hover:bg-zinc-600"
            >
              My Project <i className="ri-skip-down-line ri-xl"></i>
            </a>
          </div>
        </div>
        <img
          src={DataImage.HeroImage}
          alt="Hero Image"
          className="w-[500px] md:ml-auto"
        />
      </div>
      {/* About */}
      <div className="about mt-32 py-10">
        <div className="xl:w-2/3 lg:w-3/4 w-full mx-auto p-7 bg-zinc-800 rounded-lg">
          <img
            src={DataImage.HeroImage}
            alt="Image"
            className="w-12 rounded-md mb-10 sm:hidden"
          />
          <p className="text-base/loose mb-10">
            I am an active fourth-semester student with a keen interest in
            programming and web design. From the outset, I have been fascinated
            by how technology can be used to build digital solutions that not
            only function well but also provide a comfortable user experience.
            <br></br>
            My primary focus is on UI/UX design, website development, and the
            creation of web-based and mobile applications. I enjoy the process
            of designing the appearance, arranging the user flow, and
            implementing it into a functional and efficient system.<br></br>
            For me, technology is not just a string of code, but a tool for
            solving real problems. Therefore, I always try to combine strong
            logic with intuitive design so that every product created has clear
            value and purpose.<br></br>
            Currently, I continue to develop my skills through self-learning,
            exploring new technologies, and working on various projects as a
            form of practice and skill enhancement. I believe that a consistent
            learning process is the key to growing in the ever-evolving world of
            technology.<br></br>
            In the future, I want to continue to deepen my expertise in web and
            application development, as well as contribute to creating impactful
            and sustainable digital products.<br></br>
          </p>
          <div className="flex items-center justify-between">
            <img
              src={DataImage.HeroImage}
              alt="Image"
              className="w-12 rounded-md sm:block hidden"
            />
            <div className="flex items-center gap-6">
              <div>
                <h1 className="text-4xl mb-1">
                  15<span className="text-blue-500">+</span>
                </h1>
                <p>Finished Project</p>
              </div>
              <div>
                <h1 className="text-4xl mb-1">
                  4<span className="text-blue-500">+</span>
                </h1>
                <p>Years of Experience</p>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* About */}
    </>
  );
}

export default App;
