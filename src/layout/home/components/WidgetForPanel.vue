<template>
  <div class="item">
    <!-- <a-icon :name="icon" /> -->
    <a-iconfont :type="icon" />
    {{ title }}
  </div>
</template>

<script setup>
import { defineProps } from 'vue'

defineProps({
  title: String,
  icon: String
})
</script>

<style lang="less" scoped>
.item{
  height: 32px;
  line-height: 32px;
  width: 91px;
  cursor: move;
  white-space: nowrap;
  text-overflow: ellipsis;
  overflow: hidden;
  background: #fff;
  border: 1px solid #e8e9eb;
  border-radius: 4px;
  padding: 0 8px;
  box-sizing: content-box;
}
</style>