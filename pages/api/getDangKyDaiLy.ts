// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import { DONDKDAILY, PrismaClient } from "@prisma/client";
import type { NextApiRequest, NextApiResponse } from "next";
const prisma = new PrismaClient();
type Data = {
  DONDK: DONDKDAILY[];
};

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<Data>
) {
  // res.status(200).json({ name: "John Doe" });
  const DONDK = await prisma.dONDKDAILY.findMany({
    orderBy: {
      TinhTrang: "asc",
    },
  });
  res.status(200).json({
    DONDK,
  });
}
