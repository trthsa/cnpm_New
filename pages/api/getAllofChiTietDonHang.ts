// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import { CTDONHANG, PrismaClient } from "@prisma/client";
import type { NextApiRequest, NextApiResponse } from "next";
const prisma = new PrismaClient();
type Data = {
  ok: boolean;
  ctdonhang: CTDONHANG[];
};

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<Data>
) {
  // res.status(200).json({ name: "John Doe" });
  const { MADH } = req.body;

  const ctdonhang = await prisma.cTDONHANG.findMany({
    where: {
      MADH: MADH,
    },
  });
  res.status(200).json({
    ok: true,
    ctdonhang: ctdonhang,
  });
}
