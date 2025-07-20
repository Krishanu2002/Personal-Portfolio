function Skills() {
  const programming = ["Python", "JavaSript", "Java", "HTML", "CSS", "MySQL"];

  const technologies = [
    "ReactJS",
    "Redux",
    "Tailwind CSS",
    "Bootstrap",
    "NPM",
    "PostGre SQL",
  ];

  const tools = ["VS Code", "Git", "Github"];

  const softSkills = [
    "Communication",
    "Teamwork",
    "Leadership",
    "Time Management",
  ];

  return (
    <section
      id="skills"
      className="min-h-screen flex items-center justify-center py-20"
    >
      <div className=" w-full max-w-3xl mx-auto px-4 mt-6">
        <div className="flex items-center justify-center mb-0 pb-0 h-[50px]">
          <h2 className="text-3xl py-2 font-bold mb-6 bg-gradient-to-r from-yellow-400 to-green-400 text-transparent bg-clip-text">
            Skills
          </h2>
        </div>

        <div className="rounded-xl p-8  border border-white/10 ">
          <p className="text-gray-400 mb-6">
            I am a Passionate developer with expertise in building scalable web
            applications and creating innovative solutions.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="rounded-xl p-6 ">
              <h3 className="text-xl font-bold mb-4 text-green-500 hover:text-green-600 cursor-pointer">
                Programming
              </h3>
              <div className="flex flex-wrap gap-3">
                {programming.map((item, key) => (
                  <span
                    key={key}
                    className="bg-gray-600 text-yellow-400  py-1.5 px-3 rounded-full text-sm border-gray-400 hover:bg-gray-700 cursor-pointer hover:-translate-y-0.5"
                  >
                    {item}
                  </span>
                ))}
              </div>
            </div>

            <div className="rounded-xl p-6 ">
              <h3 className="text-xl font-bold mb-4 text-green-500 hover:text-green-600 cursor-pointer">
                Technologies
              </h3>
              <div className="flex flex-wrap gap-3">
                {technologies.map((item, key) => (
                  <span
                    key={key}
                    className="bg-gray-600 text-yellow-400  py-1.5 px-3 rounded-full text-sm border-gray-400 hover:bg-gray-700 cursor-pointer hover:-translate-y-0.5"
                  >
                    {item}
                  </span>
                ))}
              </div>
            </div>

            <div className="rounded-xl p-6 ">
              <h3 className="text-xl font-bold mb-4 text-green-500 hover:text-green-600 cursor-pointer">
                Soft Skills
              </h3>
              <div className="flex flex-wrap gap-3">
                {softSkills.map((item, key) => (
                  <span
                    key={key}
                    className="bg-gray-600 text-yellow-400  py-1.5 px-3 rounded-full text-sm border-gray-400 hover:bg-gray-700 cursor-pointer hover:-translate-y-0.5"
                  >
                    {item}
                  </span>
                ))}
              </div>
            </div>

            <div className="rounded-xl p-6 ">
              <h3 className="text-xl font-bold mb-4 text-green-500 hover:text-green-600 cursor-pointer">
                Tools
              </h3>
              <div className="flex flex-wrap gap-3">
                {tools.map((item, key) => (
                  <span
                    key={key}
                    className="bg-gray-600 text-yellow-400  py-1.5 px-3 rounded-full text-sm border-gray-400 hover:bg-gray-700 cursor-pointer hover:-translate-y-0.5"
                  >
                    {item}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>
        <div></div>
      </div>
    </section>
  );
}

export default Skills;
