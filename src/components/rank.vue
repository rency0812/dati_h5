<template>
  <div class="rank">
  	<div class="top">
  		<div class="back"></div>
  	</div>
  	<div class="switch">
  		<router-link to="/rank/rankpersonner" class="title">个人排行榜</router-link>
  		<router-link to="/rank/rankcommunity" class="title">社区排行榜</router-link>
  		<router-view></router-view>
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
	.rank {
		.top {
			height: 10.417rem;
			background-image: url(../../static/img/img_rank.png);
			background-position: center;
			background-size: cover;
			.back {
				width: 3rem;
				height: 3rem;
				position: absolute;
				top: 1rem;
				left: 1rem;
			}
			.back:after {
				content: '';
				display: block;
				width: 1.5rem;
				height: 1.5rem;
				border: {
					top: 2px solid #fff;
					left: 2px solid #fff;
				}
				transform: translateX(60%) translateY(40%) rotate(-45deg);
			}
		}
		.switch {
			background-color: #3FB5FF;
			height: 3.667rem;
			position: relative;
			.title {
				float: left;
				width: 50%;
				font-size: 1.333rem;
				color: #fff;
				text-decoration: none;
				box-sizing: border-box;
				padding-left: 5rem;
				line-height: 3.667rem;
			}
		}
	}
</style>
