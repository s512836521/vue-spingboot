var AREA_CODE={11:"北京",12:"天津",13:"河北",14:"山西",15:"内蒙古",21:"辽宁",22:"吉林",23:"黑龙江 ",31:"上海",32:"江苏",33:"浙江",34:"安徽",35:"福建",36:"江西",37:"山东",41:"河南",42:"湖北 ",43:"湖南",44:"广东",45:"广西",46:"海南",50:"重庆",51:"四川",52:"贵州",53:"云南",54:"西藏 ",61:"陕西",62:"甘肃",63:"青海",64:"宁夏",65:"新疆",71:"台湾",81:"香港",82:"澳门",91:"国外 "};
var DATE_FORMAT = "yyyymmdd";
var REGEXP_FORMAT = new RegExp(/(yyyy|mm|dd|hh|mi|ss|ms)/gi);
var REGEXP_INTEGER  = new RegExp(/^[0-9]+$/);

export default {
    //身份证校验
    isIDNumber(s){
    
        //检查长度
        switch(s.length){
            case 15: case 18:{
                break;
            }
            default:{
                return false;
            }
        }
    
        //检查是否为数字
        var testInt = (s.length == 15) ? s : s.substr(0,17);
        if(!REGEXP_INTEGER.test(testInt)){
            return false;
        }
    
        //检查区域代码
        var areaCode = parseInt(s.substr(0,2));
        if(!AREA_CODE[areaCode]){
            return false;
        }
    
        //检查生日是否合法
        var birthDay = (s.length == 15) ? ("19" + s.substr(6,6)) : s.substr(6,8);
        if(!this.isDate(birthDay,DATE_FORMAT)){
            return false;
        }
    
        //检查校验位是否合法
        if(s.length == 18){
            var testNumber = (parseInt(s.charAt(0))+parseInt(s.charAt(10))) * 7
                + (parseInt(s.charAt(1))+parseInt(s.charAt(11))) * 9
                + (parseInt(s.charAt(2))+parseInt(s.charAt(12))) * 10
                + (parseInt(s.charAt(3))+parseInt(s.charAt(13))) * 5
                + (parseInt(s.charAt(4))+parseInt(s.charAt(14))) * 8
                + (parseInt(s.charAt(5))+parseInt(s.charAt(15))) * 4
                + (parseInt(s.charAt(6))+parseInt(s.charAt(16))) * 2
                + (parseInt(s.charAt(7))) * 1
                + (parseInt(s.charAt(8))) * 6
                + (parseInt(s.charAt(9))) * 3;
            
            if(s.charAt(17)!="10x98765432".charAt(testNumber % 11) ){
                return false;
            }
        }
    
        return true;
    },
    
    isDate(dateString,format){
        var year,month,day;
        format = format || DATE_FORMAT;
        var matchArray = format.match(REGEXP_FORMAT);
        for(var i = 0;i<matchArray.length;i++){
            var postion = format.indexOf(matchArray[i]);
            switch(matchArray[i]){
                case "yyyy":{
                    var yyyyStr = dateString.substr(postion,4);
                    if(!REGEXP_INTEGER.test(yyyyStr)){
                        return false;
                    }
                    year = parseInt(yyyyStr,10);
                    break;
                }
                case "mm":{
                    var mmStr = dateString.substr(postion,2);
                    if(!REGEXP_INTEGER.test(mmStr)){
                        return false;
                    }
                    month = parseInt(mmStr,10) - 1;
                    break;
                }
                case "dd":{
                    var ddStr = dateString.substr(postion,2);
                    if(!REGEXP_INTEGER.test(ddStr)){
                        return false;
                    }
                    day = parseInt(ddStr,10);
                    break;
                }
            }
        }
        var dateTest = new Date(year,month,day);
        var testYear = dateTest.getFullYear();
        var testMonth = dateTest.getMonth();
        var testDay = dateTest.getDate();
        return (year == testYear && month == testMonth && day == testDay)
    },
    
    //性别、生日页面展示
    show_Sex_Birthday(s){
        var birthday = "";
        if(s.length == 18){
            birthday = s.substring(6,14);
            if(s.charAt(s.length-2)%2 == 0){
                var sex = "女";
            }else{
                var sex = "男";
            }
        }else{
            birthday = "19"+s.substring(6,12);
            if(s.charAt(s.length-1)%2 == 0){
                var sex = "女";
            }else{
                var sex = "男";
            }
        }
        var showPresonInfo =  " 性别："+ sex + "   生日："+ birthday.substring(0,4) + "年" + birthday.substring(4,6)  +"月" + birthday.substring(6,8) + "日";
        return showPresonInfo;
    },
    
    //获取性别
    getSex(s){
        var birthday = "";
        if(s.length == 18){
            birthday = s.substring(6,14);
            if(s.charAt(s.length-2)%2 == 0){
                var sex = "1";
            }else{
                var sex = "0";
            }
        }else{
            birthday = "19"+s.substring(6,12);
            if(s.charAt(s.length-1)%2 == 0){
                var sex = "1";
            }else{
                var sex = "0";
            }
        }
        return sex;
    },
    
    //获取生日
    getBirthday(s){
        var birthday = "";
        if(s.length == 18){
            birthday = s.substring(6,14);
            if(s.charAt(s.length-2)%2 == 0){
                var sex = "女";
            }else{
                var sex = "男";
            }
        }else{
            birthday = "19"+s.substring(6,12);
            if(s.charAt(s.length-1)%2 == 0){
                var sex = "女";
            }else{
                var sex = "男";
            }
        }
        return birthday.substring(0,4) + birthday.substring(4,6)  + birthday.substring(6,8);
    },
    
    //时间个位数转换2位
    pad2(n){
        return (n < 10 ? '0' + n : n);
    },
    
    //获取当前时间
    nowTime(){
        var nowtime = new Date();
        return nowtime.getFullYear().toString() + this.pad2(nowtime.getMonth()+1) + this.pad2(nowtime.getDate()) + this.pad2(nowtime.getHours()) + this.pad2(nowtime.getMinutes()) + this.pad2(nowtime.getSeconds());
    },
    
    /**
     * 卡规则判断 2011年7月26日修改by zzc, 增加非1或685800开头的账号判断，如果不符合卡规则，则直接判断账号输入错误（e）
     * 返回一个对象，对象有卡归属和卡类别两个属性，如下： { cardOwner : "0", //卡归属： “0” 广东发展银行，“s”
     * 可能为广发折对私账号，“g”可能为广发对公账户，“x” 未知 cardType : "0" //卡类别： “0” 借记卡， “1” 信用卡对私账号,
     * “2”信用卡对公账号， “x” 未知, “e” 账号错误 }
     */
    judgeAccRole2(accNo){
        var rule = {
            cardOwner : "x",
            cardType : "x"
        };
        if(this.isString(accNo)){
            // 借记卡bin
            var bin1 = [{bin:"622568",len:"19"}, {bin:"9111",len:"19"}, {bin:"685800",len:"18"}, {bin:"685800",len:"19"},{bin:"621462",len:"19"}];
            // 信用卡bin
            var bin2 = [ 
                        "406365", "406366", 
                        "428911",
                        "436768", "436769","436770", "436771", 
                        "487013",
                        "491032", "491033", "491034", "491035", "491036", "491037", "491038", "493427", 
                        "518364", 
                        "520152", "520382", "523961", "523966", "528931", 
                        "541709", "541710", "548844", 
                        "552794", "558894",		           		          		          
                        "622555", "622556", "622557", "622558", "622559", "622560", "625071", "625072", "625073", "628259", "628260",		            
                        // 未发卡
                        "520152", "520382", "622555", "622556"
                        ];
            // 存折或对公账户
            var bin3 = [{bin:"1",len:"18"}];
            
            var accPrefix1 = accNo.substring(0,6);
            var accPrefix2 = accNo.substring(0,4);
            var accPrefix3 = accNo.substring(0,1);
            var accPrefix4 = accNo.substring(6,9);
            
            // 判断是否为广发借记卡
            for( var i = 0, len = bin1.length; i < len; i++ ){
                if( (accPrefix1 == bin1[i].bin || accPrefix2 == bin1[i].bin) 
                        && (accNo.length == parseInt(bin1[i].len)) ) {
                    rule.cardOwner = "0";
                    rule.cardType = "0";
    
                    return rule;
                }else if(accPrefix1 != '685800' && (accPrefix1 == bin1[i].bin || accPrefix2 == bin1[i].bin)&& (accNo.length != parseInt(bin1[i].len))){
                    rule.cardOwner = "0";
                    rule.cardType = "e";
    
                    return rule;
                }
            }
            // 判断是否为广发信用卡
            for( var i = 0, len = bin2.length; i < len; i++ ){
                if( accPrefix1 == bin2[i] && accNo.length == 16 ){
                    rule.cardOwner = "0";
                    if(accNo.charAt(6) == '0'){
                        rule.cardType = "2";
                    }else{
                        rule.cardType = "1";
                    }
                    return rule;
                }else if(accPrefix1 == bin2[i] && accNo.length != 16){
                        rule.cardOwner = "0";
                        rule.cardType = "e";
                    return rule;
                }
            }
            // 判断是否为广发折或者对公账户
            for( var i = 0, len = bin3.length; i < len; i++ ){
                if( accPrefix3 == bin3[i].bin  && (accNo.length == parseInt(bin3[i].len)) ) {
                    if((500*1<=accPrefix4*1)&&(accPrefix4*1<=900*1)){
                        rule.cardOwner = "g";
                    }else{
                        rule.cardOwner = "s";
                    }
                    rule.cardType = "x";
                }
                    return rule;
            }
        }
        return rule;
    },
    
    
    /**
     * 验证还款设置 个人结算账户（本行）
    */
    checkAutoPayAcc(accNo){
        var accountNo = accNo;
        if(accountNo){
            if(!(new RegExp(/^[0-9]{1,19}$/).test(accountNo))){
                return false;
            }
            if(this.startsWith(accountNo,"1")||this.startsWith(accountNo,"6")){
                if(accountNo.length > 10){
                    var num1 = accountNo.substring(8,10);
                    if(parseInt(num1) >= 21 && parseInt(num1) <= 60){
                        var ret = this.checkAccountNo(accountNo);
                        if(ret){
                            return true;
                        }else{
                            
                            return false;
                        }
                    }else{
                        
                        return false;
                    }
                }else{
                    
                    return false;
                }
                
            }else if(this.startsWith(accountNo,"9")){
                if(accountNo.length > 6){
                    var num2 = accountNo.substring(4,6);
                    if(parseInt(num2) >= 21 && parseInt(num2) <= 60){
                        var ret = this.checkAccountNo(accountNo);
                        if(ret){
                            return true;
                        }else{
                            
                            return false;
                        }
                    }else{
                        
                        return false;
                    }
                }else{
                    
                    return false;
                }
                
            }else{
                //判断是否为本行借记卡
                var ret = this.checkAccountNo(accountNo);
                if(ret){
                    return true;
                }else{
                    
                    return false;
                }
            }
        }
    },
    
    
    /**
    * 对还款设置中他行账户进行验证（跨行）
    * */
    checkrRecAccount(accNo){
        var debitCardNo = accNo;//借记卡账号
        if((new RegExp(/^[0-9]{1,7}$/).test(debitCardNo))){
            return false;
        }
        if(!(new RegExp(/^[0-9]{8,25}$/).test(debitCardNo))){
            return false;
        }
        var cardBinFlag = false;
        var cardInfo = this.judgeAccRole2(debitCardNo);
        var bankType = cardInfo.cardOwner;
        var cardType = cardInfo.cardType;
        if(((bankType=='0'||bankType=='s'||bankType=='g') && cardType=='0') || debitCardNo.length<11 || debitCardNo.length>25){
            return false;
        }
        
        return cardBinFlag;
    },
    
    //卡宾校验
    startsWith(obj,str){
    
        if(str == null||str==""||this.length==0||str.length>obj.length){
            return false;
        }
    
        if(obj.substr(0,str.length) == str){
            return true;
        }else{
            return false;
        }
    
        return true;
    },
    
    //卡宾校验
    checkAccountNo(accountNo){
        var params = this.judgeAccRole2(accountNo);
    
        if(params.cardOwner == '0'||params.cardOwner == "s"||params.cardOwner=="g" && params.cardType == "0"){
           return true; 
        }else{
           return false;
        }
    },
    
    isString(str){
        return typeof str == 'string' && str.constructor == String;
    },
    //字段校验（公共方法）
    checkString(){
    
    },
    isChinese(val){
        let reg = new RegExp("^[\u4e00-\u9fa5]+$")
        return reg.test(val)
    },
    isChiEngNum(val){
        let reg = new RegExp("^[\u4e00-\u9fa5\a-zA-Z0-9]+$")
        return reg.test(val)
    },
    isChineseName(val){
        let reg = new RegExp("^[\u4e00-\u9fa5]+\·*[\u4e00-\u9fa5]+$")
        return reg.test(val)
    },
    isPhone(val){
        let reg = new RegExp("^(13|14|15|16|17|18|19)[0-9]{9}$")
        return reg.test(val)
    }
}