import React from "react";

const AnimeBox = ({ anime }: any) => {
  return (
    <>
      <div className="card_grid">
        <div className="card_wrapper">
          <img
            alt="anime_img"
            src={anime.cover_image}
            className="w-full h-60 object-cover"
          />
          <div className="px-6 py-4">
            <div className="font-bold text-xl mb-2 truncate">
              {anime.titles.en}
            </div>
            <p className="text-gray-700 dark:text-gray-400 text-base truncate">
              {anime.descriptions.en}
              {(anime.descriptions.en === "" || null) &&
                "No description available for this anime."}
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default AnimeBox;
