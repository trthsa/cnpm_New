// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import { HOADON, PrismaClient } from "@prisma/client";
import type { NextApiRequest, NextApiResponse } from "next";
const prisma = new PrismaClient();
type Data = {
  ok: boolean;
  hoadon: HOADON[];
};

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<Data>
) {
  // res.status(200).json({ name: "John Doe" });
  const data = req.body;
  
  const hoadon = await prisma.hOADON.findMany({});

  res.status(200).json({
    ok: true,
    hoadon,
  });
}
