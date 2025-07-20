function Projects() {
  return (
    <section id="projects" className="min-h-screen flex justify-center py-20">
      <div className="max-w-5xl mx-auto px-4">
        <div className="flex items-center justify-center">
          <h2 className="text-3xl py-2 font-bold mb-6 bg-gradient-to-r from-yellow-400 to-green-400 text-transparent bg-clip-text">
            Featured Projects
          </h2>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="p-6 rounded-xl border border-white/10">
            <h3 className="text-xl font-bond mb-2 text-green-400 font-bold">
              Food Delivery Website
            </h3>
            <p className="text-gray-500 mb-4">
              Food delivery website with features of adding and deleting from
              cart, sorting food-items, selecting multiple items and ordering
              them.
            </p>
            <div>
              {[
                "ReactJs",
                "Redux",
                "TailwindCSS",
                "React-icon",
                "Toastify",
              ].map((item, key) => (
                <span
                  key={key}
                  className="bg-lime-500 text-black  py-1.5 px-2 m-1 rounded-full text-sm font-medium border-red-400 hover:bg-lime-600 cursor-pointer"
                >
                  {item}
                </span>
              ))}
            </div>
            <div className="flex justify-between items-center mt-5">
              <a
                href="https://food-delivery-project-ecru.vercel.app/"
                target="_main"
                className="text-amber-300 italic hover:text-amber-600"
              >
                View Project Live
              </a>
              <a
                href="https://github.com/Krishanu2002/Food-Delivery-Project"
                target="_main"
                className="text-amber-300 hover:text-amber-600"
              >
                Github
              </a>
            </div>
          </div>

          <div className="p-6 rounded-xl border border-white/10">
            <h3 className="text-xl font-bond mb-2 text-green-400 font-bold">
              Food Delivery Website
            </h3>
            <p className="text-gray-500 mb-4">
              Food delivery website with features of adding and deleting from
              cart, sorting food-items, selecting multiple items and ordering
              them.
            </p>
            <div>
              {[
                "ReactJs",
                "Redux",
                "TailwindCSS",
                "React-icon",
                "Toastify",
              ].map((item, key) => (
                <span
                  key={key}
                  className="bg-lime-500 text-black  py-1.5 px-2 m-1 rounded-full text-sm font-medium border-red-400 hover:bg-lime-600 cursor-pointer"
                >
                  {item}
                </span>
              ))}
            </div>
            <div className="flex justify-between items-center mt-5">
              <a
                href="https://food-delivery-project-ecru.vercel.app/"
                target="_main"
                className="text-amber-300 italic hover:text-amber-600"
              >
                View Project Live
              </a>
              <a
                href="https://github.com/Krishanu2002/Food-Delivery-Project"
                target="_main"
                className="text-amber-300 hover:text-amber-600"
              >
                Github
              </a>
            </div>
          </div>

          <div className="p-6 rounded-xl border border-white/10">
            <h3 className="text-xl font-bond mb-2 text-green-400 font-bold">
              Food Delivery Website
            </h3>
            <p className="text-gray-500 mb-4">
              Food delivery website with features of adding and deleting from
              cart, sorting food-items, selecting multiple items and ordering
              them.
            </p>
            <div>
              {[
                "ReactJs",
                "Redux",
                "TailwindCSS",
                "React-icon",
                "Toastify",
              ].map((item, key) => (
                <span
                  key={key}
                  className="bg-lime-500 text-black  py-1.5 px-2 m-1 rounded-full text-sm font-medium border-red-400 hover:bg-lime-600 cursor-pointer"
                >
                  {item}
                </span>
              ))}
            </div>
            <div className="flex justify-between items-center mt-5">
              <a
                href="https://food-delivery-project-ecru.vercel.app/"
                target="_main"
                className="text-amber-300 italic hover:text-amber-600"
              >
                View Project Live
              </a>
              <a
                href="https://github.com/Krishanu2002/Food-Delivery-Project"
                target="_main"
                className="text-amber-300 hover:text-amber-600"
              >
                Github
              </a>
            </div>
          </div>

          <div className="p-6 rounded-xl border border-white/10">
            <h3 className="text-xl font-bond mb-2 text-green-400 font-bold">
              Food Delivery Website
            </h3>
            <p className="text-gray-500 mb-4">
              Food delivery website with features of adding and deleting from
              cart, sorting food-items, selecting multiple items and ordering
              them.
            </p>
            <div>
              {[
                "ReactJs",
                "Redux",
                "TailwindCSS",
                "React-icon",
                "Toastify",
              ].map((item, key) => (
                <span
                  key={key}
                  className="bg-lime-500 text-black  py-1.5 px-2 m-1 rounded-full text-sm font-medium border-red-400 hover:bg-lime-600 cursor-pointer"
                >
                  {item}
                </span>
              ))}
            </div>
            <div className="flex justify-between items-center mt-5">
              <a
                href="https://food-delivery-project-ecru.vercel.app/"
                target="_main"
                className="text-amber-300 italic hover:text-amber-600"
              >
                View Project Live
              </a>
              <a
                href="https://github.com/Krishanu2002/Food-Delivery-Project"
                target="_main"
                className="text-amber-300 hover:text-amber-600"
              >
                Github
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Projects;
