import type { NextApiRequest, NextApiResponse } from "next";

export default function handler(req: NextApiRequest, res: NextApiResponse) {
  if (!(req.body.id && req.body.name)) {
    return res.status(400).json({ message: "Invalid Argument!" });
  }
  res.status(200).json({ [req.body.id]: req.body.name });
}
