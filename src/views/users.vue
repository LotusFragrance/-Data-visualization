<template>
  <div class="pannel user">
    <div class="inner">
      <h3>全国用户总量统计</h3>
      <div class="chart">
        <div class="bar"></div>
        <dataShow :sum="sum" />
      </div>
    </div>
  </div>
</template>

<script>
import dataShow from '@/components/data.vue'
import { userApi, userRegionApi } from '@/api/user'
export default {
  components: {
    dataShow
  },
  data () {
    return {
      sum: []
    }
  },
  created () {
    this.getUserData()
  },
  methods: {
    async getUserData () {
      const { data: { data } } = await userApi()
      this.sum = data
    },
    async getChart () {
      const { data: { data } } = await userRegionApi()
      const city = []
      const num = []
      for (const k in data) {
        city.push(k)
        num.push(data[k])
      }
      const option = {
        color: new this.$echarts.graphic.LinearGradient(
          // (x1,y2) 点到点 (x2,y2) 之间进行渐变
          0,
          0,
          0,
          1,
          [
            { offset: 0, color: '#00fffb' }, // 0 起始颜色
            { offset: 1, color: '#0061ce' } // 1 结束颜色
          ]
        ),
        tooltip: {
          trigger: 'item'
        },
        grid: {
          left: '0%',
          right: '3%',
          bottom: '3%',
          top: '3%',
          //  图表位置紧贴画布边缘是否显示刻度以及label文字 防止坐标轴标签溢出跟grid 区域有关系
          containLabel: true,
          // 是否显示直角坐标系网格
          show: true,
          // grid 四条边框的颜色
          borderColor: 'rgba(0, 240, 255, 0.3)'
        },
        xAxis: [
          {
            type: 'category',
            data: city,
            axisTick: {
              alignWithLabel: false,
              // 把x轴的刻度隐藏起来
              show: false
            },
            axisLabel: {
              color: '#4c9bfd'
            },
            // x轴这条线的颜色样式
            axisLine: {
              lineStyle: {
                color: 'rgba(0, 240, 255, 0.3)'
                // width: 3
              }
            }
          }
        ],
        yAxis: [
          {
            type: 'value',
            axisTick: {
              alignWithLabel: false,
              // 把y轴的刻度隐藏起来
              show: false
            },
            axisLabel: {
              color: '#4c9bfd'
            },
            // y轴这条线的颜色样式
            axisLine: {
              lineStyle: {
                color: 'rgba(0, 240, 255, 0.3)'
                // width: 3
              }
            },
            // y轴分割线的颜色样式
            splitLine: {
              lineStyle: {
                color: 'rgba(0, 240, 255, 0.3)'
              }
            }
          }
        ],
        series: [
          {
            name: '直接访问',
            type: 'bar',
            barWidth: '60%',
            data: num
          }
        ]
      }
      const chartDom = document.querySelector('.bar')
      const myChart = this.$echarts.init(chartDom)
      myChart.setOption(option)
    }
  },
  mounted () {
    this.getChart()
  }
}
</script>

<style lang="less" scoped>
.user {
  margin-top: 18px;
  height: 341px;
  .chart {
    display: flex;
    margin-top: 22px;
    height: 236px;
    .bar {
      width: 360px;
    }
  }
}
</style>
