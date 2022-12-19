// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import { DONHANG, PrismaClient } from "@prisma/client";
import type { NextApiRequest, NextApiResponse } from "next";
const prisma = new PrismaClient();
type Data = {
  ok: boolean;
  donhang: DONHANG[];
};

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<Data>
) {
  // res.status(200).json({ name: "John Doe" });
  const { MAHD } = req.body;
  
  
  const maDH = await prisma.cTHOADON.findMany({
    where: {
      MAHD: MAHD,
    },
  });
  console.log(maDH);
  
  const donhang = await prisma.dONHANG.findMany({
    where: {
      MADH: {
        in: maDH.map((item) => item.MADH!),
      },
    },
  });
  res.status(200).json({
    ok: true,
    donhang: donhang,
  });
}
