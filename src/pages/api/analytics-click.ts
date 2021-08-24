

import { NextApiHandler } from "next";
import { PrismaClient } from '@prisma/client'
const prisma = new PrismaClient()

const analyticsClickHandler: NextApiHandler = async (req, res) => {
  const { path } = req.body;
  const ip = (req?.headers?.['x-forwarded-for'] || req?.connection?.remoteAddress || req?.socket?.remoteAddress ||  (req?.connection as any)?.socket?.remoteAddress).split?.(",")?.[0];
  const userAgent = req.headers['user-agent'];
  try {
    await prisma.clickLog.create({data:{ip,userAgent,path}});
  } catch(e) {
    console.error(e);
  } finally {
    res.json({success:true});
  }
};

export default analyticsClickHandler;
