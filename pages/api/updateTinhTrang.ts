// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import { PrismaClient } from "@prisma/client";
import type { NextApiRequest, NextApiResponse } from "next";
const prisma = new PrismaClient();
type Data = {
  ok: boolean;
};

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<Data>
) {
  // res.status(200).json({ name: "John Doe" });
  const data = req.body;
  console.log(data);
  
  const updateTinhTrang = await prisma.dONDKDAILY.update({
    where: {
      MAND: data.MAND,
    },
    data: {
      TinhTrang: data.TINHTRANG,
    },
  });

  res.status(200).json({
    ok: true,
  });
}
