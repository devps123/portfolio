import React from "react";
import { contactDetails } from "../static/Details";

/**
 * The Contact component displays contact information (email and phone) with GSAP animations.
 * 
 * @component
 * @returns {JSX.Element} The rendered contact component.
 */
const Contact : React.FC = () => {
  const { email, phone } = contactDetails;

  return (
    <main className="container mx-auto max-width mx-auto section">
      <h1 className="text-center text-2xl md:text-3xl lg:text-6xl text-dark-heading dark:text-light-heading font-semibold md:font-bold">
        For any questions please drop a mail
      </h1>
      <h3 className="text-center text-3xl md:text-4xl lg:text-6xl text-gradient font-semibold md:font-bold pt-5 md:pt-10 md:pb-6">
        <a href={`mailto:${email}`}>{email}</a>
      </h3>
      <span className="text-center text-content text-xl font-light block">or call me</span>
      <h3 className="text-center text-3xl md:text-4xl lg:text-6xl text-gradient font-semibold md:font-bold pt-2 md:py-6">
        <a href={`tel:${phone}`}>{phone}</a>
      </h3>
    </main>
  );
}

export default Contact;
