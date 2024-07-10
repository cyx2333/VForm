<template>
  <div :class="['wrapper', border?'border':'',selected?'selected':'']" @click.stop="onClick">
    <slot></slot>
    <div class="drag-handler" v-show="selected">
      <a-icon name="DragOutlined"></a-icon>
    </div>
    <div class="container-action" v-show="selected">
      <a-tooltip class="i" placement="bottom">
        <template #title>返回上级</template>
        <a-icon name="VerticalAlignTopOutlined" />
      </a-tooltip>
      <!-- <a-tooltip class="i" placement="bottom">
        <template #title>上移组件</template>
        <a-icon name="ArrowUpOutlined" />
      </a-tooltip>
      <a-tooltip class="i" placement="bottom">
        <template #title>下移组件</template>
        <a-icon name="ArrowDownOutlined" />
      </a-tooltip> -->
      <a-tooltip class="i" placement="bottom" @click="remove">
        <template #title>移除组件</template>
        <a-icon name="DeleteOutlined" />
      </a-tooltip>
    </div>
  </div>
</template>

<script setup>
import {computed, defineProps, inject, onBeforeUnmount} from 'vue'
const props =  defineProps({
  params: Object,
  border: {
    type: Boolean,
    default: true
  }
})

const WidgetData = inject('$WidgetData')
const selected = computed(() => {
  return WidgetData.selectKey === props.params.key
})

const onClick = () => {
  WidgetData.setSelectKey(props.params.key)
}

onBeforeUnmount(() => {
  WidgetData.removeObserver(props.params.key) 
})

const remove = () => {
  WidgetData.remove(props.params.key)
}
</script>

<style lang="less" scoped>
.wrapper{
  padding: 2px;
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
.border{
  border: 1px dashed rgba(170, 170, 170, .75);
  outline: 1px dashed #336699;
}
.selected{
  outline: 2px solid #409EFF;
}

</style>