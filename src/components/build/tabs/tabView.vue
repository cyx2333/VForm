<template>
  <Wrapper class="grid" :params="params">
    <a-tabs :activeKey="params.options.activeKey" type="card" :tabBarStyle="{margin: '0'}">
      <a-tab-pane class="tabPane" :tab="() => setTab(item, index)" v-for="(item, index) in params.children" :key="item.key">
        <DragView :viewKey="item.key" :list="item.children" @change="(e) => onChange(e, item.key)" inComponent></DragView>
      </a-tab-pane>
    </a-tabs>
  </Wrapper>
</template>

<script setup>
import Wrapper from '../wrapper'
import { defineProps, inject } from 'vue';
import DragView from '@/layout/home/components/DragView.vue'

const WidgetData = inject('$WidgetData')

defineProps({ 
  params: Object,
})

const onChange = (e, parentKey) => {
  for (let key in e) {
    WidgetData.setChildrenWidget(key, e[key], parentKey)
  }
}

const setTab = (item, index) => {
  if (item.options.title) {
    return item.options.title
  } else {
    return 'Tab' + (index + 1)
  }
}

</script>

<style lang="less" scoped>
.tabPane{
  padding: 15px;
}
</style>