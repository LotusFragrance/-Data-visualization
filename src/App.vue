<template>
  <!-- 基本布局 -->
  <div class="viewport">
    <div class="column">
      <div class="pannel">
        <div class="inner">11
          11
          11
          <br>
        </div>
      </div>
    </div>
    <div class="column">
      <div class="middle">2</div>
    </div>
    <div class="column">3</div>
  </div>
</template>

<script>
export default {}
</script>

<style lang="less" scoped>
.viewport {
  padding: 88px 20px 0;
  display: flex;
  background: url(@/assets/images/logo.png) no-repeat 0 0 / contain;
  .column {
    flex: 3;
    color: #fff;
    &:nth-child(2) {
      flex: 4;
      padding: 30px 15px 0;
      background-color: transparent;
      .middle {
        color: #fff;
      }
    }
  }
}
</style>
