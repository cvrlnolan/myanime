import type { NextApiRequest, NextApiResponse } from "next";
import axios from "axios";

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<any>
) {
  const { id } = req.query;
  //   console.log(id);
  try {
    const apiEndpoint = "https://api.aniapi.com/v1/anime/" + (id as string);
    const response = await axios.get(apiEndpoint);
    const animeData = response.data;
    // console.log(data.data);
    const anime = animeData.data;
    res.status(200).json(anime);
  } catch (e: any) {
    console.log(e.message);
    res.status(400).end();
  }
}
