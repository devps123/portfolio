import React from "react";
import { Link } from "react-router-dom";

/**
 * A NotFound component.
 * It will be displayed when the user accidentally enters the wrong route
 * @component
 * @returns {JSX.Element} The rendered NotFound component.
 */
const NotFound: React.FC = (): JSX.Element => {
    return (
        <section className="flex items-center h-screen p-16 bg-gray-1000 dark:bg-gray-1000">
            <div className="container flex flex-col items-center">
                <div className="flex flex-col gap-6 max-w-md text-center">
                    <h2 className="font-extrabold text-5xl text-gray-600 dark:text-gray-100">
                        <span className="sr-only">Error</span>404
                    </h2>
                    <p className="text-2xl md:text-1xl dark:text-gray-300">Sorry, we couldn't find this page.</p>
                    <Link
                        to="/"
                        className="px-1 py-4 text-xl font-semibold rounded bg-purple-1000 text-gray-50 dark:bg-pink-700 dark:text-gray-900 hover:text-gray-200 dark:hover:text-gray-50"
                    >
                        Back to home
                    </Link>
                </div>
            </div>
        </section>
    );
};

export default NotFound;
