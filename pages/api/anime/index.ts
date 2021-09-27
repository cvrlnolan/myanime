import type { NextApiRequest, NextApiResponse } from "next";
import axios from "axios";

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<any>
) {
  const apiEndpoint = "https://api.aniapi.com/v1/anime";
  try {
    const response = await axios.get(apiEndpoint);
    const data = await response.data;
    // console.log(data.data["documents"]);
    const animes = data.data["documents"];
    res.status(200).json(animes);
  } catch (e: any) {
    console.log(e.message);
    res.status(400).end();
  }
}
