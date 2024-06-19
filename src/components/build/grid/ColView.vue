<template>
  <a-col 
    :style="{minHeight: params.options.colHeight + 'px'}" 
    :span="item.options.span" 
    v-for="(item, index) in params.children" 
    :key="index" 
    :offset="item.options.offset" 
    :pull="item.options.pull"
    :push="item.options.push"
  >
    <Wrapper class="colContent" :params="item">
      <DragView :viewKey="item.key" :list="item.children" @change="(e) => onChange(e, item.key)" inComponent></DragView>
    </Wrapper>
  </a-col>
</template>

<script setup>
import { defineProps, inject } from 'vue';
import Wrapper from '../wrapper'
import DragView from '@/layout/home/components/DragView.vue'

defineProps({
  params: Object,
})

const WidgetData = inject('$WidgetData')

const onChange = (e, parentKey) => {
  for (let key in e) {
    WidgetData.setChildrenWidget(key, e[key], parentKey)
  }
}

</script>

<style lang="less" scoped>
.colContent{
  height: 100%;
}
</style>