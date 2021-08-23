import { NextApiHandler } from "next";
import { PrismaClient } from '@prisma/client'
const prisma = new PrismaClient()

const analyticsHandler: NextApiHandler = async (req, res) => {
  const { referrer, themePreference, naturalThemePreference, windowHeight = null, windowWidth = null } = req.body;
  console.log(req?.headers);
  try {
    const ip = (req?.headers?.['x-forwarded-for'] || req?.connection?.remoteAddress || req?.socket?.remoteAddress ||  (req?.connection as any)?.socket?.remoteAddress).split?.(",")?.[0];
    const userAgent = req.headers['user-agent'];
    console.log({date:new Date().toISOString(), referrer, themePreference, naturalThemePreference, ip, userAgent});
    await prisma.visitLog.create({data:{ ip, userAgent, referrer, themePreference, naturalThemePreference, headers: req?.headers ?? {}, windowHeight, windowWidth }});
  } catch(e) {
    console.error(e);
  } finally {
    res.json({ 'success': true });
  }
}

export default analyticsHandler;
