// Loading.js
import React from 'react';

const Loading = () => {
  return (
    <div className="loading-screen fixed inset-0 flex items-center justify-center bg-black text-white z-50">
      {/* Add any loading spinner or animation here */}
      <h1 className="text-4xl font-bold">Loading...</h1>
    </div>
  );
};

export default Loading;
