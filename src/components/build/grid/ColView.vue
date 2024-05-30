<template>
  <a-col :style="{minHeight: item.options.colHeight + 'px'}" :span="item.options.span" v-for="(item, index) in params.children" :key="index">
    <Wrapper class="colContent" :params="item">
      <DragView :viewKey="item.key" :list="item.children" @change="(e) => onChange(e, item.key)"></DragView>
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
  console.log('Colview', e, parentKey);
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