import ProjectsIteams from "./ProjectsIteams";
import github from "../Assets/github1.png";
import html from "../Assets/html.png";
import JavaScript from "../Assets/javascript.png";
import React from "../Assets/react.png";
import node from "../Assets/node.png";
import tailwind from "../Assets/tailwind.png";
import css from "../Assets/css.png";
import Weather from "../Assets/10.png"
import Prometo from "../Assets/Screenshot 2024-05-06 162358.png"


const ProjectsComponents = () => {
  return (
    <div id="projects" className="w-full h-screen text-center">
      <div className="max-w-[1240px] mx-auto px-2 py-16">
        <p className="text-xl tracking-widest uppercase text-[#a09f9d]">
          Projects
        </p>
        <h2 className="py-4 text-white">What I&apos;ve Built</h2>
        <div className="grid md:grid-cols-2 gap-8">
          <ProjectsIteams
            title="Prometo Food truck Backend"
            backgroundImg={Prometo.src}
            projectUrl="https://github.com/fernandog301/PrometoFoodTrucksBackEnds.git"
            tech="Prometo Food truck Back-end"
          />
          <ProjectsIteams
            title="Prometo food truck"
            backgroundImg={Prometo.src}
            projectUrl="https://github.com/fernandog301/prometofoodtrucks.git"
            tech="Prometo food truck Front-end"
          />
          <ProjectsIteams
            title="Weather App"
            backgroundImg={Weather.src}
            projectUrl="https://github.com/fernandog301/GutierrezFweatherredo.gito"
            tech="Weather App"
          />
          
        </div>
      </div>
    </div>
  );
};

export default ProjectsComponents;
