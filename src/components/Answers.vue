<template>
  <div class="answers">
  	<div class="answerTop"><a href="#" class="back" @click="back"></a>回答页面</div>
  	<div class="themeImg"></div>
  	<div class="questions">
  		<div class="progressBar">
  			<div class="ball">1</div>
  			<div :class="{darkBlue: oneOver}" class="ball">2</div>
  			<div :class="{darkBlue: twoOver}" class="ball">3</div>
  			<div :class="{darkBlue: threeOver}" class="ball">4</div>
  			<div :class="{darkBlue: fourOver}" class="ball">5</div>
  			<div :class="{darkBlue: oneOver}" class="bar"></div>
  			<div :class="{darkBlue: twoOver}" class="bar"></div>
  			<div :class="{darkBlue: threeOver}" class="bar"></div>
  			<div :class="{darkBlue: fourOver}" class="bar"></div>
  		</div>
  		<ul>
  			<li>
  				<div class="ask" v-text="questions.ask"></div>
  				<div class="results" v-for="key in questions.results">
  					<div @click="changeColor(key.id, questions.correct)" :class="{ red: key.isRed, light: key.isLight, gray: key.isGray, key }">{{key.result}}<span v-show="key.isRed" class="tip">正确答案</span><span class="icon" :class="{ rightIcon: key.isRight, errorIcon: key.isError }"></span></div>
  				</div>
  			</li>
  		</ul>
  	</div>
  	<div class="tipBox">
  		<div class="shade"></div>
  		<div class="tips">
  			<mt-button class="again" type="primary">再来一次</mt-button>
  			<mt-button class="back" type="primary">返回首页</mt-button>
  		</div>
  	</div>
  </div>
</template>
<script>
import axios from 'axios'

