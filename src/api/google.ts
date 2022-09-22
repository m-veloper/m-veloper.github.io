import axios from 'axios';
import Parser from 'rss-parser';
import { decode } from 'html-entities';
import { CLIENT_SIDE, CORS_PROXY, GOOGLE_TREND_API, GOOGLE_TREND_RSS } from '../config/Constant';

export type Google = {
  default: Defaults;
};

export type Defaults = {
  geo: string;
  trendingSearches: TrendingSearch[];
};

export type TrendingSearch = {
  title: string;
  formattedTraffic: string;
  trendingSearchUrl: string;
  country: string;
};

export type Googles = {
  title: string;
  newsTitle: string;
  newsLink: string;
  naverLink: string;
};

/**
 * 구글 rss 데이터 출력 후 파싱
 * @param from
 */
export async function getGoogleRss(from: string) {
  const parser: Parser<any> = new Parser({
    customFields: {
      feed: ['foo'],
      item: ['ht:news_item'],
    },
  });

  let requestUrl: string;
  if (from === CLIENT_SIDE) {
    requestUrl = CORS_PROXY + GOOGLE_TREND_RSS;
  } else {
    requestUrl = GOOGLE_TREND_RSS;
  }

  const feed = await parser.parseURL(requestUrl);
  const dataArray = new Array();

  feed.items.map((item: { [x: string]: { [x: string]: any }; title: any }) => {
    dataArray.push({
      title: item.title,
      newsTitle: decode(String(item['ht:news_item']['ht:news_item_title'])),
      newsLink: String(item['ht:news_item']['ht:news_item_url']),
      naverLink: String(
        `https://search.naver.com/search.naver?where=news&query=${item.title}&sm=tab_opt&sort=1&photo=0&field=0&pd=0&ds=&de=&docid=&related=0&mynews=0&office_type=0&office_section_code=0&news_office_checked=&nso=so%3Add%2Cp%3Aall&is_sug_officeid=0`,
      ),
    });
  });
  return dataArray;
}

/**
 * component 에서 요청
 * 구글트렌드 검색어 axios
 */
export async function getGoogleTrendsFromBrowser() {
  const env = process.env.name;
  const requestUrl = process.env.NEXT_PUBLIC_API_URL;
  const response = await axios.get(String(requestUrl));
  const googleData = googleDataMapper(JSON.stringify(response.data.result));
  return googleData;
}

/**
 * staticProps 에서 요청
 * 구글트렌드 검색어 axios
 */
export async function getGoogleTrendsFromServerSide() {
  const response = await axios.get(GOOGLE_TREND_API);
  const googleData = googleDataMapper(JSON.stringify(response.data));
  return googleData;
}

/**
 * 불필요한 문자를 삭제하고 JSON 형태로 매핑
 * @param data
 */
export const googleDataMapper = (data: string) => {
  // 1. 불필요한 문자열 삭제
  const raw = data.split(")]}',\\n");
  // 2. raw 변수에서 JSON 형태 출력
  const rawJson = raw[1];
  // 3. JSON parser 을 사용하기 위해 전체 문자열에서 불필요한 문자 제거
  // JSON parser 사용하서 JSON 형태로 만듬
  const json = JSON.parse(rawJson.replace(/\\/g, '').slice(0, -1));
  // 4. list 형태의 객체에 담겨있는 유니코드 문자 디코딩 하고
  // 디코딩된 데이터를 다시 객체에 담기
  let decodeList: string[] = [];
  json.default.trendingSearches.map(
    (value: {
      title: string;
      formattedTraffic: string;
      trendingSearchUrl: string;
      country: string;
    }) => (
      // value.title = getUnicodeToDecode(value.title),
      // value.formattedTraffic = getUnicodeToDecode(value.formattedTraffic),
      // value.trendingSearchUrl = getDecodeURI(value.trendingSearchUrl),
      // value.country = getUnicodeToDecode(value.country)
      (decodeList = getDecodeURI(value.trendingSearchUrl)),
      (value.title = decodeList[1]),
      (value.trendingSearchUrl =
        'https://search.naver.com/search.naver?where=news&query=' +
        decodeList[1] +
        '&sm=tab_opt&sort=1&photo=0&field=0&pd=0&ds=&de=&docid=&related=0&mynews=0&office_type=0&office_section_code=0&news_office_checked=&nso=so%3Add%2Cp%3Aall&is_sug_officeid=0')
    ),
  );

  return json;
};

/**
 * 구글트렌드 검색어의 유니코드로 되어있는 문자열을 UTF-8 형태로 디코딩
 * @param data
 */
const getUnicodeToDecode = (data: string) => {
  let decodeList: string[] = [];
  // 1. 유니코드를 변환하기 위해선서는 u를 제거해주고 fromCharCode 함수 및 16진수를 사용하야한다.
  const raw = data.split('u');
  // 2. map 을 돌려서 각 코드를 변환하여 list 변수에 담는다.
  raw.map((unicode) => decodeList.push(String.fromCharCode(parseInt(unicode, 16))));
  const decodeData = decodeList.join('');
  return decodeData;
};

/**
 * uri 를 분리하여 디코딩 후
 * 검색 url 과 title 단어를 만든다
 * @param data
 */
const getDecodeURI = (data: string) => {
  let decodeList: string[] = [];
  // 1. uri 에서 #을 기준으로 문자열을 분리
  const raw = data.split('#');
  // 2. map 을 돌려서 각 코드를 변환하여 list 변수에 담는다.
  raw.map((uri) => decodeList.push(decodeURI(uri)));
  return decodeList;
};
