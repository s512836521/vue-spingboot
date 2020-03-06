<template>
	<div class="messageFooter">
		<div class="messageFooter_copyright">
			<div class="flbox">
				<p><i class="i_tel"></i>运维电话：213131  </p>
			</div>
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
	.messageFooter {
		background: #666666;
		.messageFooter_nav {
			background: #dddddd;
			height: 50px;
			line-height: 50px;
			color: #333333;
			font-size: 14px;
			text-align: center;
		}
		.messageFooter_copyright {
			background: #666666;
			color: #eeeeee;
			width: 960px;
			margin: 0 auto;
			padding: 20px 0;
			&:after {
				clear: both;
				content: "";
				display: block;
				overflow: hidden;
			}
			.flbox {
				float: left;
				width: 500px;
			}
			.flbox p {
				line-height: 50px;
			}
			.frbox {
				float: right;
				width: 400px;
			}
			.ewmbox:after {
				clear: both;
				content: "";
				display: block;
				overflow: hidden;
			}
			.ewmbox li {
				width: 90px;
				float: right;
				margin-left: 20px;
				text-align: center;
			}
		}
	}
</style>
