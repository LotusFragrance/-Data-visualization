<template>
  <div class="data" v-if="sum[0]">
    <ul>
      <li>
        <h4>{{ sum[0].sum }}</h4>
        <i class="icon-dot" style="color: #ed3f35"></i>
        <span>{{ sum[0].name }}</span>
      </li>
      <li>
        <h4>{{ sum[1].sum }}</h4>
        <i class="icon-dot" style="color: #eacf19"></i>
        <span>{{ sum[1].name }}</span>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  props: {
    sum: {
      type: Array
    }
  }
}
</script>

<style lang="less" scoped>
.data {
  flex: 1;
  background: url(../assets/images/rect.png) no-repeat 0 0 / cover;
  ul {
    padding: 30px 0;
    height: 100%;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
  }
  li {
    text-align: center;
    h4 {
      margin-bottom: 10px;
      font-size: 28px;
      color: #fff;
    }
    span,
    .icon-dot {
      font-size: 16px;
    }
    span {
      color: #4c9bfd;
    }
  }
}
</style>
