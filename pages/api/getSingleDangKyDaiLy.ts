// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import { DONDKDAILY, PrismaClient } from "@prisma/client";
import type { NextApiRequest, NextApiResponse } from "next";
const prisma = new PrismaClient();
type Data = {
  ok: boolean;
  data: DONDKDAILY | null;
};

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<Data>
) {
  // res.status(200).json({ name: "John Doe" });
  const data = req.body;
  console.log(data);
  if (data.MAND == null) {
    res.status(200).json({
      ok: false,
      data: null,
    });
    return;
  }
  const getDonDKDaiLy = await prisma.dONDKDAILY.findUnique({
    where: {
      MAND: Number(data.MAND),
    },
  });
  res.status(200).json({
    ok: true,
    data: getDonDKDaiLy,
  });
}
