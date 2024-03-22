<template>
  <div id="container">
    <HomeHeader></HomeHeader>
    <div class="content">
      <Panel></Panel>
      <Draw></Draw>
      <AttrView></AttrView>
    </div>
  </div>
</template>

<script setup>
import HomeHeader from './home/HomeHeader.vue';
import Panel from './home/PanelView.vue';
import Draw from './home/DrawView.vue';
import AttrView from './home/AttrView.vue';
</script>

<style lang="less" scoped>
#container{
  width: 100%;
  height: 100vh;
  background: #f1f2f3;
  min-width: 1240px;
  display: flex;
  flex-direction: column;
  overflow-y: hidden;
  .content{
    flex: 1;
    display: flex;
  }
}
</style>