<template>
  <!-- 基本布局 -->
  <div class="viewport">
    <!-- 左侧区域 -->
    <div class="column">
      <!-- 概览区域(overview) -->
      <overview />
      <!-- 监控区域 -->
      <monitor />
      <!-- 点位区域point -->
      <point />
    </div>
    <!-- 左侧区域 -->

    <!-- 中间区域 -->
    <div class="column">
      <!-- 地图区域 -->
      <mapChart />
      <!-- 用户统计区域 -->
      <users />
    </div>
    <!-- 中间区域 -->

    <!-- 右侧区域 -->
    <div class="column">
      <!-- 订单区域 -->
      <order />
      <!-- 销售统计 -->
      <sales />
      <!-- 使用场景 -->
      <scene />
      <!-- 设备热销 -->
      <hot />
    </div>
    <!-- 右侧区域 -->
  </div>
</template>

<script>
import overview from '@/views/overview.vue'
import monitor from '@/views/monitor.vue'
import point from '@/views/point.vue'
import mapChart from '@/views/map.vue'
import users from '@/views/users.vue'
import order from '@/views/order.vue'
import sales from '@/views/sales.vue'
import scene from '@/views/scene.vue'
import hot from '@/views/hot.vue'
export default {
  components: {
    overview,
    monitor,
    point,
    mapChart,
    users,
    order,
    sales,
    scene,
    hot
  }
}
</script>

<style lang="less" scoped>
.viewport {
  padding: 88px 20px 0;
  display: flex;
  background: url(@/assets/images/logo.png) no-repeat 0 0 / contain;
  .column {
    flex: 3;
    &:nth-child(2) {
      flex: 4;
      padding: 30px 15px 0;
    }
  }
}
</style>
