<template>
  <Wrapper class="grid" :params="params">
    <a-row>
      <ColView :params="params"></ColView>
    </a-row>
  </Wrapper>
</template>

<script setup>
import Wrapper from '../wrapper'
import { defineProps } from 'vue';
import ColView from './ColView.vue'
  
defineProps({
  params: Object,
})

</script>

<style lang="less" scoped>
.grid{
  .ant-row{
    min-height: 50px;
    .ant-col{
      min-height: 38px !important;
      padding: 3px;
      outline: 1px dashed #336699;
      position: relative;
    }
  }
}
</style>