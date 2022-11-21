<template>
  <div class="map">
    <h3>
      <span class="icon-cube"></span>
      设备数据流向
    </h3>
    <div class="chart">
      <div class="geo"></div>
    </div>
  </div>
</template>

<script>
import { obj } from '@/source/china'
import { option } from '@/source/map'
import { mapApi } from '@/api/map'
export default {
  mounted () {
    this.getData()
  },
  methods: {
    async getData () {
      try {
        const { data: { data } } = await mapApi()
        // 引入china.js
        this.$echarts.registerMap('china', obj)
        const chartDom = document.querySelector('.geo')
        const myChart = this.$echarts.init(chartDom)
        myChart.setOption(option(data.GZData, data.zjdata))
      } catch (error) {
        console.log(error)
      }
    }
  }
}
</script>

<style lang="less" scoped>
.map {
  display: flex;
  flex-direction: column;
  height: 577px;
  h3 {
    margin: 15px 0;
    color: #fff;
    font-size: 20px;
    span {
      color: #68d8fe;
    }
  }
  .chart {
    flex: 1;
    background-color: rgba(255, 255, 255, 0.05);
    .geo {
        width: 100%;
        height: 100%;
    }
  }
}
</style>
