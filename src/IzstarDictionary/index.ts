// src/data/dictionary.ts
export interface DictionaryItem {
  keyword: string;
  explanation: string;
  category?: "主星" | "辅星" | "杂耀" | "宫位" | "神煞" | "四化";
  reference?: string;
}

export const starDictionary: DictionaryItem[] = [
  {
    keyword: "紫微",
    category: "主星",
    explanation:
      "紫微星是紫微斗数中最重要的主星之一，为众星之首。代表权威、地位、领导能力等。",
    reference: "《渊海子平》",
  },
  {
    keyword: "天机",
    category: "主星",
    explanation: "天机星主智慧、口才、思维能力。为谋星,主计谋、智谋。",
    reference: "《子平真诠》",
  },
  {
    keyword: "太阳",
    category: "主星",
    explanation:
      "太阳星为阳性星耀，主权贵、名誉、地位、事业等。在命盘中有光明正大之象。",
    reference: "《穆满仓评注》",
  },
  // ... 更多词典数据
];
