<template>
  <Wrapper id="CardView" :params="params">
    <a-card :title="params.options.title">
      <template #extra>
        <a-icon v-show="params.options.showFold && !params.options.folded" name="DownOutlined"></a-icon>
        <a-icon v-show="params.options.showFold && params.options.folded" name="UpOutlined"></a-icon>
      </template>
      <DragView v-show="!params.options.folded" :viewKey="params.key" :list="params.children" @change="(e) => onChange(e, params.key)"></DragView>
    </a-card>
  </Wrapper>
</template>

<script setup>
import Wrapper from '../wrapper'
import { defineProps, inject } from 'vue';
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

<style lang="less">
#CardView .ant-card-body{
  padding: 0;
}
#CardView .content{
  background: #fff;
  min-height: calc(100% - 20px - 42px);
  padding: 20px;
  margin: 1px 0 0 0;
}
</style>