export default {
  data () {
    return {
      questions: {},
      allQuestions: {},
      num: 0,
      oneOver: false,
      twoOver: false,
      threeOver: false,
      fourOver: false
    }
  },
  methods: {
    back () {
      window.history.go(-1)
    },
    changeColor (id, correct) {
      let results = this.questions.results
      if (this.questions.isAnswered) return
      /* 先给右侧加上正错图标 */
      for (let i = 0; i < results.length; i++) {
        if (i + 1 === correct) {
          results[i].isRight = true
        } else {
          results[i].isError = true
        }
      }
      /* 如果答案正确 */
      if (id === correct) {
        this.num++
        results[id - 1].isRed = true
        for (let i = 0; i < results.length; i++) {
          if (id - 1 !== i) {
            results[i].isLight = true
          }
        }
            /* 随机换到下一题 */
        setTimeout(function () {
          let q0 = this.questions
          let qAll = this.allQuestions
          let len = qAll.length
          let index = qAll.indexOf(q0)
          qAll.splice(index, 1)
          let randomIndex = Math.floor(Math.random() * (len - 1))
          this.questions = this.allQuestions[randomIndex]
          /* 并且横条颜色要渐变 */
          switch (this.num) {
            case 1:
              this.oneOver = true
              break
            case 2:
              this.twoOver = true
              break
            case 3:
              this.threeOver = true
              break
            case 4:
              this.fourOver = true
              break
          }
        }.bind(this), 1000)
      /* 如果答案错误 */
      } else {
        for (let i = 0; i < results.length; i++) {
          if (id - 1 === i) {
            results[i].isGray = true
            results[i].isLight = false
          } else {
            if (correct - 1 === i) {
              results[i].isRed = true
            } else {
              results[i].isLight = true
              results[i].isGray = false
            }
          }
        }
      }
      this.questions.isAnswered = true
    },
    getJson () {
      var that = this
      axios.get('../../static/questions.json')
      .then(function (res) {
        that.questions = res.data[0]
        that.allQuestions = res.data
      })
    }
  },
  created () {
    this.getJson()
  }
}
</script>
<style lang='scss' scoped>
	.answers {
		.answerTop {
			height: 40/12+rem;
			text-align: center;
			line-height: 40/12+rem;
			font-size: 16/12+rem;
			position: relative;
			color: #656565;
			.back {
				display: block;
				position: absolute;
				top: 0;
				left: 1rem;
				width: 40/12+rem;
				height: 40/12+rem;
				&:before {
					content: "";
					display: block;
					width: 1rem;
					height: 1rem;
					border-top: 2px solid #989898;
					border-left: 2px solid #989898;
					transform: translateX(1.2rem) translateY(1rem) rotate(-45deg);
				}
			}
		}
		.themeImg {
			height: 180/12+rem;
			background-image: url(../../static/img/rank.png);
			background-size: 100%;
		}
		.questions {
			ul {
				margin: 0;
				padding: 0;
				.ask {
					line-height: 2rem;
					width: 92%;
					margin: auto;
					margin-bottom: 10/12+rem;
					color: rgb(102,102,102);
				}
				.results {
					margin-bottom: 14/12+rem;
					.key {
						display: block;
						text-decoration: none;
						margin: auto;
						width: 92%;
						height: 40/12+rem;
						background-color: #60B6FF;
						border-radius: 18/12+rem;
						line-height: 40/12+rem;
						padding-left: 17/12+rem;
						box-sizing: border-box;
						color: #fff;
						position: relative;
						.tip {
							position: absolute;
							top: 50%;
							transform: translateY(-50%);
							right: 4rem;
							color: #fff;
						}
						.icon {
							display: block;
							width: 50/24+rem;
							height: 50/24+rem;
							position: absolute;
							top: 50%;
							transform: translateY(-50%);
							right: 1rem;
							background-size: 100%;
						}
						.rightIcon {
							background-image: url(../../static/img/icon_right.png);
						}
						.errorIcon {
							background-image: url(../../static/img/icon_error.png);
						}
					}
					.red {
						background-color: #FF6785;
					}
					.gray {
						background-color: #A3A3A3;
					}
					.light {
						background-color: #CECECE;
					}
				}
			}
			.progressBar {
				width: 92%;
				margin: auto;
				margin-top: 10/12+rem;
				margin-bottom: 10/12+rem;
				position: relative;
				height: 20px;
				color: #fff;
				.ball {
					position: absolute;
					top: 0;
					width: 20/12+rem;
					height: 20/12+rem;
					background-color: #B5DDFF;
					border-radius: 10/12+rem;
					text-align: center;
					line-height: 20/12+rem;
					z-index:999;
					&:nth-child(1) {
						left: 0;
						background-color: #60B6FF;
					}
					&:nth-child(2) {
						left: 25%;
						margin-left: -5/12+rem;
					}
					&:nth-child(3) {
						left: 50%;
						margin-left: -10/12+rem;
					}
					&:nth-child(4) {
						right: 25%;
						margin-right: -5/12+rem;
					}
					&:nth-child(5) {
						right: 0;
					}
				}
				.bar {
					height: 10/12+rem;
					width: 25%;
					background-color: #B5DDFF;
					position: absolute;
					top: 50%;
					margin-top: -5/12+rem;
					&:nth-child(6) {
						left: 0;
						transform: translateX(10/12+rem);
					}
					&:nth-child(7) {
						left: 50%;
						transform: translateX(-100%);
					}
					&:nth-child(8) {
						left: 50%;
						transform: translateX(0%);
					}
					&:nth-child(9) {
						left: 50%;
						transform: translateX(100%);
						margin-left: -10/12+rem;
					}
				}
				.darkBlue {
					background-color: #60B6FF;
				}
			}
		}
		.tipBox {
			width: 100%;
			height: 100%;
			background-color: rgba(0,0,0,.8);
			position: fixed;
			top: 0;
			left: 0;
			z-index: 2000;
			display: none;
			.shade {
				width: 100%;
				height: 100%;
			}
			.tips {
				width: 66.6%;
				height: 300/12+rem;
				position: absolute;
				top: 136/12+rem;
				left: 50%;
				transform: translateX(-50%);
				background: url(../../static/img/img_user.png) no-repeat 0 0;
				background-size: cover;
				.btn {
					width: 140/12+rem;
					height: 40/12+rem;
					border-radius: 20/12+rem;
					position: absolute;
					bottom: 0.5rem;
					font-size: 14/12+rem;
				}
				.again {
					@extend .btn;
					left: -35/24+rem;
					background-color: #ff6784;
				}
				.back {
					@extend .btn;
					right: -35/24+rem;
					background-color: #ffc528;
				}
			}
		}
	}
</style>
