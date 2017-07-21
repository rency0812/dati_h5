<template>
  <div class="index">
  <!-- 轮播图 -->
    <div class="indexNav">
    	<mt-swipe :auto="3000">
			  <mt-swipe-item><a href="#"><img src="../../static/img/nav.png"></a></mt-swipe-item>
			  <mt-swipe-item><a href="#"><img src="../../static/img/nav.png"></a></mt-swipe-item>
			  <mt-swipe-item><a href="#"><img src="../../static/img/nav.png"></a></mt-swipe-item>
			</mt-swipe>
    </div>
    <!-- 内容 -->
    <div class="content">
    	<div class="cathedra clearfix">
    		<a href="#"></a>
    	</div>
    	<div class="activity clearfix">
    		<a href="/#rank"></a>
    	</div>
    	<div class="volunteer clearfix">
    		<a href="#answers"></a>
    	</div>
    	<div class="classroom clearfix">
    		<a href="#"></a>
    	</div>
    </div>
    <!-- 版权 -->
    <div class="copy">
    	<p>版权所有&copy;罗湖城事 技术支持&copy;深传互动</p>
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
<style lang="scss" scoped>
	.index {
		max-width: 62.5rem;
		min-width: 31.25rem;
		margin: auto;
		.indexNav {
			height: 15.625rem;
			a {
				display: block;
				width: 100%;
				margin: auto;
				img {
					width: 100%;
				}
			}
		}
		.content {
			.margin_width {
				margin: 0.833rem;
				height: 9.167rem;
				border: 1px solid #ddd;
			}
			a {
				display: block;
				width: 28.75rem;
				height: 9.167rem;
				background-image: url(../../static/img/classroom.png);
				background-size: 100%;
			}
			.cathedra {
				@extend .margin_width;
			}
			.activity {
				@extend .margin_width;
			}
			.volunteer {
				@extend .margin_width;
			}
			.classroom {
				@extend .margin_width;
			}
		}
		.copy {
			text-align: center;
			color: #999;
		}
	}
</style>
