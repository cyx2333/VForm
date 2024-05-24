<template>
  <div :class="['wrapper', params.selected?'selected':'']" @click="onClick">
    <slot></slot>
    <div class="drag-handler" v-show="params.selected">
      <a-icon name="DragOutlined"></a-icon>
    </div>
    <div class="container-action" v-show="params.selected">
      <a-tooltip class="i" placement="bottom">
        <template #title>上移组件</template>
        <a-icon name="ArrowUpOutlined" />
      </a-tooltip>
      <a-tooltip class="i" placement="bottom">
        <template #title>下移组件</template>
        <a-icon name="ArrowDownOutlined" />
      </a-tooltip>
      <a-tooltip class="i" placement="bottom">
        <template #title>移除组件</template>
        <a-icon name="DeleteOutlined" />
      </a-tooltip>
    </div>
  </div>
</template>

<script setup>
import {defineProps, inject, onBeforeUnmount} from 'vue'
const props =  defineProps({
  params: Object,
})

const WidgetData = inject('$WidgetData')

const onClick = () => {
  WidgetData.setSelectKey(props.params.key)
}

onBeforeUnmount(() => {
  WidgetData.removeObserver(props.params.key) 
})
</script>

<style lang="less" scoped>
.wrapper{
  padding: 2px;
  border: 1px dashed rgba(170, 170, 170, .75);
  outline: 1px dashed #336699;
  position: relative;
  margin-bottom: 5px;
  .container-action{
    position: absolute;
    bottom: -1px;
    right: -2px;
    height: 28px;
    line-height: 28px;
    background: #409EFF;
    z-index: 999;
    .i{
      font-size: 14px;
      color: #fff;
      margin: 0 5px;
      cursor: pointer;
      font-style: normal;
    }
  }
  .drag-handler{
    position: absolute;
    top: -2px;
    left: -2px;
    height: 22px;
    line-height: 22px;
    background: #409EFF;
    z-index: 9;
    color: #fff;
    padding: 0 4px;
    cursor: move;
  }
}
.selected{
  outline: 2px solid #409EFF;
}

</style>