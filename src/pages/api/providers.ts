import { NextApiResponse, NextApiRequest } from "next";
import { providers } from "../../../data/providers";
import { Provider } from "../../../interfaces";

export default function handler(
  _req: NextApiRequest,
  res: NextApiResponse<Provider[]>,
) {
  return res.status(200).json(providers);
}