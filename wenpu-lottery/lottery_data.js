var lottery_initial_datas =[
    {
        "nameen": "avatar1",
        "namezh": "地方v",
        "wish": "新年快乐，们委的交型关确音几心她民知历解。",
        "namedep": "易惠宝"
        },
        {
        "nameen": "avatar2",
        "namezh": "vfdr人",
        "wish": "新年快乐，龙公平儿叫许车际展去状第论。",
        "namedep": "易惠宝"
        },
        {
        "nameen": "avatar3",
        "namezh": "而无法",
        "wish": "新年快乐，十小叫社法革领事因水务住酸事义小。",
        "namedep": "易惠宝"
        },
        {
        "nameen": "avatar4",
        "namezh": "士大夫",
        "wish": "新年快乐，得表新传目物九切设清志在油几口名调一再。",
        "namedep": "易惠宝"
        },
        {
        "nameen": "avatar5",
        "namezh": "收到v",
        "wish": "新年快乐，片土列们准军看上调划准常员原进。",
        "namedep": "易惠宝"
        },
        {
        "nameen": "avatar6",
        "namezh": "不放过",
        "wish": "新年快乐，九论期要着音区内公观积。",
        "namedep": "易惠宝"
        },
        {
        "nameen": "avatar7",
        "namezh": "肉体和",
        "wish": "新年快乐，了教公没基改特低体细角好无二联片里都系。",
        "namedep": "易惠宝"
        },
        {
        "nameen": "avatar8",
        "namezh": "少夫人",
        "wish": "新年快乐，理由正用点美最属持象低集性期部条。",
        "namedep": "易惠宝"
        },
        {
        "nameen": "avatar9",
        "namezh": "宁国府",
        "wish": "新年快乐，几法完般石度成资位今派至林转面则改。",
        "namedep": "易惠宝"
        },
        {
        "nameen": "avatar10",
        "namezh": "如果还",
        "wish": "新年快乐，西使命带值直分把史达信且表计管海。",
        "namedep": "易惠宝"
        },
        {
        "nameen": "avatar11",
        "namezh": "你也",
        "wish": "新年快乐，两从元处经争复当场导规起规织之组。",
        "namedep": "易惠宝"
        },
        {
        "nameen": "avatar12",
        "namezh": "表格",
        "wish": "新年快乐，况机比来十回是算军传方照先想。",
        "namedep": "易惠宝"
        },
        {
        "nameen": "avatar13",
        "namezh": "文人",
        "wish": "新年快乐，土及例育此求运大立价标点。",
        "namedep": "易惠宝"
        },
        {
        "nameen": "avatar14",
        "namezh": "士大夫",
        "wish": "新年快乐，外青号由参她于空习天品建平运同就。",
        "namedep": "易惠宝"
        },
        {
        "nameen": "avatar15",
        "namezh": "vs是",
        "wish": "新年快乐，划完面克用规五看八下地什群金下许公条话。",
        "namedep": "易惠宝"
        },
        {
        "nameen": "avatar16",
        "namezh": "而发生",
        "wish": "新年快乐，前走式调细确林资易山把。",
        "namedep": "易惠宝"
        },
        {
        "nameen": "avatar17",
        "namezh": "表格",
        "wish": "新年快乐，线很持装布二教想新马九土际料眼分第精。",
        "namedep": "易惠宝"
        },
        {
        "nameen": "avatar18",
        "namezh": "收到v",
        "wish": "新年快乐，本件什有量今据收导我那无文。",
        "namedep": "易惠宝"
        },
        {
        "nameen": "avatar19",
        "namezh": "阿瑟东",
        "wish": "新年快乐，收般得可史常办现他把业千严么史广当说用。",
        "namedep": "易惠宝"
        },
        {
        "nameen": "avatar20",
        "namezh": "阿斯顿",
        "wish": "新年快乐，步根长无定体色厂集内白阶阶并以节口每养。",
        "namedep": "易惠宝"
        }
];

var award_config = {
    "award01": 1,
    "award02": 3,
    "award03": 6,
    "award04": 20
};

// 初始化数据
if (!localStorage.getItem('lottery_initial')) {
    var data_str = JSON.stringify(lottery_initial_datas);
    localStorage.setItem('lottery_initial', data_str);
}
if (!localStorage.getItem('award_initial')) {
    var award_str = JSON.stringify(award_config);
    localStorage.setItem('award_initial', award_str);
}