import type { NextPage } from "next";
import React, { useState } from "react";
import Head from "next/head";
import axios from "axios";
import useSWR from "swr";
import Navbar from "@/components/layout/navbar";
import AnimeBox from "@/components/anime/animeBox";
import LoadingBox from "@/components/anime/loadingBox";

const Home: NextPage = () => {
  const fetcher = (url: string) => axios.get(url).then((res) => res.data);

  const { data, error } = useSWR(() => "/api/anime/", fetcher);

  const [value, setValue] = useState({
    search: "",
  });

  const [searchResults, setResults] = useState<any | null>();

  if (error) {
    return (
      <>
        <Head>
          <title>Error</title>
        </Head>
        <Navbar>{error.message}</Navbar>
      </>
    );
  }

  if (!data) {
    return (
      <>
        <Head>
          <title>Loading ...</title>
        </Head>
        <Navbar>
          <div className="flex w-full p-4">
            <div className="grid w-full grid-cols-1 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-2 gap-y-4 justify-items-center">
              {[...Array(10)].map((_, i) => (
                <LoadingBox key={i} />
              ))}
            </div>
          </div>
        </Navbar>
      </>
    );
  }

  const loadMore = async () => {
    let next_page = data.current_page + 1;
    try {
      const response = await axios.post(
        `/api/anime/paginate?page=${next_page}`
      );
      const data = response.data;
      console.log(data);
    } catch (e: any) {
      console.error(e.message);
    }
  };

  const search = async (search: string) => {
    if (search !== "") {
      try {
        const response = await axios.post("/api/anime/search", { search });
        const result = await response.data;
        // console.log(result);
        setResults(result);
      } catch (e: any) {
        console.log(e.message);
      }
    }
  };

  // console.log(data);

  return (
    <>
      <Head>
        <title>MyAnime</title>
      </Head>
      <Navbar>
        {/* <div> */}
        <div className="flex w-full p-4 mx-auto md:w-1/3">
          <input
            className="search_input"
            placeholder="Search Anime"
            value={value.search}
            onChange={(e) => {
              search(e.target.value);
              setValue({ search: e.target.value });
            }}
          />
        </div>
        <div className="flex w-full p-4">
          <div className="grid w-full grid-cols-1 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-4 justify-items-center">
            {searchResults &&
              searchResults.map((anime: any) => (
                <AnimeBox key={anime.id} anime={anime} />
              ))}
            {data.animes.map((anime: any) => (
              <AnimeBox key={anime.id} anime={anime} />
            ))}
          </div>
        </div>
        <div className="flex w-full my-4 justify-center">
          <button
            className="px-2 py-1.5 appearance-none rounded shadow bg-sky-200 text-gray-600 hover:bg-sky-300"
            onClick={loadMore}
          >
            Load More
          </button>
        </div>
        {/* </div> */}
      </Navbar>
    </>
  );
};

export default Home;
