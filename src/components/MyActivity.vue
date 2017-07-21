<template>
  <div class="myActivity">
  	<mt-header class="myActivityTop" title="我的活动">
	  <router-link to="/" slot="left">
	    <mt-button icon="back"></mt-button>
	  </router-link>
	</mt-header>
	<div class="myTab">
		<div @click="isApplyActive" class="apply" :class="{active: applyActive}">线上报名</div>
		<div @click="isLiveActive" class="live" :class="{active: liveActive}">线上直播</div>
		<div @click="isLessonActive" class="lesson" :class="{active: lessonActive}">线上课堂</div>
	</div>
  	<div class="tabDetail">
  		<div class="apply" v-show="applyActive">
  			<div class="detail" v-for="item in applys">
  				<div class="left" :style="{backgroundImage: item.imgSrc}"></div>
  				<div class="right">
  					<div class="title" v-text="item.title"></div>
  					<div class="address" v-text="item.address"></div>
  					<div class="date" v-text="item.date"></div>
  					<div v-show="item.status.isFinished" class="status status1" v-text="item.status.isFinished?'已结束':''"></div>
  					<div v-show="item.status.isAttention" class="status status2" :class="{attention: item.status.isAttention}" v-text="item.status.isAttention?'已关注':''"></div>
  					<div v-show="item.status.isApply" class="status status3" :class="{applyed: item.status.isApply}" v-text="item.status.isApply ? '已报名' : ''"></div>
  				</div>
  			</div>
  		</div>
		<div class="live" v-show="liveActive">
			<div class="detail" v-for="item in lives">
  				<div class="left" :style="{backgroundImage: item.imgSrc}"></div>
  				<div class="right">
  					<div class="title" v-text="item.title"></div>
  					<div class="address" v-text="item.address"></div>
  					<div class="date" v-text="item.date"></div>
  					<div v-show="item.status.isFinished" class="status status1" v-text="item.status.isFinished?'已结束':''"></div>
  					<div v-show="item.status.isAttention" class="status status2" :class="{attention: item.status.isAttention}" v-text="item.status.isAttention?'已关注':''"></div>
  					<div v-show="item.status.isApply" class="status status3" :class="{applyed: item.status.isApply}" v-text="item.status.isApply ? '已报名' : ''"></div>
  				</div>
  			</div>
		</div>
		<div class="lesson" v-show="lessonActive"></div>
  	</div>
  </div>
