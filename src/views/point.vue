<template>
  <div class="pannel point">
    <div class="inner">
      <h3>点位分布统计</h3>
      <div class="chart">
        <div class="pie"></div>
        <dataShow :sum="sum"/>
      </div>
    </div>
  </div>
</template>

<script>
import { pointApi, pointSumApi } from '@/api/point'
import dataShow from '@/components/data.vue'
export default {
  data () {
    return {
      sum: []
    }
  },
  components: {
    dataShow
  },
  created () {
    this.getPointData()
    this.getPointSum()
  },
  methods: {
    async getPointData () {
      let {
        data: { data }
      } = await pointApi()
      const color = [
        '#006cff',
        '#60cda0',
        '#ed8884',
        '#ff9f7f',
        '#0096ff',
        '#9fe6b8',
        '#32c5e9',
        '#1d9dff'
      ]
      data = data.map((item, index) => {
        item.label = { color: color[index] }
        return item
      })
      const option = {
        tooltip: {
          trigger: 'item',
          formatter: '{a} <br/>{b} : {c} ({d}%)'
        },
        color: color,
        series: [
          {
            name: '点位统计',
            type: 'pie',
            radius: ['10%', '60%'],
            center: ['50%', '50%'],
            roseType: 'radius',
            data: data,
            label: {
              fontSize: 10
            },
            labelLine: {
              // 连接到图形的线长度
              length: 6,
              // 连接到文字的线长度
              length2: 8
            }
          }
        ]
      }
      const chartDom = document.querySelector('.pie')
      const myChart = this.$echarts.init(chartDom)
      myChart.setOption(option)
    },
    async getPointSum () {
      const { data: { data } } = await pointSumApi()
      this.sum = data
    }
  }
}
</script>

<style lang="less" scoped>
.point {
  height: 340px;
  .chart {
    display: flex;
    margin-top: 22px;
    .pie {
      width: 250px;
      height: 236px;
    }
  }
}
</style>
