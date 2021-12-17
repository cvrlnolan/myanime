import React, { useState } from "react";
import Image from "next/image";
import { usePopper } from "react-popper";

const AnimeBox = ({ anime }: any) => {
  const [visible, setVisible] = useState(false);

  const [referenceElement, setReferenceElement] =
    useState<HTMLDivElement | null>(null);
  const [popperElement, setPopperElement] = useState<HTMLDivElement | null>(
    null
  );
  const [arrowElement, setArrowElement] = useState<HTMLDivElement | null>(null);
  const { styles, attributes } = usePopper(referenceElement, popperElement, {
    placement: "right",
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
      { name: "flip", options: { fallbackPlacements: ["left", "top"] } },
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
        <div className="w-full h-64 relative rounded">
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
          <p>{anime.titles.en}</p>
        </div>
      </div>
      {visible && (
        <div
          ref={setPopperElement}
          style={styles.popper}
          {...attributes.popper}
          className="bg-slate-50 shadow rounded z-30 opacity-80"
        >
          <div className="flex w-52 h-52 p-4 overflow-hidden">
            {anime.descriptions.en}
            {(anime.descriptions.en === "" || null) &&
              "No description available for this anime."}
          </div>
          <div ref={setArrowElement} style={styles.arrow} />
        </div>
      )}
    </>
  );
};

export default AnimeBox;