</template>
<script>
export default {
  data() {
    return {
      applys: [
        {
          imgSrc: 'url(../../static/img/img_title.png)',
          title: '儿童安全培训讲座',
          address: '田贝二路公安局大院活动中心2层A房',
          date: '2017-11-24 10: 00',
          status: {
            isFinished: true,
            isAttention: false,
            isApply: false
          }
        },
        {
          imgSrc: 'url(../../static/img/img_title.png)',
          title: '儿童安全培训讲座',
          address: '田贝二路公安局大院活动中心2层A房',
          date: '2017-11-24 10: 00',
          status: {
            isFinished: false,
            isAttention: true,
            isApply: true
          }
        },
        {
          imgSrc: 'url(../../static/img/img_title.png)',
          title: '儿童安全培训讲座',
          address: '田贝二路公安局大院活动中心2层A房',
          date: '2017-11-24 10: 00',
          status: {
            isFinished: false,
            isAttention: true,
            isApply: false
          }
        },
        {
          imgSrc: 'url(../../static/img/img_title.png)',
          title: '儿童安全培训讲座',
          address: '田贝二路公安局大院活动中心2层A房',
          date: '2017-11-24 10: 00',
          status: {
            isFinished: true,
            isAttention: false,
            isApply: false
          }
        },
        {
          imgSrc: 'url(../../static/img/img_title.png)',
          title: '儿童安全培训讲座',
          address: '田贝二路公安局大院活动中心2层A房',
          date: '2017-11-24 10: 00',
          status: {
            isFinished: true,
            isAttention: false,
            isApply: false
          }
        }
      ],
      lives: [
        {
          imgSrc: 'url(../../static/img/img_title.png)',
          title: '儿童安全培训讲座',
          date: '2017-11-24 10: 00',
          status: {
            isFinished: true,
            isAttention: false,
            isApply: false
          }
        },
        {
          imgSrc: 'url(../../static/img/img_title.png)',
          title: '儿童安全培训讲座',
          date: '2017-11-24 10: 00',
          status: {
            isFinished: false,
            isAttention: true,
            isApply: true
          }
        }
      ],
      applyActive: true,
      liveActive: false,
      lessonActive: false
    }
  },
  methods: {
    isApplyActive () {
      this.applyActive = true
      this.liveActive = false
      this.lessonActive = false
    },
    isLiveActive () {
      this.applyActive = false
      this.liveActive = true
      this.lessonActive = false
    },
    isLessonActive () {
      this.applyActive = false
      this.liveActive = false
      this.lessonActive = true
    }
  }
}
</script>
<style lang="scss" scoped>
	.myActivity {
		.myActivityTop {
			height: 45/12+rem;
			border-bottom: 1px solid #d2d2d2;
			background-color: #fff;
			color: #636363;
			font-size: 16/12+rem;
		}
		.myTab {
			height: 30/12+rem;
			position: relative;
			border-bottom: 1px solid #d2d2d2;
			.tab {
				text-align: center;
				height: 100%;
				line-height: 30/12+rem;
				width: 62/12+rem;
				-webkit-box-sizing: border-box;
				   -moz-box-sizing: border-box;
				        box-sizing: border-box;
				border-bottom: 2px solid #fff;
				position: absolute;
				color: #999;
			}
			.apply {
				@extend .tab;
				left: 30/12+rem;
			}
			.live {
				@extend .tab;
				left: 50%;
				transform: translateX(-50%);
			}
			.lesson {
				@extend .tab;
				right: 30/12+rem;
			}
			.active {
				color: #30bbfe;
				border-bottom-color: #30bbfe;
			}
		}
		.tabDetail {
			width: 100%;
			padding: 0 14/12+rem;
			-webkit-box-sizing: border-box;
			   -moz-box-sizing: border-box;
			        box-sizing: border-box;
			.detail {
				width: 100%;
				margin-top: 10/12+rem;
				border: 1px solid #eaeaea;
				height: 91/12+rem;
				-webkit-box-sizing: border-box;
				   -moz-box-sizing: border-box;
				        box-sizing: border-box;
				.left {
					float: left;
					width: 34%;
					border-right: 1px solid #eaeaea;
					height: 100%;
					background-size: cover;
					background-repeat: no-repeat;
					background-position: 50%;
				}
				.right {
					float: left;
          width: 65%;
          padding-left: 7/12+rem;
          -webkit-box-sizing: border-box;
             -moz-box-sizing: border-box;
                  box-sizing: border-box;
					font-size: 10/12+rem;
					position: relative;
					height: 100%;
					.title {
						color: #676767;
						margin-top: 0.5rem;
						font-size: 1rem;
					}
					.address {
						color: #626262;
						margin-top: 7/12+rem;
            overflow-y: hidden;
            white-space: nowrap;
            text-overflow: ellipsis;
					}
					.date {
						color: #969696;
						margin-top: 6/12+rem;
					}
					.status {
						display: inline-block;
						color: #fff;
						background-color: #ccc;
						padding: 4/12+rem 10/12+rem;
						border-radius: 10/12+rem;
						margin-top: 0.4rem;
						margin-right: 0.4rem;
					}
					.attention {
						background-color: #fe6f6b;
					}
					.applyed {
						background-color: #5ac7ff;
					}
				}
			}
			.live {
				.detail {
					.right {
						.status {
							margin-top: 2rem;
							margin-right: 0.4rem;
						}
					}
				}
			}
		}
	}
</style>
