import type { NextPage } from "next";
import React, { useState } from "react";
import Head from "next/head";
import axios from "axios";
import useSWR from "swr";
import Navbar from "@/components/layout/navbar";
import AnimeBox from "@/components/anime/animeBox";

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
        <Navbar>{error.message}</Navbar>
      </>
    );
  }

  if (!data) {
    return (
      <>
        <Navbar>Loading...</Navbar>
      </>
    );
  }

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
        <div className="flex flex-wrap justify-center mx-auto my-2 md:w-1/3">
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
        <div className="flex flex-wrap space-x-2 justify-center">
          {searchResults &&
            searchResults.map((anime: any) => (
              <AnimeBox key={anime.id} anime={anime} />
            ))}
          {data.map((anime: any) => (
            <AnimeBox key={anime.id} anime={anime} />
          ))}
        </div>
      </Navbar>
    </>
  );
};

export default Home;
