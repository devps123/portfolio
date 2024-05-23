import React from "react";

interface WorkProps {
  position: string;
  company: string;
  location: string;
  type: string;
  duration: string;
}

const Work: React.FC<WorkProps> = ({ position, company, location, type, duration }) => {
  return (
    <article className="pt-8 border-b-2 border-dark-content pb-5 dark:border-light-content border-opacity-20 dark:border-opacity-20">
      <div className="flex justify-between items-center">
        <h1 className="text-content md:text-lg lg:text-xl">{position}</h1>
        <div className="btn bg-greenbg text-green-text text-xs inline-block rounded-3xl px-3 py-1 min-w-fit">
          {type}
        </div>
      </div>
      <div className="flex justify-between pt-2">
        <div className="flex flex-col md:flex-row">
          <div className="flex items-center pr-5">
            <svg
              className="dark:fill-light-heading fill-dark-heading min-w-fit"
              width="16"
              height="12"
              viewBox="0 0 16 12"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              {/* SVG Path */}
            </svg>
            <p className="text-content text-xs md:text-sm font-light pl-1">{company}</p>
          </div>
          <div className="flex items-center">
            <svg
              className="dark:fill-light-heading fill-dark-heading min-w-fit"
              width="16"
              height="12"
              viewBox="0 0 16 12"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              {/* SVG Path */}
            </svg>
            <p className="text-content text-xs md:text-sm font-light pl-1">{location}</p>
          </div>
        </div>
        <p className="text-content text-xs md:text-sm font-light pl-1 min-w-fit">{duration}</p>
      </div>
    </article>
  );
}

export default Work;
