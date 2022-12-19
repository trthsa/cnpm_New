// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import { PrismaClient } from "@prisma/client";
import type { NextApiRequest, NextApiResponse } from "next";
const prisma = new PrismaClient();
type Data = {
  ok: boolean;
  mand: null | number;
};

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<Data>
) {
  // res.status(200).json({ name: "John Doe" });
  const data = req.body;
  const dkDL = await prisma.dONDKDAILY.create({
    data: {
      CCCD: data.CCCD.value,
      DIACHI: data.DIACHI.value,
      GIOITINH: data.GIOITINH.value == 0 ? true : false,
      MAKV: data.MAKV.value,
      SDT: data.SDT.value,
      TENDL: data.TENDL.value,
    },
  });
  res.status(200).json({
    ok: true,
    mand: dkDL.MAND,
  });
}
