<template>
  <div class="videoPlay">
    <mt-header fixed title="安国卫生宣传教育活动">
      <img :src="iconSrc.back" slot="left" class="headerBtn">
      <img :src="iconSrc.share" slot="right" class="headerBtn">
    </mt-header>
    <div class="videoWrapper"></div>
    <main>
      <div class="tab">
        <div class="descriptionBtn" @click="showDesc" :class="{active: isActive}">视频详情</div>
        <div class="commentBtn" @click="showComment" :class="{active: !isActive}">视频评论（{{2}}）</div>
      </div>
      <div class="description" v-if="isActive">
        <div class="descHeader">
          <div class="descTitle">安国卫生宣传教育活动</div>
          <div class="playTimes">{{88}}次播放</div>
        </div>
        <div class="descWrapper">
          <div class="descBrief">课堂介绍</div>
          <div class="descMain">
            四害指的是老鼠四害指的是老鼠四害指的是老鼠四害指的是老鼠四害指的是老鼠四害指的是老鼠四害指的是老鼠
          </div>
          <div class="descPhoto"></div>
        </div>
      </div>
      <div class="comment" v-else>
        <div class="commentWrapper" v-for="item in 4">
          <div class="commentHeader">
            <div class="iconWrapper">图片</div>
            <div class="infoWrapper">
              <div class="username">桂桂</div>
              <div class="date">2017-05-31</div>
            </div>
            <div class="star">star</div>
          </div>
          <div class="commentMain">
            老师讲义思路清晰，语速较快
          </div>
        </div>
      </div>
    </main>
    <footer>
      <div class="btnWrapper">
        <a href="javascript:;" class="footerBtn">
          <span>
            <img :src="iconSrc.hat">
            <span>答题</span>
          </span>
        </a>
        <a href="javascript:;" class="footerBtn">
          <span>
            <img :src="iconSrc.comment">
            <span>评论</span>
          </span>
        </a>
      </div>
    </footer>
  </div>
</template>

<script>
export default {
  data() {
    return {
      iconSrc: {
        back: 'static/img/icon_back.png',
        share: 'static/img/icon_share.png',
        hat: 'static/img/icon_question.png',
        comment: 'static/img/icon_comment.png'
      },
      isActive: true
    }
  },
  methods: {
    showDesc() {
      this.isActive = true
    },
    showComment() {
      this.isActive = false
    }
  }
}
</script>

<style lang="scss" scoped>
.videoPlay {
  min-height: 100%;
  position: relative;
  .mint-header {
    height: 3.7rem;
    background-color: rgba(0, 0, 0, .88);
    .headerBtn {
      width: 1.5rem;
      height: 1.25rem;
    }
  }
  .videoWrapper {
    height: 15rem;
    background-color: pink;
  }
  main {
    .tab {
      display: flex;
      height: 2.5rem;
      justify-content: space-around;
      align-items: center;

      border-bottom: 1px solid lightgray;
      color: rgb(153, 153, 153);
      .active {
        color: rgb(50, 186, 255);
        position: relative;
        &::before {
          position: absolute;
          content: '';
          width: 4rem;
          top: 1.7rem;
          border: 1px solid rgb(50, 186, 255)
        }
      }
    }
    .description {
      padding: 1rem 0;
      .descHeader {
        border-bottom: 1px solid lightgray;
        padding-left: 1.5rem;
        .descTitle {
          font-size: 1.2rem;
          color: rgb(51, 51, 51);
        }
        .playTimes {
          margin-top: 1.5rem;
          font-size: 1.2rem;
          color: rgb(153, 153, 153);
          padding-bottom: .5rem;
        }
      }
      .descWrapper {
        padding: 1rem 1.5rem;
        .descBrief {
          font-size: 1.2rem;
          color: rgb(51, 51, 51);
          padding-bottom: .5rem;
        }
        .descMain {
          color: rgb(51, 51, 51);
          padding-bottom: .5rem;
          line-height: 2rem;
        }
        .descPhoto {
          background-color: pink;
          height: 15rem;
        }
      }
    }
    .comment {
      .commentWrapper {
        padding: 1rem 1.7rem;
        height: 9.2rem;
        background-color: pink;
        .commentHeader {
          position: relative;
          display: flex;
          .iconWrapper {
            height: 2.5rem;
            width: 2.5rem;
            background: green;
            margin-right: .5rem;
          }
          .infoWrapper {
            display: flex;
            flex-direction: column;
            justify-content: space-between;
            .username {
              color: rgb(50, 186, 255);
            }
            .date {
              color: rgb(153, 153, 153);
            }
          }
          .star {
            position: absolute;
            top: 0;
            right: 0;
          }
        }
        .commentMain {
          margin-top: 1rem;
        }
      }
    }
  }
  footer {
    position: fixed;
    bottom: 0;
    width: 100%;
    .btnWrapper {
      height: 3.25rem;
      display: flex;
      .footerBtn {
        flex: auto;
        display: flex;
        justify-content: center;
        align-items: center;

        font-size: 1.3rem;
        text-decoration: none;
        color: rgb(102, 102, 102);
        background: white;
        border-top: 1px solid lightgray;
        >span {
          display: flex;
          align-items: center;
          img {
            width: 1.4rem;
            height: 1.4rem;
          }
        }
        &:first-child {
          background-color: #32baff;
          color: white;
        }
      }
    }
  }
}
@media screen and (max-width: 321px) {
  .videoPlay {
    min-height: 118%;
  }
}
@media screen and (min-width:321px) and (max-width:361px) {
  .videoPlay {
    min-height: 110%;
  }
}
</style>
