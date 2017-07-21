<template>
  <div class="onlineClass">
    <mt-swipe :auto="4000" class="swipe">
      <mt-swipe-item><img src="http://photocdn.sohu.com/20160303/mp61588701_1456974555250_13.jpeg"></mt-swipe-item>
      <mt-swipe-item><img src="http://photocdn.sohu.com/20160303/mp61588701_1456974555250_13.jpeg"></mt-swipe-item>
      <mt-swipe-item><img src="http://photocdn.sohu.com/20160303/mp61588701_1456974555250_13.jpeg"></mt-swipe-item>
    </mt-swipe>
    <div class="main">
      <div class="searchWrapper">
        <input type="text" class="searchInput" placeholder="请输入您所在的小区/社区进行查询">
        <a href="javascript:;" class="searchBtn">
          <span class="mintui mintui-search"></span>
          查询
        </a>
      </div>
      <div class="lectureWrapper">
        <div class="lectureItem" v-for="item in lectureList">
          <div class="itemPhoto"></div>
          <div class="itemTitle">
            {{item}}
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import axios from 'axios'

export default {
  data() {
    return {
      lectureList: 3,
      tabList: 3,
      response: null
    }
  },
  methods: {
    getList () {
    	console.log(000000);
//    axios.get('/training/new/act', {
//      params: {
//        actid: 375,
//        type_id: 12
//      }
//    })
//    .then(response => {
//      console.log(response)
//    })
//  }
  },
  mounted () {
    this.getList()
  }
}
</script>
<style lang="scss" scoped>
.onlineClass {
  min-height: 100%;
  .swipe {
    height: 18rem;
    // background: pink;
    & img {
      width: 100%;
      height: 100%;
    }
  }
  .main {
    margin: .6rem 1.25rem;
    .searchWrapper {
      display: flex;
      justify-content: center;
      align-items: center;
      .searchInput {
        width: 23.3rem;
        height: 2.3rem;
        box-sizing: border-box;
        padding-left: 2rem;
        padding-right: 2rem;

        border-radius: 30px;
        background: lightgray;
        border: none;
        outline: none;
      }
      .searchBtn {
        margin-left: .5rem;
        padding: .5rem .7rem;

        font-size: 1rem;
        color: white;
        background: #20a0ff;
        text-decoration: none;
        border-radius: 5px;
        .mintui-search {
          font-size: 1rem;
        }
      }
    }
    .lectureWrapper {
      
      .lectureItem {
        margin-top: .8rem;
        height: 12.5rem;
        border: 1px solid lightgray;
        .itemPhoto {
          height: 10rem;
          background: pink;
          border-bottom: 1px solid lightgray;
        }
        .itemTitle {
          height: 2.5rem;
          display: flex;
          align-items: center;
          font-size: 1.2rem;
          color: rgb(102, 102, 102);
          padding-left: .5rem;
        }
      }
    }
  }
}
@media screen and (max-width:321px) {
  .searchInput {
    width: 18.5rem !important;
    padding-left: 1.5rem !important;
    padding-right: 1rem !important;
  }
  .searchBtn {
    padding: .5rem .5rem !important;
  }
}
@media screen and (min-width:321px) and (max-width:361px) {
  .searchInput{
    width: 22.3rem !important;
  }
}
</style>
