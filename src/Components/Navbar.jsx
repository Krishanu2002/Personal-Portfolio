import { useEffect } from "react";

function Navbar({ menuOpen, setMenuOpen }) {
  useEffect(() => {
    document.body.style.overflow = menuOpen ? "hidden" : "";
  }, [menuOpen]);

  return (
    <nav className="top-0 fixed w-full z-40 bg-[rgba(10,14,28,0.84)] backdrop-blur-lg border-b border-white/10 shadow-lg">
      <div className="max-w-5xl mx-auto px-4">
        <div className="flex justify-between items-center h-16">
          <a
            href="#home"
            className="font-sans text-xl font-medium bg-gradient-to-r from-yellow-300 to-green-400 text-transparent bg-clip-text"
          >
            KRISHANU ROY
          </a>
          <div
            className="w-7 h-5 relative cursor-pointer z-40 md:hidden"
            onClick={() => setMenuOpen(true)}
          >
            &#9776;
          </div>

          <div className="hidden md:flex items-center space-x-8">
            <a
              href="#home"
              className="text-gray-300 hover:text-white transition-colors"
            >
              Home
            </a>

            <a
              href="#education"
              className="text-gray-300 hover:text-white transition-colors"
            >
              Education
            </a>

            <a
              href="#skills"
              className="text-gray-300 hover:text-white transition-colors"
            >
              Skills
            </a>

            <a
              href="#projects"
              className="text-gray-300 hover:text-white transition-colors"
            >
              Projects
            </a>

            <a
              href="#contacts"
              className="text-gray-300 hover:text-white transition-colors"
            >
              Contacts
            </a>
          </div>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
