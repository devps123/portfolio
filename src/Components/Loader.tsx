import React from 'react';

/**
 * A Loader component.
 * Used to show when we fetch data from server, it will be visible on screen until we gets data
 * @component
 * @returns {JSX.Element} The rendered footer component.
 */
const Loader : React.FC = (): JSX.Element => {
  return (
    <div className="fixed inset-0 flex items-center justify-center" role='loader'>
      <div className="border-gray-300 h-10 w-10 animate-spin rounded-full border-4 border-t-blue-600" />
    </div>
  );
};

export default Loader;
