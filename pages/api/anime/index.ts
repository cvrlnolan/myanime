import type { NextApiRequest, NextApiResponse } from "next";
import axios from "axios";

type AnimeResponse = {
  animes: any[];
  current_page: number;
};

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<AnimeResponse>
) {
  const apiEndpoint = "https://api.aniapi.com/v1/anime?per_page=20";
  try {
    const response = await axios.get(apiEndpoint);
    const animeData = await response.data;
    // console.log(data.data);
    const animes = animeData.data["documents"];
    const current_page = animeData.data["current_page"];
    res.status(200).json({ animes, current_page });
  } catch (e: any) {
    console.log(e.message);
    res.status(400).end();
  }
}
