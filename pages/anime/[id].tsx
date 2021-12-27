import React from "react";
import type { NextPage } from "next";
import Head from "next/head";
import Image from "next/image";
import { useRouter } from "next/router";
import axios from "axios";
import useSWR from "swr";
import Navbar from "@/components/layout/navbar";
import { animeSeason, animeEpisodes, animeEpDuration } from "@/lib/utils/anime";

const AnimeID: NextPage = () => {
  const router = useRouter();

  const { id } = router.query;

  const fetcher = (url: string) => axios.get(url).then((res) => res.data);

  const { data: anime, error } = useSWR(() => "/api/anime/" + id, fetcher);

  if (!anime) {
    return (
      <>
        <Head>
          <title>Loading ...</title>
        </Head>
        <Navbar>
          <p>Loading ...</p>
        </Navbar>
      </>
    );
  }

  if (error) {
    return (
      <>
        <Head>
          <title>Error</title>
        </Head>
        <Navbar>
          <p>{error.message}</p>
        </Navbar>
      </>
    );
  }

  return (
    <>
      <Head>
        <title>{anime.titles.en} | MyAnime</title>
      </Head>
      <Navbar>
        <div className="flex-col w-full space-y-4">
          <div className="flex w-full h-96 relative">
            <Image
              alt="anime_banner"
              src={anime.banner_image}
              layout="fill"
              objectFit="cover"
              priority
            />
          </div>
          <div className="flex w-full p-8">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              <div className="block md:w-60 lg:w-72 h-80 relative rounded">
                <Image
                  alt="anime_cover"
                  src={anime.cover_image}
                  layout="fill"
                  objectFit="cover"
                  className="rounded"
                />
              </div>
              <div className="block space-y-4 col-span-2">
                <p className="text-xl italic">{anime.titles.en}</p>
                <p>
                  {anime.descriptions.en}
                  {(anime.descriptions.en === "" || null) &&
                    "No description available for this anime."}
                </p>
                <p>
                  <span className="inline-flex">Release Date:</span>{" "}
                  {animeSeason(anime.season_period)} {anime.season_year}
                </p>
                <p>
                  <span className="inline-flex">Episodes:</span>{" "}
                  {animeEpisodes(anime.episodes_count)}
                </p>
                <p>
                  <span className="inline-flex">Episode duration:</span>{" "}
                  {animeEpDuration(anime.episode_duration)}
                </p>
              </div>
            </div>
          </div>
        </div>
      </Navbar>
    </>
  );
};

export default AnimeID;
