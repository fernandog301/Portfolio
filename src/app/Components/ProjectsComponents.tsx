import ProjectsIteams from "./ProjectsIteams";
import github from "../Assets/github1.png";
import html from "../Assets/html.png";
import JavaScript from "../Assets/javascript.png";
import React from "../Assets/react.png";
import node from "../Assets/node.png";
import tailwind from "../Assets/tailwind.png";
import css from "../Assets/css.png";

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
            title="Property Finder"
            backgroundImg={React.src}
            projectUrl="/property"
            tech="React JS"
          />
          <ProjectsIteams
            title="Crypto App"
            backgroundImg={React.src}
            projectUrl="/crypto"
            tech="React JS"
          />
          <ProjectsIteams
            title="Crypto App"
            backgroundImg={css.src}
            projectUrl="/crypto"
            tech="React JS"
          />
          <ProjectsIteams
            title="Netflix App"
            backgroundImg={JavaScript.src}
            projectUrl="/netflix"
            tech="React JS"
          />
          <ProjectsIteams
            title="Twitch UI"
            backgroundImg={React.src}
            projectUrl="/twitch"
            tech="Next JS"
          />
          <ProjectsIteams
            title="Twitch UI"
            backgroundImg={tailwind.src}
            projectUrl="/twitch"
            tech="Next JS"
          />
          <ProjectsIteams
            title="Twitch UI"
            backgroundImg={node.src}
            projectUrl="/twitch"
            tech="Next JS"
          />
        </div>
      </div>
    </div>
  );
};

export default ProjectsComponents;
