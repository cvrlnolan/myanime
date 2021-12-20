import React, { useState } from "react";
import Image from "next/image";
import { usePopper } from "react-popper";
import {
  animeStatus,
  animeScore,
  animeFormat,
  animeEpisodes,
  animeGenres,
} from "@/lib/utils/anime";
import { EmojiHappyIcon } from "@heroicons/react/outline";

const AnimeBox = ({ anime }: any) => {
  const [visible, setVisible] = useState(false);

  const [referenceElement, setReferenceElement] =
    useState<HTMLDivElement | null>(null);
  const [popperElement, setPopperElement] = useState<HTMLDivElement | null>(
    null
  );
  const [arrowElement, setArrowElement] = useState<HTMLDivElement | null>(null);
  const { styles, attributes } = usePopper(referenceElement, popperElement, {
    placement: "right-start",
    modifiers: [
      {
        name: "arrow",
        options: { element: arrowElement, padding: 5 },
      },
      { name: "offset", options: { offset: [0, 10] } },
      {
        name: "preventOverflow",
        options: { mainAxis: true, rootBoundary: "document" },
      },
      { name: "flip", options: { fallbackPlacements: ["left-start", "top"] } },
    ],
  });

  return (
    <>
      <div
        className="block w-52 space-y-4 cursor-pointer"
        ref={setReferenceElement}
        onMouseEnter={() => setVisible(true)}
        onMouseLeave={() => setVisible(false)}
      >
        <div
          className="w-full h-64 relative rounded"
          style={{ backgroundColor: anime.cover_color }}
        >
          <Image
            alt="anime_img"
            src={anime.cover_image}
            layout="fill"
            objectFit="cover"
            className="rounded"
            priority
          />
        </div>
        <div className="flex w-full justify-center">
          <p className="text-sm">{anime.titles.en}</p>
        </div>
      </div>
      {visible && (
        <div
          ref={setPopperElement}
          style={styles.popper}
          {...attributes.popper}
          className="bg-slate-50 shadow rounded z-30 opacity-90"
        >
          {/* <div className="flex w-52 h-52 p-4 overflow-hidden">
            {anime.descriptions.en}
            {(anime.descriptions.en === "" || null) &&
              "No description available for this anime."}
          </div> */}
          <div className="block w-64 h-40 p-4 space-y-4">
            <div className="flex w-full justify-between">
              <p>{animeStatus(anime.status)}</p>
              <div className="flex space-x-2 items-center">
                <span className="inline-flex">
                  <EmojiHappyIcon
                    className={`w-6 h-6 ${animeScore(anime.score)}`}
                  />
                </span>
                <p>{anime.score}%</p>
              </div>
            </div>
            <p>
              {animeFormat(anime.format)} {animeEpisodes(anime.episodes_count)}
            </p>
            <p className="text-sm">Release Date: {anime.season_year}</p>
            <div className="flex w-full truncate">
              <ul className="inline-flex space-x-2">
                {animeGenres(anime.genres).map((genre: string, i: number) => (
                  <li key={i} className="text-sm italic">
                    {genre}
                  </li>
                ))}
              </ul>
            </div>
          </div>
          <div ref={setArrowElement} style={styles.arrow} />
        </div>
      )}
    </>
  );
};

export default AnimeBox;
