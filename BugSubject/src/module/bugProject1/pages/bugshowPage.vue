<template>
  <!-- <router-link :to="{name:'bugshow', query: {type: '1'}}" tag="li">  -->
    <div class="title">
        <span>总数量：{{total}}</span>
        <el-button  icon="el-icon-setting" class="fl" @click="qurey()" style="colour:blue">查询</el-button>
        <el-select v-model="value5" multiple placeholder="所属系统" class="fl">
            <el-option
              v-for="item in options"
              :key="item.value"
              :label="item.label"
              :value="item.value">
            </el-option>
        </el-select>
          <el-select v-model="value5" multiple placeholder="所属客户" class="fl">
            <el-option
              v-for="item in options"
              :key="item.value"
              :label="item.label"
              :value="item.value">
            </el-option>
        </el-select>
        <el-select v-model="value5" multiple placeholder="问题等级" class="fl">
            <el-option
              v-for="item in options"
              :key="item.value"
              :label="item.label"
              :value="item.value">
            </el-option>
        </el-select>
        <!-- <div class="demo-input-suffix fl">
              <el-input
                placeholder="请输入APP名称或运营商名称"
                prefix-icon="el-icon-search"
                v-model="input21">
              </el-input>
        </div> -->
        <div style="height: 80px"></div>
        <div class="container_table">
            <el-table  :data="tableData.slice((currentPage-1)*pagesize,currentPage*pagesize)"
            stripe style="width: 100%" :default-sort = "{prop: 'date', order: 'descending'}"
            >
            <el-table-column   width="30">
            </el-table-column>
            <el-table-column
              prop="bugid"
              label="问题编码"
              sortable
              width="180">
            </el-table-column>
            <el-table-column
              prop="areaName"
              label="所属客户"
              width="180">
            </el-table-column>
            <el-table-column
              prop="sysName"
              sortable
              label="所属系统">
            </el-table-column>
            <el-table-column
              prop="popmessage"
              label="问题描述">
            </el-table-column>
            <el-table-column
              prop="popreceiverName"
              label="问题接收人">
            </el-table-column>
            <el-table-column
              prop="popflag" :formatter="stateFlag"
              sortable
              label="问题标识位">
            </el-table-column>
            <!-- <el-table-column label="操作">
              <template slot-scope="scope">
                  <el-button type="warning" icon="el-icon-star-off" circle></el-button>
                  <el-button type="primary" icon="el-icon-star-on" v-if="istag" @click='switchChange'></el-button>
                  <el-button type="primary" icon="el-icon-star-off" v-else="!istag" @click='switchChange'></el-button>
              </template>
            </el-table-column> -->
          </el-table>
              <el-pagination class="fy"
                  small
                  layout="prev, pager, next"
                  @current-change="current_change"
                  :total="total/pagesize*10"
                  background
                >
              </el-pagination>
        </div>
    </div> 
    <!-- </router-link>  -->
</template>

<script>
  export default {
    name:'bugshowPage',
    components:{

    },
    data() {
      return {
        total:1000,//默认数据总数
        pagesize:10,//每页的数据条数
        currentPage:1,//默认开始页面
        istag: true,
        input:"",
        input21: '',
        options: [{
          value: '选项5',
          label: '北京烤鸭'
        }],
        value5: [],
        tableData: [],
      };
    } ,
    mounted(){
      let _this = this;
      let params = {
          areaCode:"",
          areaName:""
      }
      client.request('queryAllBugs',params).then(res => {   //test 为接口名称 保存
      console.log(res)     //返回,
          // alert(res.issueBugsInfoList)
        _this.total = res.total
        _this.tableData = res.issueBugsInfoList;
      })
      
    },
    methods: {
      stateFlag(row, column){
        if(row.popflag == "1"){
          return "未处理";
        }else {
          return "已处理";
        }
      },
      qurey(){
          let _this = this;
          let params = {
              areaCode:"",
              areaName:""
          }
          client.request('queryAllBugs',params).then(res => {   //test 为接口名称 保存
          console.log(res)     //返回,
              // alert(res.issueBugsInfoList)
              _this.tableData = res.issueBugsInfoList;
          })
      },

      tableRowClassName({row, rowIndex}) {
        if (rowIndex === 0) {
          return 'th';
        }
        return '';
      },

      switchChange(){
          this.istag = !this.istag ;

      },
      current_change:function(currentPage){
          this.currentPage = currentPage;
        }
      },
      created:function(){
        this.total=this.tableData.length;
    },
    // watch: {
    //   '$route'(to , from) {
    //     let _this = this;
    //     let params = {
    //         areaCode:"",
    //         areaName:""
    //     }
    //     client.request('queryAllBugs',params).then(res => {   //test 为接口名称 保存
    //     console.log(res)     //返回,
    //         // alert(res.issueBugsInfoList)
    //         _this.tableData = res.issueBugsInfoList;
    //     })
    //   },
    // },
  };
</script>

<style lang="scss">
  // @import "../../../styles/bugpop/css/main.css";
  // @import "../../../styles/bugpop/css/style.css";

    .fl{
        float: right;
        margin-right:20px;
    }
    .fy{
        text-align:center;
        margin-top:30px;
    }
    .title{
        height:100%;
    }
</style>