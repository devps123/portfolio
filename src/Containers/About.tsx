import React, { useEffect, useRef } from "react";
import Work from "../Components/Work.tsx";
import gsap from "gsap";
import { personalDetails, workDetails, eduDetails } from "../static/Details.js";

/**
 * The About component displays personal details, work experience, and education.
 * It uses GSAP for animations and React refs for targeting specific sections for the animations.
 * 
 * @component
 * @returns {JSX.Element} The rendered component.
 */
const About : React.FC = () => {
  const about = useRef<HTMLElement | null>(null);
  const workExp = useRef<HTMLElement | null>(null);
  // Refs for animating sections
  
  useEffect(() => {
    const tl = gsap.timeline();
    if (about.current) {
      tl.from(
        about.current,
        {
          x: "-100%",
          delay: 0.1,
          opacity: 0,
          duration: 2,
          ease: "Power3.easeOut",
        },
        "<"
      );
    }
    if (workExp.current) {
      tl.from(
        workExp.current,
        {
          y: "100%",
          delay: 0.3,
          opacity: 0,
          duration: 2,
          ease: "Power3.easeOut",
        },
        "<"
      );
    }
    
  }, []);
  

  return (
    <main className="container mx-auto max-w-7xl pt-20 pb-20">
      <section ref={about}>
        <h1 className="text-2xl text-dark-heading dark:text-light-heading md:text-4xl xl:text-5xl xl:leading-tight font-bold">
          About Me
        </h1>
        <p className="text-content py-8 lg:max-w-3xl">{personalDetails.about}</p>
      </section>
      <section ref={workExp}>
        <h1 className="text-2xl text-dark-heading dark:text-light-heading md:text-4xl xl:text-5xl xl:leading-tight font-bold">
          Work Experience
        </h1>
        {React.Children.toArray(
          workDetails.map(({ Position, Company, Location, Type, Duration }) => (
            <Work
              position={Position}
              company={Company}
              location={Location}
              type={Type}
              duration={Duration}
            />
          ))
        )}
      </section>
      <section>
        <h1 className="text-2xl pt-10 text-dark-heading dark:text-light-heading md:text-4xl xl:text-5xl xl:leading-tight font-bold">
          Education
        </h1>
        {React.Children.toArray(
          eduDetails.map(({ Position, Company, Location, Type, Duration }) => (
            <Work
              position={Position}
              company={Company}
              location={Location}
              type={Type}
              duration={Duration}
            />
          ))
        )}
      </section>
    </main>
  );
};

export default About;
