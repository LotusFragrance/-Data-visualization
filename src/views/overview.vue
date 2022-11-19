<template>
  <div class="pannel overview">
    <div class="inner">
      <ul>
        <li v-for="(obj, index) in arr" :key="index">
          <div>{{ obj.sum }}</div>
          <div>
            <i class="icon-dot" :style="{ color: obj.color }"></i>{{ obj.name }}
          </div>
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
import { overviewApi } from '@/api/overview'
export default {
  data () {
    return {
      arr: []
    }
  },
  created () {
    this.getData()
  },
  methods: {
    async getData () {
      try {
        const { data } = await overviewApi()
        this.arr = data.data
      } catch (error) {
        console.log(error)
      }
    }
  }
}
</script>

<style lang="less" scoped>
.overview {
  height: 110px;
  .inner {
    ul {
      height: 100%;
      display: flex;
      justify-content: space-between;
      li {
        height: 100%;
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: space-around;
        div {
          &:nth-child(1) {
            color: #fff;
            font-size: 30px;
          }
          &:nth-child(2) {
            color: #4c9bfd;
            font-size: 14px;
          }
        }
      }
    }
  }
}
</style>
