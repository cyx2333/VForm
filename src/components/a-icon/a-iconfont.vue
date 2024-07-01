<template>
  <a-space>
    <icon-font :type="type" :style="{fontSize:size + 'px'}"/>
  </a-space>
</template>

<script setup>
import {defineProps} from 'vue'

defineProps({
  type: String,
  size: {
    type:[Number, String],
    default: 14
  },
})

import { createFromIconfontCN } from '@ant-design/icons-vue';
const IconFont = createFromIconfontCN({
  scriptUrl: '//at.alicdn.com/t/c/font_4592977_gmrpqnubk0m.js',
});
</script>

<style scoped>

</style>