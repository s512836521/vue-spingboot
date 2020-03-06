<template>
	<div class="messageHeader">
		<div class="logo">
			<!-- <img src="../../../images/creditCardPC/images/logo_gf.png"/> -->
			<span>导航页</span>
			<slot name="right"></slot>
		</div>
	</div>
</template>
<script>
	export default {
		data() {
			return {}
		}
	}
</script>

<style lang="scss">
	.messageHeader {
		background: url(../../../images/bugpop/images/topbg.jpg) repeat-x;
		height: 124px;
		.logo {
			width: 960px;
			margin: 0 auto;
			padding-top: 36px;
			position: relative;
			img {
				width: 574px;
				height: 44px;
			}
		}
	}
</style>
