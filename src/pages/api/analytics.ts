import { NextApiHandler } from "next";

const analyticsHandler: NextApiHandler = (req, res) => {
  const { referrer, themePreference, naturalThemePreference } = req.body;
  console.log(req?.headers);
  try {
    const ip = (req?.headers?.['x-forwarded-for'] || req?.connection?.remoteAddress || req?.socket?.remoteAddress ||  (req?.connection as any)?.socket?.remoteAddress).split?.(",")?.[0];
    const userAgent = req.headers['user-agent'];
    console.log({date:new Date().toISOString(), referrer, themePreference, naturalThemePreference, ip, userAgent});
  } catch(e) {
    console.error(e);
  } finally {
    res.json({ 'success': true });
  }
}

export default analyticsHandler;
