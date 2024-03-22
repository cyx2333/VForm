<template>
  <div class="draw">
    <div class="header">
      <a-button class="btn">Layout</a-button>
      <a-button class="btn">Menu</a-button>
    </div>
    <div class="content">

    </div>
  </div>
</template>

<script setup></script>

<style lang="less" scoped>
.draw{
  flex: 1;
  .header{
    height: 42px;
    border-bottom: 2px dotted #EBEEF5;
    background: #fff;
    display: flex;
    align-items: center;
    padding: 0 15px;
    .btn{
      margin: 0 5px;
    }
  }
  .content{
    background: #fff;
    width: calc(100% - 20px);
    min-height: calc(100% - 20px - 42px);
    margin: 10px;
  }
}
</style>