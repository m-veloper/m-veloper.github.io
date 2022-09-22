// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from 'next';
import axios from 'axios';
import { Google } from '../../src/api/google';

type Data = {
  result: Google;
};

export default async function handler(req: NextApiRequest, res: NextApiResponse<Data>) {
  const googleTrendUrl =
    'https://trends.google.co.kr/trends/api/topdailytrends?hl=ko&tz=-540&geo=KR';
  const response = await axios.get<Google>(googleTrendUrl);
  res.status(200).json({ result: response.data });
}
