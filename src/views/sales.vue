<template>
  <div class="pannel sales">
    <div class="inner" @mouseover="passFn" @mouseout="outFn">
      <div class="head">
        <h3>销售额统计</h3>
        <span
          v-for="(str, index) in time"
          :key="index"
          @click="clickFn(index)"
          :class="{ common: isOk == index }"
          >{{ str }}</span
        >
      </div>
      <div class="line"></div>
    </div>
  </div>
</template>

<script>
import { salesApi } from '@/api/sales'
export default {
  data () {
    return {
      time: ['年', '季', '月', '周'],
      isOk: 0,
      timer: null // 定时器
    }
  },
  methods: {
    async getData (index) {
      const arr = ['year', 'quarter', 'month', 'week']
      const {
        data: { data }
      } = await salesApi()
      const myChart = this.$echarts.init(document.querySelector('.line'))
      const option = {
        color: ['#00f2f1', '#ed3f35'],
        tooltip: {
          // 通过坐标轴来触发
          trigger: 'axis'
        },
        legend: {
          // 距离容器10%
          right: '10%',
          // 修饰图例文字的颜色
          textStyle: {
            color: '#4c9bfd'
          }
          // 如果series 里面设置了name，此时图例组件的data可以省略
          // data: ["邮件营销", "联盟广告"]
        },
        grid: {
          top: '20%',
          left: '3%',
          right: '4%',
          bottom: '3%',
          show: true,
          borderColor: '#012f4a',
          containLabel: true
        },

        xAxis: {
          type: 'category',
          boundaryGap: false,
          data: [
            '1月',
            '2月',
            '3月',
            '4月',
            '5月',
            '6月',
            '7月',
            '8月',
            '9月',
            '10月',
            '11月',
            '12月'
          ],
          // 去除刻度
          axisTick: {
            show: false
          },
          // 修饰刻度标签的颜色
          axisLabel: {
            color: '#4c9bfd'
          },
          // 去除x坐标轴的颜色
          axisLine: {
            show: false
          }
        },
        yAxis: {
          type: 'value',
          // 去除刻度
          axisTick: {
            show: false
          },
          // 修饰刻度标签的颜色
          axisLabel: {
            color: '#4c9bfd'
          },
          // 修改y轴分割线的颜色
          splitLine: {
            lineStyle: {
              color: '#012f4a'
            }
          }
        },
        series: [
          {
            name: '预期销售额',
            type: 'line',
            stack: '总量',
            // 是否让线条圆滑显示
            smooth: true,
            data: data[arr[index]][0]
          },
          {
            name: '实际销售额',
            type: 'line',
            stack: '总量',
            smooth: true,
            data: data[arr[index]][1]
          }
        ]
      }
      myChart.setOption(option)
    },
    clickFn (index) {
      this.isOk = index
      this.getData(index)
    },
    passFn () {
      // 经过该区域清除定时器
      clearInterval(this.timer)
    },
    outFn () {
      // 离开开启定时器
      this.timer = setInterval(() => {
        this.isOk += 1
        if (this.isOk > 3) {
          this.isOk = 0
        }
        this.getData(this.isOk)
      }, 2000)
    }
  },
  mounted () {
    this.getData(0)
    this.timer = setInterval(() => {
      this.isOk += 1
      if (this.isOk > 3) {
        this.isOk = 0
      }
      this.getData(this.isOk)
    }, 2000)
  }
}
</script>

<style lang="less" scoped>
.sales {
  height: 235px;
  .inner {
    display: flex;
    flex-direction: column;
  }
  .head {
    display: flex;
    align-items: center;
    h3 {
      padding-right: 15px;
      line-height: 17px;
      border-right: 2px solid #00f2f1;
      & + span {
        margin-left: 13px;
      }
    }
    span {
      padding: 2px;
      margin: 0 10px;
      color: #0bace6;
      font-size: 17px;
      cursor: pointer;
      border-radius: 3px;
    }
  }
  .line {
    margin-top: 13px;
    flex: 1;
  }
}
.common {
  background-color: #4c9bfd;
  color: #fff !important;
}
</style>
