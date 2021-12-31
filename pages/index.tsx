import type { NextPage } from "next";
import React, { useState, useEffect } from "react";
import Head from "next/head";
import axios from "axios";
import Navbar from "@/components/layout/navbar";
import AnimeBox from "@/components/anime/animeBox";
import LoadingBox from "@/components/anime/loadingBox";

const Home: NextPage = () => {
  let [animes, setAnimes] = useState<any | undefined>();

  let [page, setPage] = useState<number>(1);

  let [loading, setLoading] = useState<boolean>(false);

  let [error, setError] = useState<any | undefined>();

  const [value, setValue] = useState({
    search: "",
  });

  const [searchResults, setResults] = useState<any | null>();

  useEffect(() => {
    const loadAnimes = async () => {
      setLoading(true);
      try {
        const response = await axios.post(`/api/anime/paginate?page=${page}`);
        const animes = response.data;
        console.log(animes);
        setAnimes(animes);
      } catch (e: any) {
        // console.error(e.message);
        setError(e);
      } finally {
        setLoading(false);
        window.scrollTo({
          top: 0,
          behavior: "smooth",
        });
      }
    };
    loadAnimes();
  }, [page]);

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

  if (loading) {
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
    setPage((page) => page + 1);
  };

  const nextPage = async () => {
    setPage((page) => page + 1);
  };

  const prevPage = async () => {
    if (page === 1) return;
    setPage((page) => page - 1);
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

  return (
    <>
      <Head>
        <title>MyAnime</title>
      </Head>
      <Navbar>
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
        <div className="block md:flex px-4 w-full my-4 justify-between items-center">
          <p className="text-lg">Top Rated Animes</p>
          <p className="text-sm">{page} of 719 pages</p>
        </div>
        <div className="flex w-full p-4">
          <div className="grid w-full grid-cols-1 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-4 justify-items-center">
            {searchResults &&
              searchResults.map((anime: any) => (
                <AnimeBox key={anime.id} anime={anime} />
              ))}
            {animes &&
              animes.map((anime: any) => (
                <AnimeBox key={anime.id} anime={anime} />
              ))}
          </div>
        </div>
        <div className="flex w-1/2 mx-auto my-4 justify-between">
          <button
            className="px-2 py-1.5 appearance-none rounded shadow bg-sky-200 text-gray-700 hover:bg-sky-300"
            onClick={prevPage}
          >
            Back
          </button>
          <button
            className="px-2 py-1.5 appearance-none rounded shadow bg-sky-200 text-gray-700 hover:bg-sky-300"
            onClick={nextPage}
          >
            Next
          </button>
        </div>
      </Navbar>
    </>
  );
};

export default Home;
