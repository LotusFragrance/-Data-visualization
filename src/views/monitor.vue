<template>
  <div class="pannel monitor">
    <div class="inner">
      <!-- tab栏 -->
      <div class="tabs">
        <a
          href="javascript:;"
          :style="{ color: isOk ? '#fff' : '#1950c4' }"
          @click="clickFn1"
          >故障设备监控</a
        >
        <a
          href="javascript:;"
          :style="{ color: isOk ? '#1950c4' : '#fff' }"
          @click="clickFn2"
          >异常设备监控</a
        >
      </div>
      <!-- 内容区域 -->
      <div class="content">
        <div class="head">
          <span>故障时间</span>
          <span>设备地址</span>
          <span>异常代码</span>
        </div>
        <div class="marquee-view">
          <div class="marquee">
            <div class="row" v-for="(obj, index) in errorArr" :key="index">
              <span>{{ obj.time }}</span>
              <span>{{ obj.address }}</span>
              <span>{{ obj.code }}</span>
              <span class="icon-dot"></span>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { monitorError, monitorAbnormal } from '@/api/monitor'
export default {
  data () {
    return {
      isOk: true,
      errorArr: []
    }
  },
  methods: {
    clickFn1 () {
      this.isOk = true
      this.monitorError()
    },
    clickFn2 () {
      this.isOk = false
      this.monitorAbnormal()
    },
    async monitorError () {
      try {
        const {
          data: { data }
        } = await monitorError()
        this.errorArr = [...data, ...data]
      } catch (error) {
        console.log(error)
      }
    },
    async monitorAbnormal () {
      try {
        const {
          data: { data }
        } = await monitorAbnormal()
        this.errorArr = [...data, ...data]
      } catch (error) {
        console.log(error)
      }
    }
  },
  created () {
    this.monitorError()
  }
}
</script>

<style lang="less" scoped>
.monitor {
  height: 480px;
  .inner {
    padding: 24px 0;
    display: flex;
    flex-direction: column;
    .tabs {
      margin-bottom: 17px;
      a {
        display: inline-block;
        width: 50%;
        text-align: center;
        font-size: 18px;
        &:nth-child(1) {
          border-right: 2px solid #00f2f1;
        }
      }
    }
    .content {
      flex: 1;
      .head {
        display: flex;
        align-items: center;
        padding-left: 36px;
        height: 36px;
        background-color: rgba(255, 255, 255, 0.1);
        color: #68d8fe;
        font-size: 14px;
        span {
          &:nth-child(1) {
            width: 85px;
          }
          &:nth-child(2) {
            width: 190px;
          }
          &:nth-child(3) {
            flex: 1;
          }
        }
      }
      @keyframes move {
        0% {
        }
        100% {
          transform: translateY(-50%);
        }
      }
      .marquee-view {
        height: 358px;
        overflow: hidden;
        .marquee {
          animation: move 15s linear infinite;
          &:hover {
            animation-play-state: paused;
          }
        }
        .row {
          position: relative;
          display: flex;
          align-items: center;
          padding-left: 36px;
          height: 36px;
          font-size: 12px;
          color: #61a8ff;
          span {
            &:nth-child(1) {
              width: 85px;
            }
            &:nth-child(2) {
              width: 190px;
              white-space: nowrap;
              text-overflow: ellipsis;
              overflow: hidden;
            }
            &:nth-child(3) {
              flex: 1;
            }
            &:nth-child(4) {
              position: absolute;
              left: 20px;
              opacity: 0;
            }
          }
          &:hover {
            background-color: rgba(255, 255, 255, 0.1);
            color: #68d8fe;
            .icon-dot {
              opacity: 1;
            }
          }
        }
      }
    }
  }
}
</style>
