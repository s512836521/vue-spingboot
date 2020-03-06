<template>
  <div class="successPage">
	  <message-header></message-header>
	  <div class="main">
          <div class="success-box">
				<div class="success-box-img">
					<img src="../../../images/bugpop/images/pic_success.png">
				</div>
				<div class="success-box-text">
					<p class="text-title">您的问题已提交！</p>
					<p class="text-content">问题处理后会及时通知您</p>
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
	computed: {

	},
	
}
</script>

<style lang="scss">
  @import "../../../styles/bugpop/css/main.css";
  @import "../../../styles/bugpop/css/style.css";

//   @import '../sass/bugfillPage.scss';
</style>

