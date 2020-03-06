<template>
  <!-- <router-link :to="{name:'bugfill', query: {type: '1'}}" tag="li">  -->
  <div class="hello">
	  <div class="main">
      <div class="kbox">
        <div class="dtitle"><span ref="cardName"></span>  </div>
      </div>
      <div class="card_info" >
          <span class="name">所属客户：<i class="c_red">*</i></span> 
          <span class="show_div0" style="position:relative">
            <el-select v-model="form.area" class="selbox">
             <el-option
									v-for="item in areaList"
									:key="item.areaCode"
									:label="item.areaName"
									:value="item.areaCode">
								</el-option>
            </el-select>
          </span>

          <span class="name">所属系统：<i class="c_red">*</i></span> 
          <span class="show_div0" style="position:relative">
            <el-select v-model="form.systematic" class="selbox">
              <el-option
									v-for="item in systematicList"
									:key="item.sysCode"
									:label="item.sysName"
									:value="item.sysCode">
								</el-option>
            </el-select>
          </span>

          <span class="name">问题等级：<i class="c_red">*</i></span> 
          <span class="show_div0" style="position:relative">
            <el-select v-model="form.poplv" class="selbox" >
              <el-option
									v-for="item in poplvList"
									:key="item.popCode"
									:label="item.popName"
									:value="item.popCode">
								</el-option>
            </el-select>
          </span>
      </div>
      <div class="card_info" style="margin-top:10px">
        <div style="float:left; margin-top:10px">
          <span class="name" >问题描述：<i class="c_red">*</i></span> 
        </div>
        <div > 
          <el-input type="textarea" v-model="form.popmessage"  class="input01"  :autosize="{ minRows: 2, maxRows: 8}" maxlength="3000" placeholder="详细的问题描述" />   
        </div>
      </div>
      <div class="card_info" style="margin-top:10px">
          <span class="name">问题接收人：<i class="c_red">*</i></span> 
          <span class="show_div0" style="position:relative">
            <el-select v-model="form.popreceiver" class="selbox" >
              <el-option
									v-for="item in popreceiverList"
									:key="item.popreceiverCode"
									:label="item.popreceiverName"
									:value="item.popreceiverCode">
								</el-option>
            </el-select>
          </span>
      </div>
      <div class="card_info" style="margin-top:10px">
          <span class="name">问题提交人：<i class="c_red">*</i> </span> 
          <el-input  v-model="form.submitpop" placeholder="请填写" :maxlength="10" class="input02" style="margin-right:40px"></el-input>
          <span class="name">提交人电话：<i class="c_red">*</i> </span>
          <el-input  v-model="form.submitpoptel" placeholder="请填写" :maxlength="11" class="input02" ></el-input>
      </div>
      <div class="card_info" style="margin-top:10px">
          <span class="name">问题记录时间：<i class="c_red">*</i> </span> 
          <el-date-picker v-model="form.createdate" type="date" placeholder="选择日期" style="margin-left:12px" value-format="yyyyMMdd">
          </el-date-picker>
      </div>
      <div class="card_info" style="margin-top:10px">
        <div class="message-btn-submit-box">
					<el-button class="message-btn-submit" @click="submit()">提交</el-button>
				</div>
      </div>
	  </div>
    <!-- <tips></tips> -->
  </div>
  <!-- </router-link>  -->
</template>

<script>

export default {
    name: 'bugfillPage',
    components:{

    },
    data() {
        return {
            year : "",
            month : "",
            date : "",
            subdate : "",
            areaList:{},
            systematicList:{},
            poplvList:[
              { popCode:"A",popName:"A"},
              { popCode:"B",popName:"B"},
              { popCode:"C",popName:"C"},
              { popCode:"D",popName:"D"},
            ],
            popreceiverList:{},
            form:{
                area : "",      //所属客户
                systematic:"",  //所属系统
                poplv:"",       //问题等级
                popmessage:"",  //问题描述
                popreceiver:"",  //问题接收人
                submitpop:"",    //问题提交人
                submitpoptel:"", //提交人电话
                createdate:"",   //问题记录时间
                subdate: ""  //提交时间
            }
        };
    },
    mounted(){
        let _this = this;
        _this.year = (new Date()).getFullYear() + "";
        _this.month= (new Date()).getMonth() + 1;
        if(_this.month > 0 || _this.month < 9){
          _this.month = "0" + _this.month
        }
        _this.date = (new Date()).getDate();
         if(_this.date > 0 || _this.date < 9){
          _this.date = "0" + _this.date
        }
        _this.form.subdate = _this.year + _this.month + _this.date;

        let params = {
        }
        client.request('queryAllTestNames',params).then(res => {   //test 为接口名称 保存
        console.log(res)     //返回,
            _this.areaList = res.issueAreaInfoList;
            _this.systematicList = res.issueSysInfoList;
            _this.popreceiverList = res.issueReceiverInfoList;
        })
    },
    // watch: {
    //   '$route'(to , from) {
    //       console.log(1)
    //       console.log(this.$route)
    //   },
    // },
    methods: { 
      submit() {
      let params = this.form
      console.log(params)
      client.request('insertBugs',params).then(res => {   //test 为接口名称 保存
        console.log(res)     //返回
        let errorCode = res.errorCode;
        if(errorCode != "0"){
            alert(errorMsg);
        }else{
            alert("成功");
            // this.$router.push({name: 'message_success2',params:{aa:"123"}});  //跳转路径
            } 
        }) 
      },
      //  上一步
      goBack() {
        console.log("你点击了上一步")
      }
    }
	
}
</script>

<style lang="scss">
  @import "../../../styles/bugpop/css/main.css";
  @import "../../../styles/bugpop/css/style.css";

  @import '../sass/bugfillPage.scss';
</style>

