<template>
  <div class="rankPersonner">
  	<table>
      <th class="title">
        <td class="number">排名</td>
        <td class="name">微信昵称/头像</td>
        <td class="count">积分</td>
        <div class="pointer"></div>
      </th>
      <tr class="info">
        <td class="number">1</td>
        <td class="name"><div class="img"><img src=""></div><span>振振有词</span></td>
        <td class="count"><span>30</span>积分</td>
      </tr>
    </table> 
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
	.rankPersonner {
    table {
      border-collapse: collapse;
      width: 100%;
      td {
        display: inline-block;
      }
      .number {
        float: left;
        margin-left: 1.042rem;
        width: 2.5rem;
      }
      .name {
        float: left;
        margin-left: 2.667rem;
      }
      .count {
        float: right;
        margin-right: 2.084rem;
      }
      .title {
        position: relative;
        width: 100%;
        height: 2.5rem;
        line-height: 2.5rem;
        font-size: 1.167rem;
        color: #676767;
        font-weight: 400;
        border-bottom: 1px solid #E3E3FD;
        .pointer {
          position: absolute;
          top: 0;
          left: 7.333rem;
          width: 1.167rem;
          height: 1.167rem;
          background-color: #fff;
          transform: translateY(-50%) rotate(-45deg);
        }
      }
      .info {
        height: 5.833rem;
        line-height: 5.833rem;
        font-size: 1.167rem;
        border-bottom: 1px solid #E3E3FD;
        td:first-child {
          color: #12A4FF;
        }
        td:nth-child(2) {
          line-height: 5.833rem;
          .img {
            width: 3rem;
            height: 3rem;
            box-sizing: border-box;
            border: 0.333rem solid #75CFFF;
            border-radius: 1.5rem;
            float: left;
            margin: 1.417rem 1.25rem 0 0;
          }
        }
        td:last-child {
          color: #676767;
          margin-right: 1.7rem;
          span {
            color: #12A4FF;
          }
        }
      }
    }
  }
</style>
