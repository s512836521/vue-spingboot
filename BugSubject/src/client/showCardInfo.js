//one卡特色卡板字段
var oneCardType = "";

export default {

    //卡品牌展示
    //卡板、选中展示、
    showCardBrand (cardId,cardBrand,List){
    
        var cardVersionInfoList = List;
        //选中初始化
        var cardC = document.getElementById('cardC');
        var cardM = document.getElementById('cardM');
        var cardV = document.getElementById('cardV');
        var cardCM = document.getElementById('cardCM');
        var cardCV = document.getElementById('cardCV');
    
        cardC.className = "i_nomal";
        cardM.className = "i_nomal";
        cardV.className = "i_nomal";
        cardCM.className = "i_nomal";
        cardCV.className = "i_nomal";
    
        //卡类选中
        var cardP = document.getElementById('cardP');
        var cardJ = document.getElementById('cardJ');
        var cardB = document.getElementById('cardB');
        var cardT = document.getElementById('cardT');
    
        cardP.className = "i_nomal";
        cardJ.className = "i_nomal";
        cardB.className = "i_nomal";
        cardT.className = "i_nomal";
    
        //卡别选中初始化
        var cardZ = document.getElementById('cardZ');
        var cardZF = document.getElementById('cardZF');
    
        cardZ.className = "i_nomal";
        cardZF.className = "i_nomal";
    
        //清除选中 one卡
        if(cardId != "1042"){ 
            for(var i=0;i<cardVersionInfoList.length;i++){
                var kcoll = cardVersionInfoList[i];
        
                var liId = document.getElementById(kcoll.cardVersionId);
                liId.className = "";
        
            }
        }
    
        //选中
        var ui = document.getElementById(cardBrand);
        ui.className = "i_nomal i_sel";
    
        //卡板值
        var cardBandType;
        if(cardBrand == "cardC"){
            cardBandType = "C";
        }else if(cardBrand == "cardM"){
            cardBandType = "M";
        }else if(cardBrand == "cardV"){
            cardBandType = "V";
        }else if(cardBrand == "cardCM"){
            cardBandType = "C";
        }else if(cardBrand == "cardCV"){
            cardBandType = "C";
        }
        
        //卡类、卡别展示
        analysiscardVersionList(cardBandType,cardVersionInfoList);
        
        return cardBandType;
    },
    
    //卡类、卡别显示
    analysiscardVersionList(cardBandType,cardVersionInfoList){
    
        //卡类
        var cardP = document.getElementById('cardP');
        var cardJ = document.getElementById('cardJ');
        var cardB = document.getElementById('cardB');
        var cardT = document.getElementById('cardT');
    
        cardP.style.display = "none";
        cardJ.style.display = "none";
        cardB.style.display = "none";
        cardT.style.display = "none";
    
        //卡别
        var cardZ = document.getElementById('cardZ');
        var cardZF = document.getElementById('cardZF');
    
        cardZ.style.display = "none";
        cardZF.style.display = "none";
    
        for(i=0 ; i < cardVersionInfoList.length ; i++){
            var kcoll = cardVersionInfoList[i];
    
            if(kcoll.cardBrand == cardBandType){
                //展示卡类型
                if(kcoll.cardClass == 'P'){
                    cardP.style.display = "";
                }else if(kcoll.cardClass == 'J'){
                    cardJ.style.display = "";
                }else if(kcoll.cardClass == 'B'){
                    cardB.style.display = "";
                }else if(kcoll.cardClass == 'T'){
                    cardT.style.display = "";
                }
                
            }
        }
    
    },
    
    //卡类选中
    changeCardLevel(cardId, cardBrand, cardClass, cardVersionInfoList){
    
        //卡别
        var cardZ = document.getElementById('cardZ');
        var cardZF = document.getElementById('cardZF');
    
        cardZ.className = "i_nomal";
        cardZF.className = "i_nomal";
    
        cardZ.style.display = "none";
        cardZF.style.display = "none";
    
        //先初始化
        var cardP = document.getElementById('cardP');
        var cardJ = document.getElementById('cardJ');
        var cardB = document.getElementById('cardB');
        var cardT = document.getElementById('cardT');
    
        cardP.className = "i_nomal";
        cardJ.className = "i_nomal";
        cardB.className = "i_nomal";
        cardT.className = "i_nomal";
    
        var cardLevel ;
        if(cardClass == "cardP"){
            cardP.className = "i_nomal i_sel";
            cardLevel = "P";
        }else if(cardClass == "cardJ"){
            cardJ.className = "i_nomal i_sel";
            cardLevel = "J";
        }else if(cardClass == "cardB"){
            cardB.className = "i_nomal i_sel";
            cardLevel = "B";
        }else if(cardClass == "cardT"){
            cardT.className = "i_nomal i_sel";
            cardLevel = "T";
        }
    
        //展示卡别
    
        for(i=0 ; i < cardVersionInfoList.length ; i++){
            var kcoll = cardVersionInfoList[i];
            if( kcoll.cardBrand == cardBrand && kcoll.cardClass == cardLevel){
                if(kcoll.cardStyle == 'Z'){
                    cardZ.style.display = "";
                }else if(kcoll.cardStyle == 'F'){
                    cardZF.style.display = "";
                }
            }
        }
        
    //    if(cardId != "1042"){  
    
    //    }
    
        return cardLevel;
    },
    
    //卡别选中
    changeCardStyle(cardStyle){
    
        var cardZ = document.getElementById('cardZ');
        var cardZF = document.getElementById('cardZF');
    
        cardZ.className = "i_nomal";
        cardZF.className = "i_nomal";
    
        var style;
        if(cardStyle == "cardZ"){
            cardZ.className = "i_nomal i_sel";
            style = "Z";
        }else if(cardStyle == "cardZF"){
            cardZF.className = "i_nomal i_sel";
            style = "ZF";
        }
        return style;
    },
    
    
    //动态加载图片
    atterImg(cardId , cardVersionInfoList){
    
        var Oul = document.getElementById('cardCImgList');
        Oul.style.width = 270*(cardVersionInfoList.length) + 'px';
    
        for(var i=0;i<cardVersionInfoList.length;i++){
            var kcoll = cardVersionInfoList[i];
            var ImgList = document.getElementById('cardCImgList');
            // var li = new li();
            var li = document.createElement("li");
            li.id = kcoll.cardVersionId;
            var img = document.createElement("img");
            img.src = "static/images/" + kcoll.pictureName;
            li.appendChild(img);
            ImgList.appendChild(li);
        }
    
    },
    
    
    //清除和选中图片
    checkedImg(cardId, cardBrand, cardClass, cardStyle, cardVersionInfoList){
    
        var Oul = document.getElementById('cardCImgList');
        var Ospan = document.getElementById('huadong');
    
        var style = cardStyle;
        if(cardStyle == "B"){
            style = "Z";
        }
    
        if(cardId != "1042"){
    
            for(var i=0;i<cardVersionInfoList.length;i++){
                var kcoll = cardVersionInfoList[i];
        
                var liId = document.getElementById(kcoll.cardVersionId);
                liId.className = "";
        
            }
            if(cardClass=="" && cardStyle == ""){
                return;
            }
    
            for(var i=0;i<cardVersionInfoList.length;i++){
                var kcoll = cardVersionInfoList[i];
        
                if(cardBrand == kcoll.cardBrand && cardClass == kcoll.cardClass && style == kcoll.cardStyle ){
                    var liId = document.getElementById(kcoll.cardVersionId);
                    liId.className = "sel";
                    Oul.style.left = '-' + i*202 + 'px';
                    Ospan.style.left = '+' + i*100 + 'px';
                    
                }
        
            }
        }
    
    },
    
    //one卡图片加载
    atterImgOne(cardId , cardVersionInfoList , cardVersionClassInfoList){
    
        var Oul = document.getElementById('cardCImgList');
        Oul.style.width = 270*(cardVersionClassInfoList.length) + 'px';
    
        for(var i=0;i<cardVersionClassInfoList.length;i++){
            var kcoll = cardVersionClassInfoList[i];
            var ImgList = document.getElementById('cardCImgList');
            // var li = new li();
            var li = document.createElement("li");
            li.id = kcoll.flowNo;
            
            var a = document.createElement("a");
            a.id = kcoll.cardVersion;
            
            //one卡选中项
            a.onclick = function() { selectOneCard( this.id, cardVersionClassInfoList )};
    
            var img = document.createElement("img");
            img.src = "static/images/" + kcoll.pictureName;
    
            a.appendChild(img);
            li.appendChild(a);
            ImgList.appendChild(li);
        }
    
    },
    
    //one卡选中项
    selectOneCard(cardVersion , cardVersionClassInfoList){
    
        for(i=0;i<cardVersionClassInfoList.length;i++){
            var kcoll = cardVersionClassInfoList[i];
    
            var liId = document.getElementById(kcoll.flowNo);
            liId.className = "";
    
            if(cardVersion == kcoll.cardVersion){
                var liId = document.getElementById(kcoll.flowNo);
                liId.className = "sel";
    
                oneCardType = cardVersion;
            }
    
        }
    },
    
    
    //外币卡展示项
    showforeignCard(cardBrand,List){
    
        var foreignCard = document.getElementById('foreignCard');
        var rebateCard_S = document.getElementById('rebateCard_S');
        var rebateCard_G = document.getElementById('rebateCard_G');
        // var foreignCardImg = document.getElementById('foreignCardImg');
        
        var cardBandType;
        if(cardBrand == "cardCM"){
            cardBandType = "CM";
            foreignCard.style.display = "";
        }else if(cardBrand == "cardCV"){
            cardBandType = "CV";
            foreignCard.style.display = "";
        }else {
            cardBandType = "";
            foreignCard.style.display = "none";
        }
    
        rebateCard_S.style.display = "none";
        rebateCard_G.style.display = "none";
    
        for(i=0; i<List.length; i++){
            var kcoll = List[i];
    
            if( cardBandType == "CM"){
                if(kcoll.cardBrand == "1" && kcoll.cardClass == "1"){
                    rebateCard_G.style.display = "block";
                }else if(kcoll.cardBrand == "1" && kcoll.cardClass == "2"){
                    rebateCard_S.style.display = "block";
                }
            }else if(cardBandType == "CV"){
                if(kcoll.cardBrand == "2" && kcoll.cardClass == "1"){
                    rebateCard_G.style.display = "block";
                }else if(kcoll.cardBrand == "2" && kcoll.cardClass == "2"){
                    rebateCard_S.style.display = "block";
                }
            }
        }
    
        return cardBandType;
    },
    
    
    //显示外币卡图片
    showforeignCardImg(rebateCard,foreignInternationalCard,List){
    
        var foreignCardImg = document.getElementById('foreignCardImg');
        var rebateCardType;
        var foreignInternationalCardType;
    
        if(rebateCard == "S"){
            rebateCardType = "2";
        }else if(rebateCard == "G"){
            rebateCardType = "1";
        }
    
    
        if(foreignInternationalCard == "CM"){
            foreignInternationalCardType = "1";
        }else if(foreignInternationalCard == "CV"){
            foreignInternationalCardType = "2";
        }
    
        for(i=0; i<List.length; i++){
            var kcoll = List[i];
            if(kcoll.cardBrand == foreignInternationalCardType && kcoll.cardClass == rebateCardType){
                foreignCardImg.src = "static/images/" + kcoll.pictureName;
            }
        }
    
        if(rebateCard == "S"){
            return "S";
        }else{
            return "";
        }
    },
    
    //爱心（希望卡）展示项
    showHopeCard(cardId){
    
        var selectHopeCard = document.getElementById('selectHopeCard');
        var hopeCardNo = document.getElementById('hopeCardNo');
        var hopeCardMoney = document.getElementById('hopeCardMoney');
    
        if(cardId == "1001"){
            selectHopeCard.style.display="";
            hopeCardNo.innerHTML = "一";
            hopeCardMoney.innerHTML = "0";
        }else{
            selectHopeCard.style.display="none";
        }
    },
    
    //宠物卡 展示项
    showpetName(cardId){
        var petName = document.getElementById('petName');
    
        if(cardId == "1022"){
            petName.style.display="";
        }else{
            petName.style.display="none";
        }
    },
    
    
    //粤通卡 展示项
    showYueTong(cardId){
        var carColour = document.getElementById('carColour');  //车身颜色
        var carSeat = document.getElementById('carSeat');      //车座位数
        var carModel = document.getElementById('carModel');    //品牌/型号
    
        if(cardId == "1015"){
            carColour.style.display="";
            carSeat.style.display="";
            carModel.style.display="";
        }
    },
    
    //苏通卡 展示项
    showSuTong(cardId){
    
        var carColour = document.getElementById('carColour');  //车身颜色
        var carSeat = document.getElementById('carSeat');      //车座位数
        var carDiscernNo = document.getElementById('carDiscernNo');  //车辆识别号
    
        if(cardId == "1023"){
            carColour.style.display="";
            carSeat.style.display="";
            carDiscernNo.style.display="";
        }
    
    }
}
