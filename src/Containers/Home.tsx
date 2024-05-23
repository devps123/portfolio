import React, { useRef, useEffect } from "react";
import gsap from "gsap";
import { personalDetails } from "../static/Details";

/**
 * The Home component displays a welcome message with animations for the text and image.
 * 
 * @component
 * @returns {JSX.Element} The rendered home component.
 */
const Home : React.FC = () => {
  const { name, tagline, img } = personalDetails;

  // Refs for animating elements
  const h11 = useRef<HTMLHeadingElement>(null);
  const h12 = useRef<HTMLHeadingElement>(null);
  const h13 = useRef<HTMLHeadingElement>(null);
  const myImageRef = useRef<HTMLImageElement>(null);

  useEffect(() => {
    const tl = gsap.timeline();
    tl.from(
      h11.current,
      {
        x: "100%",
        delay: 0.1,
        opacity: 0,
        duration: 2,
        ease: "Power3.easeOut",
      },
      "<"
    )
      .from(
        h12.current,
        {
          x: "-100%",
          delay: 0.5,
          opacity: 0,
          duration: 2,
          ease: "Power3.easeOut",
        },
        "<"
      )
      .from(
        h13.current,
        {
          x: "-100%",
          delay: 0.1,
          opacity: 0,
          duration: 2,
          ease: "Power3.easeOut",
        },
        "<"
      )
      .from(
        myImageRef.current,
        {
          x: "200%",
          delay: 0.2,
          opacity: 0,
          duration: 2,
          ease: "Power3.easeOut",
        },
        "<"
      );
  }, []);

  return (
    <main className="container mx-auto max-width section md:flex justify-between items-center">
      <div>
        <h1
          ref={h11}
          className="text-2xl text-dark-heading dark:text-light-heading md:text-4xl xl:text-5xl xl:leading-tight font-bold"
        >
          Hi, There<br />My Name is<br />
        </h1>
        <h1
          ref={h12}
          className="text-2xl bg-clip-text bg-gradient text-transparent md:text-4xl xl:text-5xl xl:leading-tight font-bold"
        >
          {name}
        </h1>
        <h2
          ref={h13}
          className="text-2xl text-dark-heading dark:text-light-heading md:text-4xl xl:text-5xl xl:leading-tight font-bold"
        >
          {tagline}
        </h2>
      </div>
      <div className="mt-5 md:mt-0">
        <img ref={myImageRef} className="w-1/2 md:ml-auto" src={img} alt="Profile" />
      </div>
    </main>
  );
}

export default Home;
