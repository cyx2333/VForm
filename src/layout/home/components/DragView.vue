<template>
  <draggable 
    :list="list" 
    v-bind="{ group: 'panel', ghostClass: 'ghost', handle: '.drag-handler', pull: true, put: false, animation: 300}" 
    :class="dragClass" 
    @change="onChange" 
    item-key="key"
    :key="WidgetData.selectKey" 
  >
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
  viewKey: String,
  inComponent: {
    type: Boolean,
    default: false
  }
})

const dragClass = props.inComponent?'content2':'content'

const WidgetData = inject('$WidgetData')

const list = ref(Array.from(props.list))

WidgetData.addObserver(props.viewKey, () => {
  if (props.viewKey) {
    if (props.viewKey.indexOf('Premier') >= 0) {
      list.value = Array.from(WidgetData.widgetList)
    } else {
      let item = WidgetData.find(props.viewKey)
      if (item) {
        list.value = Array.from(item.children)
      }
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
  min-height: calc(100vh - 20px - 90px);
  margin: 10px;
}
.content2{
  height: calc(100% - 20px);
  margin: 10px 0;
}
</style>