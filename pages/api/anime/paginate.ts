import type { NextApiRequest, NextApiResponse } from "next";
import axios from "axios";

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  const { page } = req.query;
  //   console.log(page);
  try {
    const apiEndpoint =
      "https://api.aniapi.com/v1/anime?per_page=20&page=" + (page as string);
    const response = await axios.get(apiEndpoint);
    const animeData = await response.data;
    // console.log(animeData.data);
    const animes = animeData.data["documents"];
    res.status(200).json(animes);
  } catch (e: any) {
    console.error(e.message);
    res.status(400).end();
  }
}
