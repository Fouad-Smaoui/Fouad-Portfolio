import * as Types from "../types";
import contructionUrl from "../assets/Parrot x UAVIA.jpg";
import devtaxUrl from "../assets/accenture-logo.webp";
import { useState } from "react";
import Modal from "./Modal";

const experience1: Types.Experience = {
  companyName: "Accenture",
  image: devtaxUrl,
  date: "2023 - 2024",
  shortDescription: "Robotics Consultant",
  longDescription: [
    `• Leading the design of a cutting-edge pick & place robotic solution, integrating a collaborative robot, its digital twin, and advanced planning algorithms to optimize operational efficiency.`,
    "• Delivering high-impact demonstrations of physical AI applications in Industry X.0, advancing technological transformation and driving strategic partnerships for Accenture."
   ],
};

const experience2: Types.Experience = {
  companyName: "UAVIA X Parrot",
  image: contructionUrl,
  date: "2022",
  shortDescription: "Robotics Software Engineer",
  longDescription: [`• Enhanced drone autonomy and perception by advancing 3D environment reconstruction and obstacle avoidance, incorporating innovations from Parrot’s technologies.`,
    "• Integrated physical AI to optimize drone performance and decision-making in complex environments."
  ],
};

const experiences: Types.Experience[] = [experience1, experience2];

function Experience() {
  const [showModal, setShowModal] = useState(false);
  const [experience, setExperience] = useState(experiences[0]);
  return (
    <div id="experience" className="mx-auto max-w-6xl px-3">
      <h2 className="mb-12 text-center text-5xl font-bold tracking-tight text-white">
        Experience
      </h2>
      <div className="flex flex-col items-center lg:flex-row lg:justify-center lg:space-x-4">
        {experiences.map((experience) => (
          <div
            key={experience.companyName}
            className="border-accent mb-4 flex h-48 w-full max-w-[36rem] items-center justify-center rounded-lg border-t-4 lg:mb-0"
            style={{
              backgroundImage:
                "linear-gradient(145deg, #130428 7%, #251043 34%, #38126D 57%, #261045 85%, #190634 100%)",
            }}
          >
            <img
              src={experience.image}
              alt={experience.companyName}
              className="aspect-square w-32 rounded-lg"
            />
            <div className="ml-4 text-left">
              <h2 className="text-2xl font-semibold text-white">
                {experience.companyName}
              </h2>
              <p className="text-xs">{experience.shortDescription}</p>
              <p className="text-xs text-gray-400">{experience.date}</p>
              <button
                onClick={() => {
                  setExperience(experience);
                  setShowModal(true);
                }}
                className="bg-accent/15 border-accent hover:bg-accent/50 mt-3 rounded-xl border-2 px-4 py-2 text-xs font-medium text-white"
              >
                Learn More
              </button>
            </div>
          </div>
        ))}
      </div>
      <Modal
        open={showModal}
        setOpen={setShowModal}
        title={experience.companyName}
        description={experience.longDescription}
      />
    </div>
  );
}

export default Experience;
