function Home() {
  return (
    <section
      id="home"
      className="min-h-screen flex items-center justify-center relative"
    >
      <div className="text-center z-10 px-4">
        <h1 className="text-5xl md:text-7l font-bold mb-6 bg-gradient-to-r from-yellow-300 to-green-400 text-transparent bg-clip-text ">
          Hi, I am Krishanu Roy
        </h1>
        <p className="text-gray-400 text-lg mb-8 max-w-lg max-auto">
          I'm a frontend developer who loves crafting, designing and building
          clean UIs. My goal is to build solutions that offer both exceptional
          performance and delightful user experience.
        </p>

        <div className="flex justify-center space-x-4">
          <a
            href="#projects"
            className="bg-gradient-to-r from-yellow-400 to-green-400 text-white py-3 px-6 rounded font-bold transition relative overflow-hidden hover:-translate-y-0.5 hover:shadow-[0_0_0-15px_rgba(59,130,246,0.4)]"
          >
            View Projects
          </a>

          <a
            href="#projects"
            className="bg-gradient-to-r from-yellow-400 to-green-400 text-transparent bg-clip-text border-2 border-gray-700 py-3 px-6 rounded font-bold transition-all duration-200   hover:-translate-y-0.5 hover:shadow-[0_0_0-15px_rgba(59,130,246,0.2)]"
          >
            Contact me
          </a>
        </div>
      </div>
    </section>
  );
}

export default Home;
