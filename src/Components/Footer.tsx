import React from "react";
import { labels } from "../static/constants";

/**
 * A Footer component.
 * Used to show footer message of app
 * @component
 * @returns {JSX.Element} The rendered footer component.
 */
const Footer: React.FC = (): JSX.Element => {
  return (
    <footer className="container mx-auto py-1 fixed bottom-0 md:left-20 bg-white dark:bg-dark-mode">
      <p className="text-xs text-center text-dark-content dark:text-light-content w-full">
        {labels.footerText}
      </p>
    </footer>
  );
}
export default Footer;
