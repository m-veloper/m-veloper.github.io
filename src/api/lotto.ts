import axios from 'axios';
import * as cheerio from 'cheerio';

/**
 * 조코딩 로또 번호 추출 함수
 */
export async function getLottoNumbers() {
  // 조코딩 로또 번호 호출
  const response = await axios.get('https://animalface.site/lotto');
  const $ = cheerio.load(response.data);
  const times = $('body > section:nth-child(4) > h3')
    .text()
    .replace(/[^0-9]/g, '');
  const numbersData = $('body > section:nth-child(4) > ol li')
    .text()
    .replace(/]/g, '')
    .replace(/'/g, '');
  const raw = numbersData.split('[');

  // 배열 선언
  let result: Array<string> = [];
  raw.map((v) => {
    if (v !== '') {
      result.push(v);
    }
  });

  // 동행복권 API 로 당첨번호 호출
  const winInfo = await getWinLottoInfo(times);

  // 숫자를 원 단위로 변환
  const total = numberToKorean(winInfo.totSellamnt);
  const winner = numberToKorean(winInfo.firstWinamnt);

  winInfo.totSellamnt = total + '원';
  winInfo.firstWinamnt = winner + '원';

  // json 생성
  const lotto = {
    times: times,
    number: result,
    winInfo: winInfo,
  };
  return lotto;
}

/**
 * 로또 당첨번호 API
 */
export async function getWinLottoInfo(time: string) {
  const times = Number(time) - 1;
  const response = await axios.get(
    `https://www.dhlottery.co.kr/common.do?method=getLottoNumber&drwNo=${times}`,
  );
  return response.data;
}

/**
 * 숫자를 한글 단위 돈으로 바꾸는 함수
 * @param number
 */
function numberToKorean(number: number) {
  let inputNumber: any = number < 0 ? false : number;
  const unitWords = ['', '만', '억', '조', '경'];
  const splitUnit = 10000;
  const splitCount = unitWords.length;
  const resultArray = [];
  let resultString = '';

  for (let i = 0; i < splitCount; i++) {
    let unitResult = (inputNumber % Math.pow(splitUnit, i + 1)) / Math.pow(splitUnit, i);
    unitResult = Math.floor(unitResult);
    if (unitResult > 0) {
      resultArray[i] = unitResult;
    }
  }

  for (let i = 0; i < resultArray.length; i++) {
    if (!resultArray[i]) continue;
    resultString = String(resultArray[i]) + unitWords[i] + resultString;
  }

  return resultString;
}
