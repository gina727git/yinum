"use strict";
class yiType {
    constructor() {
        this.yiType = "生氣";
        this.yiTypeExtend = "伏位";
    }
}
class YiNumInfo {
}
class CalcService {
    constructor() {
        this.yiType_禍害 = new yiType();
        this.yiType_六煞 = new yiType();
        this.yiType_五鬼 = new yiType();
        this.yiType_絕命 = new yiType();
        this.yiType_生氣 = new yiType();
        this.yiType_天醫 = new yiType();
        this.yiType_延年 = new yiType();
        this.yiType_伏位 = new yiType();
        this.yiNumMap = new Map();
        this.yiSpecialNumMap = this.setYiSpecialNumMap();
        this.yiType_禍害 = this.getYiType_禍害();
        this.yiType_六煞 = this.getYiType_六煞();
        this.yiType_五鬼 = this.getYiType_五鬼();
        this.yiType_絕命 = this.getYiType_絕命();
        this.yiType_生氣 = this.getYiType_生氣();
        this.yiType_天醫 = this.getYiType_天醫();
        this.yiType_延年 = this.getYiType_延年();
        this.yiType_伏位 = this.getYiType_伏位();
        this.yiNumMap.set('17', { yiNum: '17', yiType: '禍害', yiNumEnergyPercent: 100, yiTypeObj: this.yiType_禍害 });
        this.yiNumMap.set('71', { yiNum: '71', yiType: '禍害', yiNumEnergyPercent: 100, yiTypeObj: this.yiType_禍害 });
        this.yiNumMap.set('89', { yiNum: '89', yiType: '禍害', yiNumEnergyPercent: 75, yiTypeObj: this.yiType_禍害 });
        this.yiNumMap.set('98', { yiNum: '98', yiType: '禍害', yiNumEnergyPercent: 75, yiTypeObj: this.yiType_禍害 });
        this.yiNumMap.set('46', { yiNum: '46', yiType: '禍害', yiNumEnergyPercent: 50, yiTypeObj: this.yiType_禍害 });
        this.yiNumMap.set('64', { yiNum: '64', yiType: '禍害', yiNumEnergyPercent: 50, yiTypeObj: this.yiType_禍害 });
        this.yiNumMap.set('23', { yiNum: '23', yiType: '禍害', yiNumEnergyPercent: 30, yiTypeObj: this.yiType_禍害 });
        this.yiNumMap.set('32', { yiNum: '32', yiType: '禍害', yiNumEnergyPercent: 30, yiTypeObj: this.yiType_禍害 });
        this.yiNumMap.set('16', { yiNum: '16', yiType: '六煞', yiNumEnergyPercent: 100, yiTypeObj: this.yiType_六煞 });
        this.yiNumMap.set('61', { yiNum: '61', yiType: '六煞', yiNumEnergyPercent: 100, yiTypeObj: this.yiType_六煞 });
        this.yiNumMap.set('47', { yiNum: '47', yiType: '六煞', yiNumEnergyPercent: 75, yiTypeObj: this.yiType_六煞 });
        this.yiNumMap.set('74', { yiNum: '74', yiType: '六煞', yiNumEnergyPercent: 75, yiTypeObj: this.yiType_六煞 });
        this.yiNumMap.set('38', { yiNum: '38', yiType: '六煞', yiNumEnergyPercent: 50, yiTypeObj: this.yiType_六煞 });
        this.yiNumMap.set('83', { yiNum: '83', yiType: '六煞', yiNumEnergyPercent: 50, yiTypeObj: this.yiType_六煞 });
        this.yiNumMap.set('29', { yiNum: '29', yiType: '六煞', yiNumEnergyPercent: 30, yiTypeObj: this.yiType_六煞 });
        this.yiNumMap.set('92', { yiNum: '92', yiType: '六煞', yiNumEnergyPercent: 30, yiTypeObj: this.yiType_六煞 });
        this.yiNumMap.set('18', { yiNum: '18', yiType: '五鬼', yiNumEnergyPercent: 100, yiTypeObj: this.yiType_五鬼 });
        this.yiNumMap.set('81', { yiNum: '81', yiType: '五鬼', yiNumEnergyPercent: 100, yiTypeObj: this.yiType_五鬼 });
        this.yiNumMap.set('79', { yiNum: '79', yiType: '五鬼', yiNumEnergyPercent: 75, yiTypeObj: this.yiType_五鬼 });
        this.yiNumMap.set('97', { yiNum: '97', yiType: '五鬼', yiNumEnergyPercent: 75, yiTypeObj: this.yiType_五鬼 });
        this.yiNumMap.set('36', { yiNum: '36', yiType: '五鬼', yiNumEnergyPercent: 50, yiTypeObj: this.yiType_五鬼 });
        this.yiNumMap.set('63', { yiNum: '63', yiType: '五鬼', yiNumEnergyPercent: 50, yiTypeObj: this.yiType_五鬼 });
        this.yiNumMap.set('24', { yiNum: '24', yiType: '五鬼', yiNumEnergyPercent: 30, yiTypeObj: this.yiType_五鬼 });
        this.yiNumMap.set('42', { yiNum: '42', yiType: '五鬼', yiNumEnergyPercent: 30, yiTypeObj: this.yiType_五鬼 });
        this.yiNumMap.set('12', { yiNum: '12', yiType: '絕命', yiNumEnergyPercent: 100, yiTypeObj: this.yiType_絕命 });
        this.yiNumMap.set('21', { yiNum: '21', yiType: '絕命', yiNumEnergyPercent: 100, yiTypeObj: this.yiType_絕命 });
        this.yiNumMap.set('69', { yiNum: '69', yiType: '絕命', yiNumEnergyPercent: 75, yiTypeObj: this.yiType_絕命 });
        this.yiNumMap.set('96', { yiNum: '96', yiType: '絕命', yiNumEnergyPercent: 75, yiTypeObj: this.yiType_絕命 });
        this.yiNumMap.set('48', { yiNum: '48', yiType: '絕命', yiNumEnergyPercent: 50, yiTypeObj: this.yiType_絕命 });
        this.yiNumMap.set('84', { yiNum: '84', yiType: '絕命', yiNumEnergyPercent: 50, yiTypeObj: this.yiType_絕命 });
        this.yiNumMap.set('37', { yiNum: '37', yiType: '絕命', yiNumEnergyPercent: 30, yiTypeObj: this.yiType_絕命 });
        this.yiNumMap.set('73', { yiNum: '73', yiType: '絕命', yiNumEnergyPercent: 30, yiTypeObj: this.yiType_絕命 });
        this.yiNumMap.set('14', { yiNum: '14', yiType: '生氣', yiNumEnergyPercent: 100, yiTypeObj: this.yiType_生氣 });
        this.yiNumMap.set('41', { yiNum: '41', yiType: '生氣', yiNumEnergyPercent: 100, yiTypeObj: this.yiType_生氣 });
        this.yiNumMap.set('67', { yiNum: '67', yiType: '生氣', yiNumEnergyPercent: 75, yiTypeObj: this.yiType_生氣 });
        this.yiNumMap.set('76', { yiNum: '76', yiType: '生氣', yiNumEnergyPercent: 75, yiTypeObj: this.yiType_生氣 });
        this.yiNumMap.set('39', { yiNum: '39', yiType: '生氣', yiNumEnergyPercent: 50, yiTypeObj: this.yiType_生氣 });
        this.yiNumMap.set('93', { yiNum: '93', yiType: '生氣', yiNumEnergyPercent: 50, yiTypeObj: this.yiType_生氣 });
        this.yiNumMap.set('28', { yiNum: '28', yiType: '生氣', yiNumEnergyPercent: 30, yiTypeObj: this.yiType_生氣 });
        this.yiNumMap.set('82', { yiNum: '82', yiType: '生氣', yiNumEnergyPercent: 30, yiTypeObj: this.yiType_生氣 });
        this.yiNumMap.set('19', { yiNum: '19', yiType: '延年', yiNumEnergyPercent: 100, yiTypeObj: this.yiType_延年 });
        this.yiNumMap.set('91', { yiNum: '91', yiType: '延年', yiNumEnergyPercent: 100, yiTypeObj: this.yiType_延年 });
        this.yiNumMap.set('78', { yiNum: '78', yiType: '延年', yiNumEnergyPercent: 75, yiTypeObj: this.yiType_延年 });
        this.yiNumMap.set('87', { yiNum: '87', yiType: '延年', yiNumEnergyPercent: 75, yiTypeObj: this.yiType_延年 });
        this.yiNumMap.set('34', { yiNum: '34', yiType: '延年', yiNumEnergyPercent: 50, yiTypeObj: this.yiType_延年 });
        this.yiNumMap.set('43', { yiNum: '43', yiType: '延年', yiNumEnergyPercent: 50, yiTypeObj: this.yiType_延年 });
        this.yiNumMap.set('26', { yiNum: '26', yiType: '延年', yiNumEnergyPercent: 30, yiTypeObj: this.yiType_延年 });
        this.yiNumMap.set('62', { yiNum: '62', yiType: '延年', yiNumEnergyPercent: 30, yiTypeObj: this.yiType_延年 });
        this.yiNumMap.set('13', { yiNum: '13', yiType: '天醫', yiNumEnergyPercent: 100, yiTypeObj: this.yiType_天醫 });
        this.yiNumMap.set('31', { yiNum: '31', yiType: '天醫', yiNumEnergyPercent: 100, yiTypeObj: this.yiType_天醫 });
        this.yiNumMap.set('68', { yiNum: '68', yiType: '天醫', yiNumEnergyPercent: 75, yiTypeObj: this.yiType_天醫 });
        this.yiNumMap.set('86', { yiNum: '86', yiType: '天醫', yiNumEnergyPercent: 75, yiTypeObj: this.yiType_天醫 });
        this.yiNumMap.set('49', { yiNum: '49', yiType: '天醫', yiNumEnergyPercent: 50, yiTypeObj: this.yiType_天醫 });
        this.yiNumMap.set('94', { yiNum: '94', yiType: '天醫', yiNumEnergyPercent: 50, yiTypeObj: this.yiType_天醫 });
        this.yiNumMap.set('27', { yiNum: '27', yiType: '天醫', yiNumEnergyPercent: 30, yiTypeObj: this.yiType_天醫 });
        this.yiNumMap.set('72', { yiNum: '72', yiType: '天醫', yiNumEnergyPercent: 30, yiTypeObj: this.yiType_天醫 });
        this.yiNumMap.set('11', { yiNum: '11', yiType: '伏位', yiNumEnergyPercent: 100, yiTypeObj: this.yiType_伏位 });
        this.yiNumMap.set('22', { yiNum: '22', yiType: '伏位', yiNumEnergyPercent: 100, yiTypeObj: this.yiType_伏位 });
        this.yiNumMap.set('88', { yiNum: '88', yiType: '伏位', yiNumEnergyPercent: 75, yiTypeObj: this.yiType_伏位 });
        this.yiNumMap.set('99', { yiNum: '99', yiType: '伏位', yiNumEnergyPercent: 75, yiTypeObj: this.yiType_伏位 });
        this.yiNumMap.set('66', { yiNum: '66', yiType: '伏位', yiNumEnergyPercent: 50, yiTypeObj: this.yiType_伏位 });
        this.yiNumMap.set('77', { yiNum: '77', yiType: '伏位', yiNumEnergyPercent: 50, yiTypeObj: this.yiType_伏位 });
        this.yiNumMap.set('33', { yiNum: '33', yiType: '伏位', yiNumEnergyPercent: 30, yiTypeObj: this.yiType_伏位 });
        this.yiNumMap.set('44', { yiNum: '44', yiType: '伏位', yiNumEnergyPercent: 30, yiTypeObj: this.yiType_伏位 });
        this.yiNumMap.set('01', { yiNum: '01', yiType: '伏位', yiNumEnergyPercent: 100, yiTypeObj: this.yiType_伏位 });
        this.yiNumMap.set('10', { yiNum: '10', yiType: '伏位', yiNumEnergyPercent: 100, yiTypeObj: this.yiType_伏位 });
        this.yiNumMap.set('02', { yiNum: '02', yiType: '伏位', yiNumEnergyPercent: 75, yiTypeObj: this.yiType_伏位 });
        this.yiNumMap.set('20', { yiNum: '20', yiType: '伏位', yiNumEnergyPercent: 75, yiTypeObj: this.yiType_伏位 });
        this.yiNumMap.set('03', { yiNum: '03', yiType: '伏位', yiNumEnergyPercent: 50, yiTypeObj: this.yiType_伏位 });
        this.yiNumMap.set('30', { yiNum: '30', yiType: '伏位', yiNumEnergyPercent: 50, yiTypeObj: this.yiType_伏位 });
        this.yiNumMap.set('04', { yiNum: '04', yiType: '伏位', yiNumEnergyPercent: 30, yiTypeObj: this.yiType_伏位 });
        this.yiNumMap.set('40', { yiNum: '40', yiType: '伏位', yiNumEnergyPercent: 30, yiTypeObj: this.yiType_伏位 });
        this.yiNumMap.set('05', { yiNum: '05', yiType: '伏位', yiNumEnergyPercent: 20, yiTypeObj: this.yiType_伏位 });
        this.yiNumMap.set('50', { yiNum: '50', yiType: '伏位', yiNumEnergyPercent: 20, yiTypeObj: this.yiType_伏位 });
        this.yiNumMap.set('06', { yiNum: '06', yiType: '伏位', yiNumEnergyPercent: 100, yiTypeObj: this.yiType_伏位 });
        this.yiNumMap.set('60', { yiNum: '60', yiType: '伏位', yiNumEnergyPercent: 100, yiTypeObj: this.yiType_伏位 });
        this.yiNumMap.set('07', { yiNum: '07', yiType: '伏位', yiNumEnergyPercent: 75, yiTypeObj: this.yiType_伏位 });
        this.yiNumMap.set('70', { yiNum: '70', yiType: '伏位', yiNumEnergyPercent: 75, yiTypeObj: this.yiType_伏位 });
        this.yiNumMap.set('08', { yiNum: '08', yiType: '伏位', yiNumEnergyPercent: 50, yiTypeObj: this.yiType_伏位 });
        this.yiNumMap.set('80', { yiNum: '80', yiType: '伏位', yiNumEnergyPercent: 50, yiTypeObj: this.yiType_伏位 });
        this.yiNumMap.set('09', { yiNum: '09', yiType: '伏位', yiNumEnergyPercent: 30, yiTypeObj: this.yiType_伏位 });
        this.yiNumMap.set('90', { yiNum: '90', yiType: '伏位', yiNumEnergyPercent: 30, yiTypeObj: this.yiType_伏位 });
        this.yiNumMap.set('00', { yiNum: '00', yiType: '伏位', yiNumEnergyPercent: 10, yiTypeObj: this.yiType_伏位 });
        this.yiNumMap.set('51', { yiNum: '51', yiType: '伏位', yiNumEnergyPercent: 100, yiTypeObj: this.yiType_伏位 });
        this.yiNumMap.set('15', { yiNum: '15', yiType: '伏位', yiNumEnergyPercent: 100, yiTypeObj: this.yiType_伏位 });
        this.yiNumMap.set('52', { yiNum: '52', yiType: '伏位', yiNumEnergyPercent: 75, yiTypeObj: this.yiType_伏位 });
        this.yiNumMap.set('25', { yiNum: '25', yiType: '伏位', yiNumEnergyPercent: 75, yiTypeObj: this.yiType_伏位 });
        this.yiNumMap.set('53', { yiNum: '53', yiType: '伏位', yiNumEnergyPercent: 50, yiTypeObj: this.yiType_伏位 });
        this.yiNumMap.set('35', { yiNum: '35', yiType: '伏位', yiNumEnergyPercent: 50, yiTypeObj: this.yiType_伏位 });
        this.yiNumMap.set('54', { yiNum: '54', yiType: '伏位', yiNumEnergyPercent: 30, yiTypeObj: this.yiType_伏位 });
        this.yiNumMap.set('45', { yiNum: '45', yiType: '伏位', yiNumEnergyPercent: 30, yiTypeObj: this.yiType_伏位 });
        this.yiNumMap.set('55', { yiNum: '55', yiType: '伏位', yiNumEnergyPercent: 20, yiTypeObj: this.yiType_伏位 });
        this.yiNumMap.set('55', { yiNum: '55', yiType: '伏位', yiNumEnergyPercent: 20, yiTypeObj: this.yiType_伏位 });
        this.yiNumMap.set('56', { yiNum: '56', yiType: '伏位', yiNumEnergyPercent: 100, yiTypeObj: this.yiType_伏位 });
        this.yiNumMap.set('65', { yiNum: '65', yiType: '伏位', yiNumEnergyPercent: 100, yiTypeObj: this.yiType_伏位 });
        this.yiNumMap.set('57', { yiNum: '57', yiType: '伏位', yiNumEnergyPercent: 75, yiTypeObj: this.yiType_伏位 });
        this.yiNumMap.set('75', { yiNum: '75', yiType: '伏位', yiNumEnergyPercent: 75, yiTypeObj: this.yiType_伏位 });
        this.yiNumMap.set('58', { yiNum: '58', yiType: '伏位', yiNumEnergyPercent: 50, yiTypeObj: this.yiType_伏位 });
        this.yiNumMap.set('85', { yiNum: '85', yiType: '伏位', yiNumEnergyPercent: 50, yiTypeObj: this.yiType_伏位 });
        this.yiNumMap.set('59', { yiNum: '59', yiType: '伏位', yiNumEnergyPercent: 30, yiTypeObj: this.yiType_伏位 });
        this.yiNumMap.set('95', { yiNum: '95', yiType: '伏位', yiNumEnergyPercent: 30, yiTypeObj: this.yiType_伏位 });
    }
    setYiSpecialNumMap() {
        const yiSpecialNumMap = new Map();
        //禍害
        yiSpecialNumMap.set('7168', '開店賺錢');
        yiSpecialNumMap.set('712', '講話直接');
        yiSpecialNumMap.set('321', '講話傷人');
        yiSpecialNumMap.set('713', '付出很多');
        yiSpecialNumMap.set('231', '付出少，賺錢較容易');
        //禍害+生氣 : 講話好笑
        yiSpecialNumMap.set('239', '講話好笑');
        yiSpecialNumMap.set('328', '講話好笑');
        //禍害+延年 : 講話有權力
        yiSpecialNumMap.set('234', '講話有權力');
        yiSpecialNumMap.set('467', '講話有權力');
        //六煞
        yiSpecialNumMap.set('166', '持續有情緒');
        yiSpecialNumMap.set('106', '壓抑情續');
        yiSpecialNumMap.set('613', '買房子帶來大錢');
        yiSpecialNumMap.set('612', '女人會讓你破財、店家公司會破財');
        yiSpecialNumMap.set('3617', '情緒來了說話難聽，房子風水出問題');
        //五鬼
        yiSpecialNumMap.set('814', '喜歡動腦筋');
        yiSpecialNumMap.set('798', '業務、容易撞車');
        yiSpecialNumMap.set('1872', '天醫宗教命理、動頭腦、工具類型');
        yiSpecialNumMap.set('8134', '做這個工作會賺錢，能守住');
        yiSpecialNumMap.set('8119', '血光之災、意外延續');
        //絕命
        yiSpecialNumMap.set('121', '容易產生官司，離婚敢分手');
        yiSpecialNumMap.set('484', '容易有官司糾纏');
        yiSpecialNumMap.set('213', '是做大事的人，愈做愈有錢');
        yiSpecialNumMap.set('219', '有理財觀念');
        yiSpecialNumMap.set('214', '破財沒放心上，花錢大方');
        //延年
        yiSpecialNumMap.set('413', '有貴人給錢');
        yiSpecialNumMap.set('416', '貴人讓你抱怨，可以買房');
        yiSpecialNumMap.set('418', '貴人給建議');
        yiSpecialNumMap.set('4187', '貴人給建議會想想');
        yiSpecialNumMap.set('419', '老闆/主管格局');
        //延年
        yiSpecialNumMap.set('3119', '錢財穩定');
        yiSpecialNumMap.set('2019', '同性戀');
        yiSpecialNumMap.set('192', '能量低，壓力大');
        yiSpecialNumMap.set('916', '工作不開心，工作壓力大');
        //天醫
        yiSpecialNumMap.set('1372', '工資愈來愈少，收入不穩定');
        yiSpecialNumMap.set('311', '錢愈賺愈多');
        yiSpecialNumMap.set('133', '錢愈賺愈多');
        yiSpecialNumMap.set('1312', '拼命工作賺錢，但留不住');
        return yiSpecialNumMap;
    }
    getYiTypeByKey(key) {
        switch (key) {
            case '禍害':
                return this.getYiType_禍害();
            case '六煞':
                return this.getYiType_六煞();
            case '五鬼':
                return this.getYiType_五鬼();
            case '絕命':
                return this.getYiType_絕命();
            case '生氣':
                return this.getYiType_生氣();
            case '天醫':
                return this.getYiType_天醫();
            case '延年':
                return this.getYiType_延年();
            case '伏位':
                return this.getYiType_伏位();
            default:
                return new yiType();
        }
    }
    getYiType_禍害() {
        let yiTypeObj = new yiType();
        yiTypeObj.yiType = '禍害';
        yiTypeObj.yiTypeExtend = '伏(害)';
        yiTypeObj.yiBasicLabel = '口才';
        yiTypeObj.yiUrl = 'https://luck231.com/i-chings-eight-magnetic-fields/#ba_zhong_neng_liang_jie_shuo-huo_hai_ci_chang';
        return yiTypeObj;
    }
    getYiType_六煞() {
        let yiTypeObj = new yiType();
        yiTypeObj.yiType = '六煞';
        yiTypeObj.yiTypeExtend = '伏(煞)';
        yiTypeObj.yiBasicLabel = '公關、感情';
        yiTypeObj.yiUrl = 'https://luck231.com/i-chings-eight-magnetic-fields/#ba_zhong_neng_liang_jie_shuo-liu_sha_ci_chang'
        return yiTypeObj;
    }
    getYiType_五鬼() {
        let yiTypeObj = new yiType();
        yiTypeObj.yiType = '五鬼';
        yiTypeObj.yiTypeExtend = '伏(鬼)';
        yiTypeObj.yiBasicLabel = '聰明';
        yiTypeObj.yiUrl = 'https://luck231.com/i-chings-eight-magnetic-fields/#ba_zhong_neng_liang_jie_shuo-wu_gui_ci_chang';
        return yiTypeObj;
    }
    getYiType_絕命() {
        let yiTypeObj = new yiType();
        yiTypeObj.yiType = '絕命';
        yiTypeObj.yiTypeExtend = '伏(命)';
        yiTypeObj.yiBasicLabel = '大起大落';
        yiTypeObj.yiUrl = 'https://luck231.com/i-chings-eight-magnetic-fields/#ba_zhong_neng_liang_jie_shuo-jue_ming_ci_chang';
        return yiTypeObj;
    }
    getYiType_生氣() {
        let yiTypeObj = new yiType();
        yiTypeObj.yiType = '生氣';
        yiTypeObj.yiTypeExtend = '伏(生)';
        yiTypeObj.yiBasicLabel = '樂觀';
        yiTypeObj.yiUrl = 'https://luck231.com/i-chings-eight-magnetic-fields/#ba_zhong_neng_liang_jie_shuo-sheng_qi_ci_chang';
        return yiTypeObj;
    }
    getYiType_天醫() {
        let yiTypeObj = new yiType();
        yiTypeObj.yiType = '天醫';
        yiTypeObj.yiTypeExtend = '伏(天)';
        yiTypeObj.yiBasicLabel = '財富、老闆';
        yiTypeObj.yiUrl = 'https://luck231.com/i-chings-eight-magnetic-fields/#ba_zhong_neng_liang_jie_shuo-tian_yi_ci_chang';
        return yiTypeObj;
    }
    getYiType_延年() {
        let yiTypeObj = new yiType();
        yiTypeObj.yiType = '延年';
        yiTypeObj.yiTypeExtend = '伏(延)';
        yiTypeObj.yiBasicLabel = '理財';
        yiTypeObj.yiUrl = 'https://luck231.com/i-chings-eight-magnetic-fields/#ba_zhong_neng_liang_jie_shuo-yan_nian_ci_chang';
        return yiTypeObj;
    }
    getYiType_伏位() {
        let yiTypeObj = new yiType();
        yiTypeObj.yiType = '伏位';
        yiTypeObj.yiTypeExtend = '伏位';
        yiTypeObj.yiBasicLabel = '穩定';
        yiTypeObj.yiUrl = 'https://luck231.com/i-chings-eight-magnetic-fields/#ba_zhong_neng_liang_jie_shuo-fu_wei_ci_chang';
        return yiTypeObj;
    }
    getYiNumResult(input2Digits) {
        return "XXX";
        //return this.yiNumMap.get(input2Digits);
    }
    calcResult(socialId) {
        console.log("calcResult...");
        console.log(socialId);
        let socialIdResult;
        if (socialId) {
            socialIdResult = this.convert(socialId);
        }
        else {
            socialIdResult = new YiNumInfo();
        }
        console.log(socialIdResult);
        // if(phoneNumber){
        //   personInfo.phoneNumberResult = this.convert(personInfo.phoneNumber);
        // }else{
        //   personInfo.phoneNumberResult = new YiNumInfo();
        // }
        return socialIdResult;
    }
    convert(input) {
        console.log('convert...input', input);
        let result = new YiNumInfo();
        result.input = input;
        result.convertInput = input.toUpperCase(); //upper case
        result.convertInput = result.convertInput.replace('-', ''); //remove "-"
        let inputAry = result.convertInput.split("");
        let inputChar2NumDigitAry = [];
        let inputChar2NumAry = [];
        let convertTmpAry = [];
        let convert2DigitsAry = [];
        inputAry.forEach(function (char) {
            if (!isNaN(char)) {
                convertTmpAry.push(char);
                inputChar2NumDigitAry.push(1);
                inputChar2NumAry.push(char);
            }
            else {
                let charCode = char.charCodeAt();
                if (charCode >= 65) {
                    charCode = charCode - 64;
                    inputChar2NumAry.push(charCode.toString());
                    let tmpAry = charCode.toString().split("");
                    inputChar2NumDigitAry.push(tmpAry.length);
                    tmpAry.forEach(function (tmpChar) {
                        convertTmpAry.push(tmpChar);
                    });
                }
            }
        });
        result.tmpInputNumStr = convertTmpAry.join("");
        result.tmpInputAry = convertTmpAry;
        result.tmpInputChar2NumDigitAry = inputChar2NumDigitAry;
        result.tmpInputChar2NumAry = inputChar2NumAry;

        let targetPositionAry = [];
        const targetPositionKeyReverseOrderAry = ['子女,財富,創業','自己','夫妻','夫妻','父母,運氣','官運']
        convertTmpAry.forEach(function (num, index) {
            if(convertTmpAry.length-1-index<=targetPositionKeyReverseOrderAry.length-1){
                targetPositionAry.push(targetPositionKeyReverseOrderAry[convertTmpAry.length-1-index])
            }else{
                targetPositionAry.push("")
            }
        });
        result.targetPositionAry= targetPositionAry;

        //convert to 2Digits
        convertTmpAry.forEach(function (num, index) {
            if (index > 0) {
                convert2DigitsAry.push(convertTmpAry[index - 1] + num);
            }
        });
        result.tmpInputAry = convert2DigitsAry;
        result.tmpOutputAry = [];
        var lastNonXX;
        result.hiddenOutputAry = [];

        convert2DigitsAry.forEach((item, index) => {
            console.log("item", item);
            console.log("item currentset", this.yiNumMap.get(item));
            var currentSet = Object.assign({}, this.yiNumMap.get(item));
            var currentYiNum = currentSet.yiNum;
            if ((lastNonXX == undefined || (lastNonXX != undefined && currentSet.yiType != lastNonXX.yiType)) && currentSet.yiType != '伏位') {
                lastNonXX = Object.assign({}, currentSet);
            }
            else if (currentSet.yiType == '伏位' && lastNonXX != undefined) {
                currentSet = Object.assign({}, lastNonXX);
                currentSet.yiNum = currentYiNum;
                currentSet.isYiNumExtend = true;
            }
            result.tmpOutputAry.push(currentSet);
        });


        result.tmpInputAry.forEach((item, index) => {
            console.log("tmpInputAry item", item);


            if (result.tmpInputAry[index][0] === '5' || result.tmpInputAry[index][0] === '0') {
                let newStr = '';
                if (index > 0) {
                    newStr = result.tmpInputAry[index - 1][0] + result.tmpInputAry[index][1];
                    var currentSet = Object.assign({}, this.yiNumMap.get(newStr));
                    var currentYiNum = currentSet.yiNum;

                    if (currentSet.yiType == '伏位') {
                        currentSet = Object.assign({},);
                    }
                    result.hiddenOutputAry.push(currentSet);
                }else{
                    result.hiddenOutputAry.push({});
                }
            } else {
                result.hiddenOutputAry.push({});
            }
           
        });

        console.log("hiddenOutputAry",result.hiddenOutputAry);

        result.resultAry = result.tmpOutputAry;
        result.resultStr = result.resultAry.map(item => item.yiType).toString();
        result.resultYiTypes = this.getResultYiTypes(result.resultAry);
        return result;
    }

