import DataImage from "./data";
import { listTools, listProyek } from "./data";

function App() {
  return (
    <>
      <div className="hero grid md:grid-cols-2 items-center pt-10 xl:gap-0 gap-6 grid-cols-1">
        <div className="animate__animated animate__fadeInUp animate__delay-3s">
          <div className="flex items-center gap-3 mb-6 bg-zinc-800 w-fit p-4 rounded-2xl">
            <img
              src={DataImage.HeroImage}
              alt="jode"
              className="w-8 rounded-md"
              loading="lazy"
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
              href="#project"
              className="bg-zinc-700 p-4 rounded-2xl hover:bg-zinc-600"
            >
              My Project <i className="ri-skip-down-line ri-xl"></i>
            </a>
          </div>
        </div>
        <img
          src={DataImage.HeroImage}
          alt="jode"
          className="w-125 md:ml-auto animate__animated animate__fadeInUp animate__delay-4s"
          loading="lazy"
        />
      </div>
      {/* About */}
      <div className="about mt-32 py-10" id="about">
        <div
          className="xl:w-2/3 lg:w-3/4 w-full mx-auto p-7 bg-zinc-800 rounded-lg"
          data-aos="fade-up"
          data-aos-duration="2000"
          data-aos-once="true"
        >
          <img
            src={DataImage.HeroImage}
            alt="Image"
            className="w-12 rounded-md mb-10 sm:hidden"
            loading="lazy"
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
              loading="lazy"
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
        <div className="tools mt-32">
          <h1
            className="text-4xl/snug font-bold mb-4"
            data-aos="fade-up"
            data-aos-duration="1000"
            data-aos-once="true"
          >
            Tools Used
          </h1>
          <p
            className="xl:w-2/5 lg:w-2/4 md:w-2/3 sm:w-3/4 w-full text-base/loose opacity-50"
            data-aos="fade-up"
            data-aos-duration="1000"
            data-aos-delay="300"
            data-aos-once="true"
          >
            Here are the tools I usually use for website development and design.
          </p>
          <div className="tools-box mt-14 grid lg:grid-cols-4 md:grid-cols-3 sm:grid-cols-2 grid-cols-1 gap-4">
            {listTools.map((tool) => (
              <div
                className="flex items-center gap-2 p-3 border border-zinc-600 rounded-md hover:bg-zinc-800 group"
                key={tool.id}
                data-aos="fade-up"
                data-aos-duration="1000"
                data-aos-delay={tool.dad}
                data-aos-once="true"
              >
                <img
                  src={tool.gambar}
                  alt="Tools Image"
                  className="w-14 bg-zinc-800 group-hover:bg-zinc-900"
                />
                <div>
                  <h4 className="font-bold">{tool.nama}</h4>
                  <p className="opacity-50">{tool.ket}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
      {/* About */}

      {/* Project */}
      <div className="proyek mt-32 py-10" id="project">
        <h1
          className="text-center text-4xl font-bold mb-2"
          data-aos="fade-up"
          data-aos-duration="1000"
          data-aos-once="true"
        >
          Project
        </h1>
        <p
          className="text-base/loose text-center opacity-50"
          data-aos="fade-up"
          data-aos-duration="1000"
          data-aos-delay="300"
          data-aos-once="true"
        >
          Here are some project I have done
        </p>
        <div className="proyek-box mt-14 grid lg:grid-cols-3 sm:grid-cols-2 grid-cols-1 gap-4">
          {listProyek.map((proyek) => (
            <div
              key={proyek.id}
              className="p-4 bg-zinc-800 rounded-md"
              data-aos="fade-up"
              data-aos-duration="1000"
              data-aos-delay={proyek.dad}
              data-aos-once="true"
            >
              <img src={proyek.gambar} alt="Proyek Image" loading="lazy" />
              <div>
                <h1 className="text-2xl font-bold my-4">{proyek.nama}</h1>
                <p className="text-base/loose mb-4">{proyek.desk}</p>
                <div className="flex  flex-wrap gap-2">
                  {proyek.tools.map((tool, index) => (
                    <p
                      className="py-1 px-3 border border-zinc-500 bg-zinc-600 rounded-md font-semibold"
                      key={index}
                    >
                      {tool}
                    </p>
                  ))}
                </div>
                <div className="mt-8 text-center">
                  <a
                    href="#"
                    className="bg-blue-700 p-3 rounded-lg block border border-zinc-600 hover:bg-blue-600"
                  >
                    See the Website
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
      {/* Project */}

      {/* contact */}
      <div className="kontak mt-32 sm:p-10 p-0" id="contact">
        <h1
          className="text-4xl mb-2 font-bold text-center"
          data-aos="fade-up"
          data-aos-duration="1000"
          data-aos-once="true"
        >
          Contact
        </h1>
        <p
          className="text-base/loose text-center mb-10 opacity-50"
          data-aos="fade-up"
          data-aos-duration="1000"
          data-aos-delay="300"
          data-aos-once="true"
        >
          Let's Connect
        </p>
        <form
          action="https://formsubmit.co/yonathandewangga321@gmail.com"
          method="POST"
          className="bg-zinc-800 p-10 sm:w-fit w-full mx-auto rounded-md"
          autoComplete="off"
          data-aos="fade-up"
          data-aos-duration="1000"
          data-aos-delay="500"
          data-aos-once="true"
        >
          <div className="flex flex-col gap-6">
            <div className="flex flex-col gap-2">
              <label className="font-semibold">Full Name</label>
              <input
                type="text"
                name="nama"
                placeholder="Input your name..."
                className="border border-zinc-500 p-2 rounded-md"
                required
              />
            </div>
            <div className="flex flex-col gap-2">
              <label className="font-semibold">Email</label>
              <input
                type="email"
                name="email"
                placeholder="Input your email..."
                className="border border-zinc-500 p-2 rounded-md"
                required
              />
            </div>
            <div className="flex flex-col gap-2">
              <label htmlFor="pesan" className="font-semibold">
                Message
              </label>
              <textarea
                name="pesan"
                id="pesan"
                cols="45"
                rows="7"
                placeholder="Message..."
                className="border border-zinc-500 p-2 rounded-md"
                required
              ></textarea>
            </div>
            <div className="text-center">
              <button
                type="submit"
                className="bg-blue-700 p-3 rounded-lg w-full cursor-pointer border border-zinc-600 hover:bg-blue-600"
              >
                Send a message
              </button>
            </div>
          </div>
        </form>
      </div>

      {/* contact */}
    </>
  );
}

export default App;
