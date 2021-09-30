import React from "react";

const LoadingBox = () => {
  return (
    <>
      <div className="card_grid">
        <div className="loading_card_wrapper">
          <div className="w-full h-60 bg-gray-400"></div>
          <div className="px-6 py-4">
            <div className="rounded bg-gray-400"></div>
            <div className="rounded bg-gray-400"></div>
          </div>
        </div>
      </div>
    </>
  );
};

export default LoadingBox;