    getResultYiTypes(resultAry) {
        //找出現次數最多的
        let resultYiType = new yiType();
        let yiTypeAry = resultAry.map((item) => item.yiType);
        let tempMap = yiTypeAry.reduce((map, value) => {
            if (map.has(value)) {
                let cnt = map.get(value) + 1;
                map.set(value, cnt);
            }
            else {
                map.set(value, 1);
            }
            return map;
        }, new Map());
        let mapSort = new Map([...tempMap.entries()].sort((a, b) => b[1] - a[1]));
        let yi = ([...mapSort][0][0]);


        // 1. 先將 tempMap 轉換為陣列並排序
        let sortedEntries = [...tempMap.entries()].sort((a, b) => b[1] - a[1]);

        // 2. 獲取最大值
        let maxValue = sortedEntries[0][1];
        console.log("maxValue",maxValue);

        // 3. 收集所有具有最大值的鍵
        let keysWithMaxValue = [...tempMap].filter(([key, value]) => value === maxValue).map(([key]) => key);
        console.log("keysWithMaxValue",keysWithMaxValue);

        let resultYiTypes = keysWithMaxValue.map(key => this.getYiTypeByKey(key));

       
        return resultYiTypes;
    }



    getSpecialNumAry(resultAry) {
        const specialNumAry = new Array();
        return specialNumAry;
    }
}
