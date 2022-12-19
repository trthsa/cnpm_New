// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import { PrismaClient } from "@prisma/client";
import type { NextApiRequest, NextApiResponse } from "next";
const prisma = new PrismaClient();
type Data = {
  ok: boolean;
  statistic: any;
};

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<Data>
) {
  // res.status(200).json({ name: "John Doe" });
  const data = req.body;
  const statistic = {
    receiptCount: 0,
    saleTotal: 0,
    ordersCount: 0,
    productsCount: 0,
    customerCount: 0,
    dangkyCount: 0,
    duyetCount: 0,
    tuchoiCount: 0,
    khuvucCount: 0,
  };
  const receiptCount = await prisma.hOADON.count();
  const saleTotal = await prisma.hOADON.aggregate({
    _sum: {
      TONGTIEN: true,
    },
  });
  const ordersCount = await prisma.hOADON.count();
  const productsCount = await prisma.sANPHAM.count();
  const customerCount = await prisma.dONDKDAILY.count({
    where: {
      TinhTrang: 1,
    },
  });
  const dangkyCount = await prisma.dONDKDAILY.count({});
  const duyetCount = await prisma.dONDKDAILY.count({
    where: {
      TinhTrang: 1,
    },
  });
  const tuchoiCount = await prisma.dONDKDAILY.count({
    where: {
      TinhTrang: 2,
    },
  });
  const khuvucCount = await prisma.kHUVUC.count();
  statistic.saleTotal = saleTotal._sum.TONGTIEN?.toNumber() || 0;
  statistic.ordersCount = ordersCount;
  statistic.productsCount = productsCount;
  statistic.customerCount = customerCount;
  statistic.dangkyCount = dangkyCount;
  statistic.duyetCount = duyetCount;
  statistic.tuchoiCount = tuchoiCount;
  statistic.khuvucCount = khuvucCount;
  statistic.receiptCount = receiptCount;

  res.status(200).json({
    ok: true,
    statistic: statistic,
  });
}
