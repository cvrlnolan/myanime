import React from "react";

const LoadingBox = () => {
  return (
    <>
      {/* <div className="w-full h-64">
        <div className="loading_card_wrapper">
          <div className="w-full h-60 bg-gray-400"></div>
          <div className="px-6 py-4">
            <div className="rounded bg-gray-400"></div>
            <div className="rounded bg-gray-400"></div>
          </div>
        </div>
      </div> */}
      <div className="w-52 h-64 rounded shadow-lg bg-zinc-200 animate-pulse"></div>
    </>
  );
};

export default LoadingBox;
