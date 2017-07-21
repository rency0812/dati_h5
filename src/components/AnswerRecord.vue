<template>
  <div class="answerRecord">
  	 <mt-header class="answerRecordTop" title="答题记录">
	  <router-link to="/" slot="left">
	    <mt-button icon="back"></mt-button>
	  </router-link>
	</mt-header>
	<div class="logo"></div>
	<div class="title">
		<div class="name">活动名称</div>
		<div class="score">得分</div>
		<div class="date">答题时间</div>
	</div>
	<div class="activity">
		<div class="name">活动名称</div>
		<div class="score"><span>30</span>鲜花</div>
		<div class="date">答题时间</div>
	</div>
  </div>
</template>
<script>

export default {
  data () {
    return {}
  }
}
</script>
<style lang='scss' scoped>
	.answerRecord {
		font-size: 14/12+rem;
		.answerRecordTop {
			height: 45/12+rem;
			background-color: #fff;
			color: rgb(102,102,102);
		}
		.logo {
			height: 125/12+rem;
			background: url(../../static/img/img_sheet.png) no-repeat 50%;
			background-size: cover;
		}
		.title {
			border: {
				top: 1px solid #ddd;
				bottom: 1px solid #ddd;
			}
			-webkit-box-sizing: border-box;
			   -moz-box-sizing: border-box;
			        box-sizing: border-box;
			height: 30/12+rem;
			line-height: 28/12+rem;
			color: rgb(153,153,153);
			.name {
				float: left;
				text-align: center;
				width: 37.5%;
			}
			.score {
				float: left;
				text-align: center;
				width: 25%;
			}
			.date {
				float: left;
				text-align: center;
				width: 37.5%;
			}
		}
		.activity {
			height: 45/12+rem;
			color: rgb(102,102,102);
			border-bottom: 1px solid #ddd;
			.cell {
				float: left;
				text-align: center;
				margin-top: 1rem;
				height: 22/12+rem;
				line-height: 22/12+rem;
			}
			.name {
				@extend .cell;
				width: 37.5%;
			}
			.score {
				@extend .cell;
				width: 25%;
				border: {
					left: 1px solid #ddd;
					right: 1px solid #ddd;
				}
				-webkit-box-sizing: border-box;
				   -moz-box-sizing: border-box;
				        box-sizing: border-box;
				span {
					color: rgb(17,168,255);
				}
			}
			.date {
				@extend .cell;
				width: 37.5%;
				color: rgb(153,153,153);
			}
		}
	}
</style>
