import type { NextPage } from "next";
import Head from "next/head";
import axios from "axios";
import useSWR from "swr";
import Navbar from "@/components/layout/navbar";

const Home: NextPage = () => {
  const fetcher = (url: string) => axios.get(url).then((res) => res.data);

  const { data, error } = useSWR(() => "/api/anime/", fetcher);

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

  return (
    <>
      <Head>
        <title>MyAnime</title>
      </Head>
      <Navbar>
        <ul>
          {data.map((anime: any) => (
            <li key={anime.id}>{anime.titles.en}</li>
          ))}
        </ul>
      </Navbar>
    </>
  );
};

export default Home;
