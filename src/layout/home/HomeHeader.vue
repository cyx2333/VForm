<template>
  <header class="header">
    <div class="content" align="center" justify="space-between">
      <div class="left">
        <img class="logo" src="@/assets/logo.png" alt="">
        <span class="title">XAdmin</span>
        后台设计器
      </div>
    </div>
  </header>
</template>

<script setup>

</script>

<style lang="less" scoped>
.header{
  height: 48px;
  background: #fff;
  border-bottom: 2px dotted #EBEEF5;
  padding: 0 20px;
  .content{
    display: flex;
    align-items: center;
    justify-content: space-between;
    height: 48px;
    .left{
      display: flex;
      align-items: center;
      font-size: 18px;
      color: #242424;
      .logo{
        display: block;
        width: 36px;
        height: 36px;
      }
      .title{
        font-size: 20px;
        font-weight: 700;
        margin: 0 6px;
      }
    }
  }
  
}
</style>