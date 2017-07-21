<template>
  <div class="memberCenter">
    <header>
      <div class="iconWrapper">
        <div class="icon">
          <img :src="userInfo.userIcon">
        </div>
        <div class="username">
          {{userInfo.username}}
        </div>
      </div>
    </header>
    <main>
      <div class="item" v-for="item in itemList">
        <div class="icon">
          <img :src="item.icon">
        </div>
        <div class="text">
          {{item.text}}
        </div>
      </div>
    </main>
    <div class="copyright-text">版权所有©安全光明 技术支持©深传互动</div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      itemList: [
        {
          icon: 'static/img/icon_data.png',
          text: '我的资料'
        },
        {
          icon: 'static/img/icon_activity.png',
          text: '我的活动'
        },
        {
          icon: 'static/img/icon_points.png',
          text: '积分明细'
        },
        {
          icon: 'static/img/icon_web.png',
          text: '微官网'
        },
        {
          icon: 'static/img/icon_user.png',
          text: '会员中心'
        },
        {
          icon: 'static/img/icon_more.png',
          text: '关于我们'
        }
      ],
      userInfo: {
        userIcon: '',
        username: '振振有词'
      }
    }
  }
}
</script>

<style scoped lang="scss">
.memberCenter {
  min-height: 100%;
  header {
    height: 12.5rem;
    background-image: url('../../static/img/img_user.png');
    .iconWrapper {
      width: 5.6rem;
      margin: 0 auto;
      padding-top: 2.3rem;
      .icon {
        height: 5.6rem;
        background-color: pink;
      }
      .username {
        text-align: center;
        padding-top: 1.2rem;
        font-size: 1.2rem;
        color: white;
      }
    }
  }
  main {
    display: flex;
    flex-wrap: wrap;
    .item {
      flex: auto;
      width: 33%;
      text-align: center;
      border-right: 1px solid lightgray;
      border-bottom: 1px solid lightgray;
      .icon {
        padding-top: 1.5rem;
        text-align: center;
        img {
          height: 3.7rem;
        }
      }
      .text {
        padding-bottom: 1.5rem;
        font-size: 1.2rem;
        color: rgb(102, 102, 102);
      }
    }
  }
  .copyright-text {
    text-align: center;
    font-size: 0.24rem;
    color: rgb(153, 153, 153);
    width: 100%;
  }
}
</style>
