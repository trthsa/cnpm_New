// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import { KHUVUC, PrismaClient } from "@prisma/client";
import type { NextApiRequest, NextApiResponse } from "next";
const prisma = new PrismaClient();
type Data = {
  khuVuc: KHUVUC[];
};

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<Data>
) {
  // res.status(200).json({ name: "John Doe" });
  const khuVuc = await prisma.kHUVUC.findMany();
  res.status(200).json({
    khuVuc,
  });
}
