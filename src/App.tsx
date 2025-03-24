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
import gainzUrl from "./assets/mobile_manipulator_urdf_rviz.png";
// import comingSoonUrl from "./assets/comingSoon.png";

// import { useRef } from "react";

const project1: Types.Project = {
  title: "ROS 2 Industrial Mobile Manipulator",
  techStack: [
    "ROS 2",
    "C++",
    "Gazebo",
  ],
  description:
    "In my vision of the future, robots aren’t just tools, they’re intelligent collaborators that transform industries through the power of physical AI, and it’s the future I’m shaping.This revolutionary mobile manipulator grows smarter through reinforcement learning, improving its efficiency in object manipulation, navigation, and assembly. It merges ROS2, physical AI, and swarm robotics, it’s part of a network of robots that work together, share data, and adapt to their environment.",
  image: gainzUrl,
  github: "https://github.com/Fouad-Smaoui/Mobile-Manipulator-Robot",
  demo: "https://www.youtube.com/watch?v=iAC8FYCfB2A",
};

const project2: Types.Project = {
  title: "Flex",
  techStack: ["C++", "Matlab", "OpenCV"],
  description:
    "Designed and developed a versatile two-wheeled bipedal robot, inspired by my education at Arts et Métiers ParisTech, for inspection and transportation tasks, driving innovation in next-generation robotics and empowering businesses to stay competitive in the emerging market.",
  image: sortingUrl,
  github: "https://github.com/Fouad-Smaoui/Flex-MultiModal-Balancing-Robot",
  demo: "https://youtu.be/Me2IMcmEs_o",
};

const project3: Types.Project = {
  title: "Minilab",
  techStack: ["ROS", "Python"],
  description:
    "Developed an autonomous navigation system, enabling mobile robots to autonomously select optimal routes and avoid obstacles, driving physical AI innovation for more efficient task completion and improved operational collaboration.",
  image: terpExchangeUrl,
  github: "https://github.com/Fouad-Smaoui/Warehouse-Mobile-Robots-Navigation-Solutions",
  demo: "https://www.youtube.com/shorts/EluJY0yDq7U?feature=share",
};

const projects: Types.Project[] = [project1, project2, project3];

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
