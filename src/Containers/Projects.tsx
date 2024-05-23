import React, { useEffect, useRef } from "react";
import Project from "../Components/Project.tsx";
import { projectDetails } from "../static/Details";
import gsap from "gsap";

/**
 * The Projects component displays a list of projects with a GSAP animation on mount.
 * 
 * @component
 * @returns {JSX.Element} The rendered projects component.
 */
const Projects: React.FC = (): JSX.Element => {
  // Ref for animating the project list
  const projects = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const tl = gsap.timeline();
    tl.from(
      projects.current,
      {
        y: "100%",
        delay: 0.1,
        opacity: 0,
        duration: 1,
        ease: "Power3.easeOut",
      },
      "<"
    );
  }, []);

  return (
    <main className="container mx-auto max-width mt-20 mb-20">
      <section>
        <h1 className="text-2xl text-dark-heading dark:text-light-heading md:text-4xl xl:text-5xl xl:leading-tight font-bold">
          Projects
        </h1>
        <div ref={projects} className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-10">
          {projectDetails.map(({ title, image, description, techstack, previewLink, githubLink }) => (
            <Project
              key={title} // Adding a key for React list rendering
              title={title}
              image={image}
              description={description}
              techstack={techstack}
              previewLink={previewLink}
            />
          ))}
        </div>
      </section>
    </main>
  );
}

export default Projects;
