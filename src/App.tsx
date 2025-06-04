import "./App.css";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Experience from "./components/Experience";
import Tools from "./components/Tools";
import Project from "./components/Project";
import Contact from "./components/Contact";
import * as Types from "./types";
import terpExchangeUrl from "./assets/mini-lab.jpg";
import sortingUrl from "./assets/flex.jpg";
import MobileManipulator from "./assets/mobile_manipulator_urdf_rviz.png";
import OrentitImage from "./assets/orentit.png";
import VirtualTryOn from "./assets/virtualtryon.webp";
import Drone from "./assets/Drone.webp";

// import comingSoonUrl from "./assets/comingSoon.png";

// import { useRef } from "react";

const project1: Types.Project = {
  title: "Drone Precision Landing System",
  techStack: ["Python", "Matlab"],
  description:
    "Architected a novel autonomous drone landing system on moving vehicles, leveraging robust engineering and Physical AI to enable advanced navigation in complex real-world conditions. ",
  image: Drone,
  github: "https://github.com/Fouad-Smaoui/Drone-Precision-Landing-Control-System",
  demo: "https://github.com/Fouad-Smaoui/Drone-Precision-Landing-Control-System",
};
const project2: Types.Project = {
  title: "ROS 2 Industrial Mobile Manipulator",
  techStack: [
    "ROS 2",
    "C++",
    "Gazebo",
  ],
  description:
    "In my vision of the future, robots aren’t just tools, they’re intelligent collaborators that transform industries through the power of physical AI, and it’s the future I’m shaping.This revolutionary mobile manipulator grows smarter through reinforcement learning, improving its efficiency in object manipulation, navigation, and assembly. It merges ROS2, physical AI, and swarm robotics, it’s part of a network of robots that work together, share data, and adapt to their environment.",
  image: MobileManipulator,
  github: "https://github.com/Fouad-Smaoui/Mobile-Manipulator-Robot",
  demo: "https://github.com/Fouad-Smaoui/Mobile-Manipulator-Robot",
};

const project3: Types.Project = {
  title: "ORentit",
  techStack: ["Python", "Docker", "Hugging Face"],
  description:
    "Launched a next-generation AI-driven rental platform with semantic search, enabling intent-based item discovery, reducing friction in the search process, and adapting to evolving user behavior.",
  image: OrentitImage,
  github: "https://github.com/Fouad-Smaoui/ORentit",
  demo: "https://o-rentit.vercel.app/",
};

const project4: Types.Project = {
  title: "Flex",
  techStack: ["C++", "OpenCV", "Simulink"],
  description:
    "Designed and developed a versatile two-wheeled bipedal robot, inspired by my education at Arts et Métiers ParisTech, for inspection and transportation tasks, driving innovation in next-generation robotics and empowering businesses to stay competitive in the emerging market.",
  image: sortingUrl,
  github: "https://github.com/Fouad-Smaoui/Flex-MultiModal-Balancing-Robot",
  demo: "https://youtu.be/Me2IMcmEs_o",
};

const project5: Types.Project = {
  title: "Minilab",
  techStack: ["ROS", "Python", "Gazebo"],
  description:
    "Developed an autonomous navigation system, enabling mobile robots to autonomously select optimal routes and avoid obstacles, driving physical AI innovation for more efficient task completion and improved operational collaboration.",
  image: terpExchangeUrl,
  github: "https://github.com/Fouad-Smaoui/Warehouse-Mobile-Robots-Navigation-Solutions",
  demo: "https://www.youtube.com/shorts/EluJY0yDq7U?feature=share",
};

const project6: Types.Project = {
  title: "TinySight",
  techStack: ["Python", "OpenCV", "C++"],
  description:
    "Created a next-generation, customizable solution combining facial detection, virtual try-on, and facial landmark tracking to deliver innovative robotic vision across diverse applications.",
  image: VirtualTryOn,
  github: "https://github.com/Fouad-Smaoui/TinyML-Driven-Embedded-AI-Vision",
  demo: "https://github.com/Fouad-Smaoui/TinyML-Driven-Embedded-AI-Vision",
};




const projects: Types.Project[] = [project1, project2, project3, project4, project5,project6 ];

function App() {
  // const contactRef = useRef<HTMLElement | null>(null);

  // const handleScroll = () => {
  //   contactRef.current?.scrollIntoView({ behavior: "smooth" });
  // };
  
  return (
    <>
      <Navbar />
      <Hero />
      <div className="space-y-20 lg:space-y-32">
        <div className="space-y-20 lg:space-y-28">
          <Experience />
          <Tools />
          <h2 className="mb-4 text-center text-5xl font-bold tracking-tight text-white">
        Projects
      </h2>
        </div>
        <div id="projects" className="space-y-36 lg:space-y-44">
          {projects.map((project, index) => (
            <Project key={index} project={project} reversed={index % 2 == 1} />
          ))}
        </div>
        <Contact />
      </div>
      <div className="mx-auto flex max-w-7xl p-10 pt-24 lg:px-8">
        <a className="w-full self-center text-center">
          © 2025 Fouad Smaoui. All rights reserved
          <br />
          Built with <span className="animate-pulse">🤖</span>  in Paris, France
        </a>
      </div>
    </>
  );
}

export default App;
