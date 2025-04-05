import profileImg from "../assets/profile.png";
import {
  FaReact,
  FaCss3Alt,
  FaHtml5,
  FaPython,
  FaJs,
  FaDatabase,
  FaCode,
} from "react-icons/fa";
import { SiTailwindcss, SiCplusplus } from "react-icons/si";

function Home() {
  const skills = [
    { icon: <FaHtml5 />, name: "HTML" },
    { icon: <FaCss3Alt />, name: "CSS" },
    { icon: <FaJs />, name: "JavaScript" },
    { icon: <SiTailwindcss />, name: "Tailwind CSS" },
    { icon: <FaReact />, name: "React" },
    { icon: <FaPython />, name: "Python" },
    { icon: <SiCplusplus />, name: "C++" },
    { icon: <FaDatabase />, name: "SQL" },
    { icon: <FaCode />, name: "DSA" },
  ];

  return (
    <section className="pt-20 px-4 bg-gradient-to-br from-purple-600 via-indigo-700 to-cyan-500 dark:from-gray-900 dark:via-gray-800 dark:to-black text-white transition-colors duration-500">
      
      {/* 🏠 Hero Section */}
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center text-center md:text-left bg-white/10 backdrop-blur-md border border-white/20 rounded-xl p-10 shadow-lg">
        <div className="md:w-1/2 space-y-6">
          <h1 className="text-4xl sm:text-5xl font-bold">Hey, I'm Aryan 👋</h1>
          <p className="text-lg max-w-xl">
            I'm a Computer Science student and a full-stack developer passionate about creating modern, responsive, and user-friendly websites using React, Tailwind, and more.
          </p>
          <a
            href="/projects"
            className="inline-block bg-white text-blue-700 font-semibold px-6 py-3 rounded shadow hover:bg-gray-100 transition"
          >
            See My Projects
          </a>
        </div>

        {/* 👤 Profile Image */}
        <div className="md:w-1/2 mt-10 md:mt-0">
          <img
            src={profileImg}
            alt="Aryan Profile"
            className="w-64 h-64 rounded-full shadow-xl mx-auto object-cover border-4 border-white/30"
          />
        </div>
      </div>

      {/* 👨‍💻 About Section */}
      <div className="text-center mt-24 px-4">
        <div className="max-w-4xl mx-auto bg-white/10 backdrop-blur-md border border-white/20 rounded-xl p-10 shadow-lg">
          <h2 className="text-4xl font-bold mb-6">About Me</h2>
          <p className="text-lg leading-relaxed">
            I'm a B.Tech Computer Science student deeply interested in frontend development and problem-solving.
            From crafting responsive designs to integrating APIs and optimizing performance, I love the full development cycle.
          </p>
          <p className="text-lg mt-4">
            My journey started with basic HTML/CSS and quickly grew into using React, Tailwind, Python, C++, and more to build real-world projects.
          </p>
        </div>
      </div>

      {/* 🛠️ Skills Section */}
      <div className="text-center mt-24 px-4">
        <h2 className="text-4xl font-bold mb-10">My Tech Stack</h2>
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-6 max-w-4xl mx-auto">
          {skills.map((skill, index) => (
            <div
              key={index}
              className="bg-white/10 backdrop-blur-md border border-white/20 rounded-lg shadow-xl p-6 flex flex-col items-center justify-center hover:bg-white hover:text-black transform transition duration-300 group"
            >
              <div className="text-4xl text-white mb-2 group-hover:text-black transition duration-300">
                {skill.icon}
              </div>
              <p className="text-lg font-semibold">{skill.name}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Home;
