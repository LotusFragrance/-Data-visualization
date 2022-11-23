<template>
  <div class="pannel scene">
    <div class="inner">
      <h3>设备使用场景</h3>
      <div class="data">
        <div class="radar"></div>
      </div>
    </div>
  </div>
</template>

<script>
import { sceneApi } from '@/api/scene'
export default {
  methods: {
    async getData () {
      const { data: { data } } = await sceneApi()
      const data1 = []
      const data2 = []
      Object.keys(data).forEach(k => {
        data1.push({
          name: k,
          max: 100
        })
        data2.push(data[k])
      })
      const option = {
        // backgroundColor: '#0D2753',
        tooltip: {
          // 雷达图的tooltip不会超出div，也可以设置position属性，position定位的tooltip 不会随着鼠标移动而位置变化，不友好
          confine: true,
          enterable: true // 鼠标是否可以移动到tooltip区域内
        },
        radar: {
          name: {
            textStyle: {
              color: '#05D5FF',
              fontSize: 10
            }
          },
          shape: 'polygon',
          center: ['50%', '50%'],
          radius: '75%',
          startAngle: 120,
          scale: true,
          axisLine: {
            lineStyle: {
              color: 'rgba(5, 213, 255, .8)'
            }
          },
          splitLine: {
            show: true,
            lineStyle: {
              width: 1,
              color: 'rgba(5, 213, 255, .8)' // 设置网格的颜色
            }
          },
          indicator: data1,
          splitArea: {
            show: false
          }
        },
        grid: {
          position: 'center'
        },
        polar: {
          center: ['50%', '50%'], // 默认全局居中
          radius: '0%'
        },
        angleAxis: {
          min: 0,
          interval: 5,
          clockwise: false,
          axisTick: {
            show: false
          },
          axisLabel: {
            show: false
          },
          axisLine: {
            show: false
          },
          splitLine: {
            show: false
          }
        },
        radiusAxis: {
          min: 0,
          interval: 20,
          splitLine: {
            show: false
          }
        },
        series: [
          {
            name: '设备使用场景',
            type: 'radar',
            symbol: 'circle', // 拐点的样式，还可以取值'rect','angle'等
            symbolSize: 6, // 拐点的大小
            itemStyle: {
              normal: {
                color: '#05D5FF'
              }
            },
            areaStyle: {
              normal: {
                color: '#05D5FF',
                opacity: 0.5
              }
            },
            lineStyle: {
              width: 1,
              color: '#05D5FF'
            },
            label: {
              normal: {
                show: true,
                formatter: (params) => {
                  return params.value
                },
                color: '#fff'
              }
            },
            data: [
              {
                value: data2
              }
            ]
          }
        ]
      }
      const chartDom = document.querySelector('.radar')
      const myChart = this.$echarts.init(chartDom)
      myChart.setOption(option)
    }
  },
  mounted () {
    this.getData()
  }
}
</script>

<style lang="less" scoped>
.scene {
  height: 200px;
  .inner {
    display: flex;
    flex-direction: column;
    .data {
      flex: 1;
      margin-top: 10px;
      .radar {
        width: 100%;
        height: 100%;
      }
    }
  }
}
</style>
