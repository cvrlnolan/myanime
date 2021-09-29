import axios from "axios";
import type { NextApiRequest, NextApiResponse } from "next";

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<any>
) {
  const { search } = req.body;
  const apiEndpoint =
    "https://api.aniapi.com/v1/anime?title=" + (search as string);
  try {
    const response = await axios.get(apiEndpoint);
    const data = await response.data;
    // console.log(data.data["documents"]);
    const anime = data.data["documents"];
    res.status(200).json(anime);
  } catch (e: any) {
    console.log(e.message);
    res.status(400).end();
  }
}
