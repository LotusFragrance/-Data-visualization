<template>
    <div class="pannel order">
      <div class="inner">
        <div class="tabs">
          <span
            v-for="(str, index) in time"
            :key="index"
            @click="clickFn(index)"
            :style="{ color: index == num ? '#fff' : '#1950c4' }"
            >{{ str }}</span
          >
        </div>
        <div class="data">
          <div class="item">
            <div class="sum">{{ data.order }}</div>
            <i class="icon-dot" style="color: #ed3f35"></i>
            <span>订单量</span>
          </div>
          <div class="item">
            <div class="sum" style="margin-left: 5px">{{ data.money }}</div>
            <i class="icon-dot" style="color: #eacf19"></i>
            <span>销售额(万元)</span>
          </div>
        </div>
      </div>
    </div>
  </template>

<script>
import { orderApi } from '@/api/order'
export default {
  data () {
    return {
      time: ['365天', '90天', '30天', '24小时'],
      data: {},
      num: 0
    }
  },
  created () {
    this.getData()
  },
  methods: {
    async getData () {
      const {
        data: { data }
      } = await orderApi()
      this.data = data.y
    },
    async clickFn (index) {
      this.num = index
      const arr = ['y', 'q', 'm', 'd']
      const {
        data: { data }
      } = await orderApi()
      this.data = data[arr[index]]
    }
  }
}
</script>

  <style lang="less" scoped>
  .order {
    height: 135px;
    .tabs {
      span {
        font-size: 17px;
        color: #1950c4;
        padding: 0 15px;
        border-right: 2px solid #00f2f1;
        cursor: pointer;
        &:nth-child(4) {
          border-right: 0;
        }
      }
    }
    .data {
      margin-top: 10px;
      padding-left: 15px;
      display: flex;
      .item {
        &:nth-child(1) {
          margin-right: 65px;
        }
        .sum {
          margin-bottom: 8px;
          color: #fff;
          font-size: 25px;
        }
        span {
          color: #4c9bfd;
          font-size: 16px;
        }
      }
    }
  }
  </style>
