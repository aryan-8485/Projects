import { motion } from "framer-motion";

const skills = [
  { name: "HTML", icon: "/assets/skills/html.svg" },
  { name: "CSS", icon: "/assets/skills/css.svg" },
  { name: "JavaScript", icon: "/assets/skills/javascript.svg" },
  { name: "React", icon: "/assets/skills/react.svg" },
  { name: "Tailwind CSS", icon: "/assets/skills/tailwind.svg" },
  { name: "Python", icon: "/assets/skills/python.svg" },
  { name: "C++", icon: "/assets/skills/cpp.svg" },
  { name: "SQL", icon: "/assets/skills/sql.svg" },
];

const Skills = () => {
  return (
    <section className="min-h-screen pt-24 px-6 bg-gray-50 dark:bg-gray-900 transition-colors">
      <div className="max-w-6xl mx-auto text-center">
        <h2 className="text-4xl font-bold text-gray-800 dark:text-white mb-4">My Skills</h2>
        <p className="text-gray-600 dark:text-gray-300 mb-12 max-w-xl mx-auto">
          These are the core technologies I work with regularly.
        </p>

        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-8">
          {skills.map((skill, index) => (
            <motion.div
              key={index}
              className="flex flex-col items-center justify-center bg-white dark:bg-gray-800 rounded-lg p-4 shadow-md hover:shadow-xl transition-all"
              whileHover={{ scale: 1.05 }}
            >
              <img src={skill.icon} alt={skill.name} className="w-12 h-12 mb-2" />
              <p className="text-gray-700 dark:text-gray-200 font-medium">{skill.name}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
