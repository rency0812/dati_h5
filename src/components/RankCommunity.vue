<template>
  <div class="rankCommunity">
      <table>
        <th class="title">
          <td class="number">排名</td>
          <td class="name">社区</td>
          <td class="count">积分</td>
          <div class="pointer"></div>
        </th>
        <tr><div @click="show"><span>全部</span><span>∟</span></div></tr>
        <tr class="info">
          <td class="number">1</td>
          <td class="name">东湖社区东晓街道</td>
          <td class="count"><span>30</span>积分</td>
        </tr>
      </table>
      <div class="total" v-show="isShow">
        <div class="shade" @click.stop="hide"></div>
        <div class="find">
          <mt-picker :slots="slots" :visibleItemCount="5" :itemHeight="45" :showToolbar=true @change="onValueChange">
          <span class="title">全部</span><span class="title">全部</span>
          <div class="line"></div>
          </mt-picker>
        </div>
      </div>
  </div>
</template>
<script>
export default {
  data() {
    return {
      isShow: false,
      slots: [
        {
          flex: 2,
          values: ['请选择', '桂园街道', '黄贝街道', '东门街道', '本门街道', '黄三街道', '东四街道'],
          values1: [
            {
              address: '请选择',
              children: []
            },
            {
              address: '桂园街道',
              children: ['桂一街道', '黄贝街道', '东门街道', '本门街道', '桂一街道', '黄贝街道', '东门街道', '本门街道']
            },
            {
              address: '黄贝街道',
              children: ['桂二街道', '黄贝街道', '东门街道', '本门街道']
            },
            {
              address: '东门街道',
              children: ['桂三街道', '黄贝街道', '东门街道', '本门街道']
            },
            {
              address: '本门街道',
              children: ['桂四街道', '黄贝街道', '东门街道', '本门街道']
            },
            {
              address: '黄三街道',
              children: ['桂五街道', '黄贝街道', '东门街道', '本门街道']
            },
            {
              address: '东四街道',
              children: ['桂六街道', '黄贝街道', '东门街道', '本门街道']
            }
          ],
          className: 'slot1',
          textAlign: 'center',
          defaultIndex: 0
        },
        {
          flex: 3,
          values: ['请选择'],
          className: 'slot2',
          textAlign: 'center'
        }
      ],
      site: [
        ['桂一街道', '黄贝街道', '东门街道', '本门街道'],
        ['桂二街道', '黄贝街道', '东门街道', '本门街道'],
        ['桂三街道', '黄贝街道', '东门街道', '本门街道'],
        ['桂四街道', '黄贝街道', '东门街道', '本门街道']
      ]
    }
  },
  methods: {
    show () {
      this.isShow = true
    },
    hide () {
      this.isShow = false
    },
    onValueChange (picker, values) {
      /* var index = this.slots[0].values.indexOf(values[0])
      this.slots[1].values = this.site[index] */
      for (var i = 0; i < this.slots[0].values1.length; i++) {
        if (values[0] === this.slots[0].values1[i].address) {
          this.slots[1].values = this.slots[0].values1[i].children
        }
      }
    }
  }
}
</script>
<style lang="scss" scoped>
	.rankCommunity {
    table {
      border-collapse: collapse;
      width: 100%;
      font-size: 1.167rem;
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
      tr:nth-child(2) {
        div {
          box-sizing: border-box;
          width: 94%;
          height: 2rem;
          margin: 0.5rem auto;
          border: 1px solid #E5E5E5;
          color: #A2A2A2;
          text-decoration: none;
          line-height: 2rem;
          border-radius: 0.333rem;
          span:first-child {
            float: left;
            margin-left: 0.8rem;
          }
          span:last-child {
            float: right;
            margin-right: 0.8rem;
            transform: translateY(-0.4rem) rotate(-45deg);
          }
        }
      }
      .title {
        position: relative;
        width: 100%;
        height: 2.5rem;
        line-height: 2.5rem;
        color: #676767;
        font-weight: 400;
        border-bottom: 1px solid #E3E3FD;
        .pointer {
          position: absolute;
          top: 0;
          right: 7.333rem;
          width: 1.167rem;
          height: 1.167rem;
          background-color: #fff;
          transform: translateY(-50%) rotate(-45deg);
        }
      }
      .info {
        height: 5.833rem;
        line-height: 5.833rem;
        border-bottom: 1px solid #E3E3FD;
        .number {
          color: #12A4FF;
        }
        .count {
          color: #676767;
          span {
            color: #12A4FF;
          }
        }
      }
    }
    .total {
      background-color: rgba(0,0,0,0.8);
      position: fixed;
      top: 0;
      left: 0;
      width: 100%;
      height: 100%;
      .shade {
        height: 100%;
      }
      .find {
        width: 100%;
        height: 15rem;
        position: absolute;
        bottom: 0;
        left: 0;
        background-color: #fff;
        .title {
          display: inline-block;
          height: 3.75rem;
          text-align: center;
          line-height: 3.75rem;
          font-size: 1.417rem;
          position: relative;
          z-index: 1000;
        }
        .title:first-child {
          width: 40%;
        }
        .title:nth-child(2) {
          width: 60%;
        }
        .line {
          width: 1px;
          height: 15rem;
          position: absolute;
          top: 0;
          left: 12.5rem;
          background-color: #A5A5A5;
        }
      }
    }
  }
</style>
