import React, { useState, Fragment } from "react";
import { Dialog, Transition } from "@headlessui/react";

const AnimeBox = ({ anime }: any) => {
  let [isOpen, setOpen] = useState(false);

  const openModal = () => {
    setOpen(true);
  };

  const closeModal = () => {
    setOpen(false);
  };

  return (
    <>
      <div className="card_grid">
        <div className="card_wrapper" onClick={openModal}>
          <img
            alt="anime_img"
            src={anime.cover_image}
            className="w-full h-60 object-cover"
          />
          <div className="px-6 py-4">
            <div className="card_header">{anime.titles.en}</div>
            <p className="text-gray-700 dark:text-gray-400 text-base truncate">
              {anime.descriptions.en}
              {(anime.descriptions.en === "" || null) &&
                "No description available for this anime."}
            </p>
          </div>
        </div>
      </div>
      <Transition appear show={isOpen} as={Fragment}>
        <Dialog
          as="div"
          className="fixed inset-0 z-10 overflow-y-auto"
          onClose={closeModal}
        >
          <div className="min-h-screen px-4 text-center">
            <Transition.Child
              as={Fragment}
              enter="ease-out duration-300"
              enterFrom="opacity-0"
              enterTo="opacity-100"
              leave="ease-in duration-200"
              leaveFrom="opacity-100"
              leaveTo="opacity-0"
            >
              <Dialog.Overlay className="fixed inset-0" />
            </Transition.Child>
            <span
              className="inline-block h-screen align-middle"
              aria-hidden="true"
            >
              &#8203;
            </span>
            <Transition.Child
              as={Fragment}
              enter="ease-out duration-300"
              enterFrom="opacity-0 scale-95"
              enterTo="opacity-100 scale-100"
              leave="ease-in duration-200"
              leaveFrom="opacity-100 scale-100"
              leaveTo="opacity-0 scale-95"
            >
              <div className="modal_container">
                <Dialog.Title
                  as="h3"
                  className="text-lg font-medium leading-6 text-gray-900 dark:text-gray-200"
                >
                  {anime.titles.en}
                </Dialog.Title>
                <div className="mt-2">
                  <p className="text-sm text-gray-500">
                    {anime.descriptions.en}
                    {(anime.descriptions.en === "" || null) &&
                      "No description available for this anime."}
                  </p>
                </div>

                <div className="mt-4">
                  <button
                    type="button"
                    className="modal_button"
                    onClick={closeModal}
                  >
                    Close
                  </button>
                </div>
              </div>
            </Transition.Child>
          </div>
        </Dialog>
      </Transition>
    </>
  );
};

export default AnimeBox;
