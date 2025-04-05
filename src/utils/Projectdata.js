import project1 from "../assets/projject/weather.png";
import project2 from "../assets/projject/pokepedia.png"; 
import project3 from "../assets/projject/portfolio_image.png";
import project4 from "../assets/projject/password_generator.png";
const projectData = [
    {
      id: 1,
      title: "Weather App",
      description:
        "A responsive weather forecast app built using OpenWeather API. Displays current weather, forecasts, and has location-based search.",
      image:project1, // Place image in /public/assets/projects
      tech: ["React", "CSS", "API"],
    },
    {
      id: 2,
      title: "Pokémon Wiki",
      description:
        "A multipage Pokémon wiki website using PokéAPI. Includes 3D views, region filters, and search functionality.",
      image: project2,
      tech: ["React", "Tailwind", "PokéAPI", "Framer Motion"],
    },
    {
      id: 3,
      title: "Portfolio Website",
      description:
        "A multi-page developer portfolio made with React, Tailwind CSS, dark mode, animations, and contact form integration.",
      image: project3,
      tech: ["React", "Tailwind", "EmailJS", "Framer Motion"],
    },
    {
      id: 4,
      title: "Password Generator",
      description:
        "A simple password generator that allows users to customize password length and character types.",
      image: project4,
      tech: ["React","Tailwind","PasswordGenerator API"]
    },
  ];
  
  export default projectData;
  