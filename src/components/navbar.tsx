import { Github, Linkedin } from "lucide-react";

export const NavBar = () => {
  return (
    <header className="w-full py-4 px-6 shadow-md bg-white">
      <nav className="max-w-6xl mx-auto flex justify-between items-center">
        {/* Main Nav Links */}
        <ul className="flex gap-6 text-gray-800 font-medium list-none">
            <li>
                <a
                href="#home"
                className="hover:text-blue-600 transition-colors cursor-pointer"
                >
                Home
                </a>
            </li>
            <li>
                <a
                href="#about"
                className="hover:text-blue-600 transition-colors cursor-pointer"
                >
                About
                </a>
            </li>
            <li>
                <a
                href="#experience"
                className="hover:text-blue-600 transition-colors cursor-pointer"
                >
                Experience
                </a>
            </li>
            <li>
                <a
                href="#projects"
                className="hover:text-blue-600 transition-colors cursor-pointer"
                >
                Projects
                </a>
            </li>
        </ul>


        {/* Social Icons */}
        <ul className="flex gap-4">
          <li>
            <a
              href="https://github.com/kohkikita"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="GitHub"
              title="GitHub"
              className="text-gray-600 hover:text-black transition-colors"
            >
              <Github className="w-5 h-5" />
            </a>
          </li>
          <li>
            <a
              href="https://www.linkedin.com/in/kohki-kita/"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="LinkedIn"
              title="LinkedIn"
              className="text-gray-600 hover:text-blue-700 transition-colors"
            >
              <Linkedin className="w-5 h-5" />
            </a>
          </li>
        </ul>
      </nav>
    </header>
  );
};
