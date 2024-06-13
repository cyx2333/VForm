<template>
  <draggable :list="list" v-bind="{ group: 'panel', ghostClass: 'ghost', handle: '.drag-handler', pull: true, put: false, animation: 300}" class="content" @change="onChange" item-key="key">
    <template #item="{ element }">
      <xcomponent :params="element" />
    </template>
  </draggable>
</template>

<script setup>
import { defineEmits, defineProps, inject, ref } from "vue";
import draggable from "vuedraggable";
import xcomponent from '../../xcomponents'

const emits = defineEmits(['change'])
const props = defineProps({
  list: Array,
  viewKey: String
})

const WidgetData = inject('$WidgetData')

const list = ref(Array.from(props.list))

WidgetData.addObserver(props.viewKey, () => {
  if (props.viewKey) {
    if (props.viewKey.indexOf('Premier') >= 0) {
      list.value = Array.from(WidgetData.widgetList)
    } else {
      list.value = Array.from(WidgetData.find(props.viewKey).children)
    }
  }
})

const onChange = (e) => {
  emits('change', e)
}

</script>

<style lang="less" scoped>
.content{
  background: #fff;
  width: calc(100% - 20px);
  min-height: calc(100% - 20px - 42px);
  margin: 10px;
}
</style>