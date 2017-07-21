<template>
  <div id="app">
    <router-view></router-view>
  </div>
</template>

<script>
import 'normalize.css/normalize.css'

export default {
  name: 'app'
}
</script>


<style lang="scss">
html {
  font-size: 3.2vw;
  height: 100%;
  body {
    height: 100%;
    #app {
      height: 100%;
    }
    input::-webkit-input-placeholder {
      /*WebKit browsers*/
      color: rgb(153, 153, 153);
    }

    input::-moz-input-placeholder {
      /*Mozilla Firefox*/
      color: rgb(153, 153, 153);
    }

    input::-ms-input-placeholder {
      /*Internet Explorer*/
      color: rgb(153, 153, 153);
    }

    //处理disabled
    input:disabled {
      color: #A6A6A6 !important;
      -webkit-text-fill-color: #A6A6A6 !important;
      -webkit-opacity: 1;
      background-color: white;
    }

    li {
      list-style: none;
    }
    /* 改变index.vue中轮播图点的颜色 */
    .indexNav {
      .mint-swipe-indicator {
        opacity: 0.8;
        background-color: #fff;
        margin: 0 0.667rem;
        width: 0.833rem;
        height: 0.833rem;
      }
      .mint-swipe-indicator.is-active {
        opacity: .8;
        background-color: #3DAAFD;
      }
    }
    /* 调整RankCommunity二级联动样式 */
    .rankCommunity {
        .picker-items {
          margin-top: -7.5rem;
          position: relative;
          z-index: 999;
        }
        .picker-toolbar {
          position: relative;
          z-index: 1000;
          background-color: #fff;
          height: 3.75rem;
        }
        .picker-item {
          border-top: 1px solid #A5A5A5 ;
        }
    }
    .bindCommunity {
      .mintui-back {
        color: rgb(102, 102, 102);
      }
      .mint-header-title {
        color: rgb(102, 102, 102);
      }
      .mint-cell {
        min-height: 3.75rem;
      }
      .mint-cell-wrapper {
        font-size: 1.2rem;
        color: rgb(102, 102, 102)
      }
    }
  }
}
</style>

