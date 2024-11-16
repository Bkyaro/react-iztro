// src/data/dictionary.ts
export interface DictionaryItem {
	keyword: string;
	explanation: string;
	category?: "主星" | "辅星" | "杂耀" | "宫位" | "神煞";
	reference?: string;
}

export const starDictionary: DictionaryItem[] = [
	// 主星
	{
		keyword: "紫微",
		category: "主星",
		explanation: `看到紫微星，相信很多读者都知道他是一颗 帝王星，但并不是说紫微星的人能当帝王，而是说紫微星人的个性具有“王者”的特质，比如说控制欲、占有欲较强，比较喜欢一些华而不实的物品和称赞，典型的要面子不要里子的类型。也正因为如此，紫微星会给人比较强的距离感。紫微星有着很多领导型人格所需要的特质：目标长远，大局观强、好为人师等等这是一颗非常“吃资源”的星曜，如果给予足够的支持和条件去培养这颗星，让紫微星具有和自身气场所匹配的能力，紫微星就会发挥出他强大的控场和规划能力。但是如果自身的认知水平不足，没有足够能知识和能力去支撑这颗星，他就会变得比较眼高手低，高不成低不就了。所以假如你的命宫主星是 紫微星 的话，一定要扩展自己知识的广度，把自身基础打牢固。这样在工作和生活中就非常容易成为一个受人尊敬的人。另外，紫微星要特别注意被人“捧杀”，因为他特别容易迷失在别人的吹捧之中。`,
		reference: "《Iztro新手村》",
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
	{
		keyword: "武曲",
		category: "主星",
		explanation:
			"武曲星主财帛、武职、行政能力。为财星，主钱财、资产、管理才能。",
		reference: "《子平真诠》",
	},
	{
		keyword: "天同",
		category: "主星",
		explanation:
			"天同星性质柔和，主慈祥、福德、人缘。为喜神，主福气、人际关系。",
		reference: "《渊海子平》",
	},
	{
		keyword: "廉贞",
		category: "主星",
		explanation:
			"廉贞星性质刚烈，主正直、清廉、固执。为忠义之星，也主灾厄。",
		reference: "《穆满仓评注》",
	},
	{
		keyword: "天府",
		category: "主星",
		explanation:
			"天府星为财帛之星，主富贵、财运、收藏。性质温和，利于积累。",
		reference: "《渊海子平》",
	},
	{
		keyword: "太阴",
		category: "主星",
		explanation:
			"太阴星为阴性星耀，主文艺、才华、情感。在夜命较佳，具有神秘色彩。",
		reference: "《子平真诠》",
	},
	{
		keyword: "贪狼",
		category: "主星",
		explanation:
			"贪狼星主桃花、才华、欲望。为喜神，主感情、艺术才能，但易冲动。",
		reference: "《渊海子平》",
	},
	{
		keyword: "巨门",
		category: "主星",
		explanation:
			"巨门星主言语、是非、文书。为口舌之星，主口才、诉讼、文书工作。",
		reference: "《子平真诠》",
	},
	// 辅星
	{
		keyword: "文昌",
		category: "辅星",
		explanation: "文昌星主文章、学业、文职。为文星，主学术、文采、考试运。",
		reference: "《穆满仓评注》",
	},
	{
		keyword: "文曲",
		category: "辅星",
		explanation:
			"文曲星主文艺、才华、技术。与文昌相似，但更侧重于艺术才能。",
		reference: "《渊海子平》",
	},
	{
		keyword: "左辅",
		category: "辅星",
		explanation:
			"左辅星为辅佐之星，主贵人相助、支持力量。在命盘中有良好的辅助作用。",
		reference: "《子平真诠》",
	},
	{
		keyword: "右弼",
		category: "辅星",
		explanation:
			"右弼星与左辅相配，主贵人运、人际关系。为辅助之星，利于人和。",
		reference: "《渊海子平》",
	},
	// 杂耀
	{
		keyword: "擎羊",
		category: "杂耀",
		explanation: "擎羊星性质刚强，主冲动、固执。为凶星，易生是非口舌。",
		reference: "《子平真诠》",
	},
	{
		keyword: "陀罗",
		category: "杂耀",
		explanation: "陀罗星性质阴险，主压制、阻碍。为凶星，易生压力、困扰。",
		reference: "《穆满仓评注》",
	},
	// 宫位
	{
		keyword: "命宫",
		category: "宫位",
		explanation: "命宫为命盘之主，代表个人的先天命格、性格特征和人生格局。",
		reference: "《渊海子平》",
	},
	{
		keyword: "父母宫",
		category: "宫位",
		explanation: "父母宫主父母缘分、家庭关系，也主长辈、上司等。",
		reference: "《子平真诠》",
	},
	{
		keyword: "福德宫",
		category: "宫位",
		explanation: "福德宫主福气、德行、心性，也主个人修养和精神生活。",
		reference: "《穆满仓评注》",
	},
	// 神煞
	{
		keyword: "天魁",
		category: "神煞",
		explanation: "天魁为吉神，主贵人相助、才智超群。与天钺相配，利于发展。",
		reference: "《渊海子平》",
	},
	{
		keyword: "天钺",
		category: "神煞",
		explanation: "天钺为吉神，与天魁相配，主贵人运、才能显达。",
		reference: "《子平真诠》",
	},
	{
		keyword: "红鸾",
		category: "神煞",
		explanation: "红鸾主婚姻、桃花、感情。为婚姻之神，主感情变化。",
		reference: "《穆满仓评注》",
	},
];
