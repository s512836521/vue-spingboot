<template>
  <div class="hello">
	  <message-header></message-header>
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
									:key="item.areaCode"
									:label="item.areaName"
									:value="item.areaCode">
								</el-option>
            </el-select>
          </span>

          <span class="name">问题等级：<i class="c_red">*</i></span> 
          <span class="show_div0" style="position:relative">
            <el-select v-model="form.poplv" class="selbox" >
              <el-option
									v-for="item in poplvList"
									:key="item.areaCode"
									:label="item.areaName"
									:value="item.areaCode">
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
									:key="item.areaCode"
									:label="item.areaName"
									:value="item.areaCode">
								</el-option>
            </el-select>
          </span>
      </div>
      <div class="card_info" style="margin-top:10px">
        <div class="message-btn-submit-box">
					<el-button class="message-btn-submit" @click="submit()">提交</el-button>
				</div>
      </div>
	  </div>
    <tips></tips>
	  <message-footer></message-footer>
  </div>
</template>

<script>

import messageHeader from '../components/messageHeader.vue'
import messageFooter from '../components/messageFooter.vue'

export default {
	name: 'bugfillPage',
	components:{
    messageHeader,
		messageFooter
	},
  data() {
			return {
        areaList:{},
        systematicList:{},
        poplvList:{},
        popreceiverList:{},
				form:{
          area : "",      //所属客户
          systematic:"",  //所属系统
          poplv:"",       //问题等级
          popmessage:"",  //问题描述
          popreceiver:""  //问题接收人
        }
      };
  },

  created(){
    let _this = this;
    let params = {
				areaCode:"",
				areaName:""
		}
    client.request('queryAllTestNames',params).then(res => {   //test 为接口名称 保存
      console.log(res)     //返回,
      _this.areaList = res.issueAreaInfoList;
      _this.systematicList = res.issueAreaInfoList;
      _this.poplvList = res.issueAreaInfoList;
      _this.popreceiverList = res.issueAreaInfoList;
    })
  },
	methods: { 
    submit() {
      let params = {
          //p1页上送字段
          area : this.form.area,
          systematic:this.form.systematic,
          poplv:this.form.poplv,   
          popmessage:this.form.popmessage, 
          popreceiver:this.form.popreceiver
        }
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
//			上一步
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

