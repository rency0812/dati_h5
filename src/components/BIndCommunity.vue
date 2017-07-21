<template>
  <div class="bindCommunity">
    <mt-header title="绑定街道">
      <mt-button icon="back" slot="left"></mt-button>
    </mt-header>
    <div class="headerBg">
  
    </div>
    <div class="formWrapper">
      <mt-field label="姓名" placeholder="请输入姓名"></mt-field>
      <div class="clickField">
        <mt-field label="社区" placeholder="请选择街道社区" :disabled="true">
          <img src="../../static/img/icon_drop.png" class="icon">
        </mt-field>
      </div>
    </div>
    <div class="copyright-text">版权所有©安全光明 技术支持©深传互动</div>
    <div class="btnWrapper">
      <a href="javascript:;" class="disabled">绑定</a>
      <a href="javascript:;">返回首页</a>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {

    }
  }
}
</script>

<style scoped lang="scss">
.bindCommunity {
  min-height: 100%;
  position: relative;
  .mint-header {
    height: 3.8rem;
    background-color: white;
  }
  .headerBg {
    height: 10.4rem;
    background-image: url('../../static/img/img_top.png');
    background-size: cover;
    background-position: 50% 50%;
  }
  .formWrapper {
    .icon {
      width: 1.3rem;
      height: 1.3rem;
    }
  }
  .copyright-text {
    text-align: center;
    font-size: 1rem;
    color: rgb(153, 153, 153);
    width: 100%;
    position: absolute;
    bottom: 9rem;
  }
  .btnWrapper {
    position: absolute;
    bottom: 5rem;
    width: 100%;
    height: 3.3rem;
    display: flex;
    justify-content: space-around;
    a {
      width: 13.75rem;
      height: 3.3rem;

      text-decoration: none;
      color: white;
      font-size: 1.3rem;
      background: #a4a4a4;
      text-align: center;
      line-height: 3.3rem;
      border-radius: 20px;
      &:first-child {
        background: #ff6784;
      }
    }
    .disabled {
      opacity: .4;
    }
  }
}
</style>
