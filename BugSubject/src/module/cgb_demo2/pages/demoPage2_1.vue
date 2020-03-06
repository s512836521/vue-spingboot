<template>
  <div class="demopage2">
    测试2_1页面
		同时测试
		<div class="test2">scss测试！</div>
  </div>
</template>

<script>
export default {
	name: 'demoPage2_1',
	created(){
		// let url = 'http:\\loacalhost\aa\oo1.do'
		client.request('test').then(res => console.log(res))
	}
}
</script>

<style lang="scss">
.test2 {
	color: $color-orange;
}
</style>

