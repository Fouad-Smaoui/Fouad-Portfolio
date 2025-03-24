import pythonLogo from "../assets/logos/python.svg";
import awsLogo from "../assets/logos/aws.svg";
import gitLogo from "../assets/logos/git.svg";
import cppLogo from "../assets/logos/C++.svg";
import gazeboLogo from "../assets/logos/Gazebo.svg";
import rosLogo from "../assets/logos/ROS.svg";
import matlabLogo from "../assets/logos/MATLAB.svg";
import rustLogo from "../assets/logos/Rust.svg";
import linuxLogo from "../assets/logos/Linux.svg";
import opencvLogo from "../assets/logos/OpenCV.svg";
import dockerLogo from "../assets/logos/Docker.svg";
import nvidiaLogo from "../assets/logos/Nvidia.svg";
// ;)
const tools = [
  { name: "C++", logo: cppLogo },
  { name: "Python", logo: pythonLogo },
  { name: "Rust", logo: rustLogo },
  { name: "OpenCV", logo: opencvLogo },
  { name: "ROS", logo: rosLogo },
  { name: "Gazebo", logo: gazeboLogo },
  { name: "Linux", logo: linuxLogo },
  { name: "Nvidia Isaac", logo: nvidiaLogo },
  { name: "Simulink", logo: matlabLogo },
  { name: "AWS", logo: awsLogo },
  { name: "Docker", logo: dockerLogo },
  { name: "Git", logo: gitLogo },


  
];

function ToolSlide({ name, logo }: { name: string; logo: string }) {
  return (
    <div className="slide">
      <div className="flex h-32 w-32 items-center justify-center p-4">
        <img
          src={logo}
          alt={`${name} logo`}
          className="max-h-full max-w-full object-contain"
        />
      </div>
      <p className="mt-2 w-32 text-center">{name}</p>
    </div>
  );
}







function Tools() {
  return (
    <div className="mx-auto max-w-6xl px-3">
      <h2 className="mb-4 text-center text-5xl font-bold tracking-tight text-white">
        Tools
      </h2>
      <div className="relative overflow-hidden py-8">
        <div className="absolute bottom-0 left-0 top-0 z-10 w-24 bg-gradient-to-r from-[#0f061b] to-transparent"></div>
        <div className="slide-track">
          {tools.concat(tools).map((tool, index) => (
            <ToolSlide key={`${tool.name}-${index}`} {...tool} />
          ))}
        </div>
        <div className="absolute bottom-0 right-0 top-0 z-10 w-24 bg-gradient-to-l from-[#0f061b] to-transparent"></div>
      </div>
    </div>
  );
}

export default Tools;
