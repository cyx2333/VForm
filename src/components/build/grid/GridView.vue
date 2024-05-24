<template>
  <Wrapper class="grid" :params="params">
    <a-row>
      <a-col :style="{height: params.options.height + 'px'}" :span="item.span" v-for="(item, index) in params.options.colList" :key="index">col-6</a-col>
    </a-row>
  </Wrapper>
</template>

<script setup>
import Wrapper from '../wrapper'
import { defineProps } from 'vue';

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