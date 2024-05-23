import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Header from "./Components/Header.tsx";
import Footer from "./Components/Footer.tsx";
import Home from "./Containers/Home.tsx";
import About from "./Containers/About.tsx";
import Contact from "./Containers/Contact.tsx";
import Projects from "./Containers/Projects.tsx";
import Technologies from "./Containers/Technologies.tsx";
import { routePathNames } from "./static/constants";
import Blogs from "./Containers/MyBlogs.tsx";
import NotFound from "./Components/NotFound.tsx";

/**
 * AppRouter component sets up the routing for the application using React Router.
 * 
 * @component
 * @returns {JSX.Element} The rendered router component with defined routes.
 */
const AppRouter: React.FC = () => {
  const { HOME, ABOUT, CONTACT, PROJECTS, BLOGS, TECHNOLOGIES } = routePathNames;

  return (
    <Router>
      <Header />
      <Routes>
        <Route path={HOME} element={<Home />} />
        <Route path={ABOUT} element={<About />} />
        <Route path={CONTACT} element={<Contact />} />
        <Route path={PROJECTS} element={<Projects />} />
        <Route path={BLOGS} element={<Blogs />} />
        <Route path={TECHNOLOGIES} element={<Technologies />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
      <Footer />
    </Router>
  );
}

export default AppRouter;
