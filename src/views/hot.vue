<template>
  <div class="pannel hot">
    <div class="inner">
      <div class="item">
        <h3>全国热榜</h3>
        <ul>
          <li>
            <i class="icon-cup1" style="color: #d93f36"></i>
            <span>设备1</span>
          </li>
          <li>
            <i class="icon-cup2" style="color: #68d8fe"></i>
            <span>设备2</span>
          </li>
          <li>
            <i class="icon-cup3" style="color: #4c9bfd"></i>
            <span>设备3</span>
          </li>
        </ul>
      </div>
      <div class="item">
        <h3>各省热榜</h3>
        <ul @mouseover="passFn" @mouseout="outFn">
          <li
            v-for="(obj, index) in city"
            :key="index"
            @click="clickFn(index)"
            :class="{ common: isOk === index }"
          >
            <span style="margin-right: 3px">{{ obj.city }}</span>
            <span style="margin-right: 3px">{{ obj.sales }}</span>
            <i class="icon-up" v-if="obj.flag" style="color: #dc3c33"></i>
            <i class="icon-down" v-else style="color: #36be90"></i>
          </li>
        </ul>
      </div>
      <div class="item">
        <span class="head">//近30日//</span>
        <ul>
          <li v-for="(obj, index) in brands" :key="index">
            <span style="margin-right: 3px">{{ obj.name }}</span>
            <span style="margin-right: 3px">{{ obj.num }}</span>
            <i class="icon-up" v-if="obj.flag" style="color: #dc3c33"></i>
            <i class="icon-down" v-else style="color: #36be90"></i>
          </li>
        </ul>
      </div>
    </div>
  </div>
</template>

<script>
import { hotApi } from '@/api/hot'
export default {
  data () {
    return {
      city: [],
      brands: [],
      isOk: 0,
      timer: null
    }
  },
  methods: {
    async getData () {
      const {
        data: { data }
      } = await hotApi()
      this.city = data
      this.brands = data[0].brands
    },
    async clickFn (index) {
      this.isOk = index
      const {
        data: { data }
      } = await hotApi()
      this.brands = data[index].brands
    },
    passFn () {
      clearInterval(this.timer)
    },
    outFn () {
      this.timer = setInterval(() => {
        this.isOk += 1
        if (this.isOk > this.city.length - 1) {
          this.isOk = 0
        }
        this.brands = this.city[this.isOk].brands
      }, 1500)
    }
  },
  created () {
    this.getData()
    this.timer = setInterval(() => {
      this.isOk += 1
      if (this.isOk > this.city.length - 1) {
        this.isOk = 0
      }
      this.brands = this.city[this.isOk].brands
    }, 1500)
  }
}
</script>

<style lang="less" scoped>
.hot {
  height: 342px;
  .inner {
    display: flex;
    .item {
      flex: 1;
      &:nth-child(3) {
        .head {
          font-size: 15px;
          color: #0bace6;
          line-height: 23px;
        }
        li {
          span {
            color: #52ffff !important;
          }
        }
        ul {
          background-color: rgba(10, 67, 188, 0.2);
        }
      }
      &:nth-child(1) {
        ul {
          li {
            margin: 30px 0;
            display: flex;
            align-items: center;
            span {
              color: #4c9bfd;
              font-size: 16px;
            }
            i {
              margin-right: 15px;
              font-size: 40px;
            }
          }
        }
      }
      &:nth-child(2),
      &:nth-child(3) {
        ul {
          margin-top: 30px;
          li {
            padding: 5px 0;
            height: 35px;
            text-align: center;
            line-height: 25px;
            font-size: 12px;
            span {
              color: #4995f4;
            }
          }
        }
      }
    }
  }
}
.common {
  background-color: rgba(10, 67, 188, 0.2);
}
</style>
