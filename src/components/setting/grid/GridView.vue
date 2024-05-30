<template>
  <a-divider>栅格属性</a-divider>
  <a-form
    :model="options"
    :label-col="{ span: 6 }"
    :wrapper-col="{ span: 16 }"
    autocomplete="off"
    labelAlign="left"
  >
    <a-form-item label="隐藏" name="hidden" >
      <a-switch :checked="options.hidden" @change="val => options.hidden = val"/>
    </a-form-item>
    <a-form-item label="高度" name="colHeight" >
      <a-input-number :value="options.colHeight" :min="50" @change="val => options.colHeight = val" />
    </a-form-item>
    <a-form-item label="当前栅格列:" :labelCol="{span: 24}" :wrapperCol="{span: 24}">
      <div class="list">
        <div class="item" v-for="(item, index) in children" :key="index">
          <span class="title">栅格宽度{{ index + 1 }}</span>
          <a-input-number class="inputNumber" size="small" :value="item.span" :min="1" :max="24" @change="(val) => colListChange(val, index)" />
          <a-icon class="delete" name="MinusCircleOutlined" size="20" style="color: #ff4d4f;" />
        </div>
      </div>
      <a-button type="primary" @click="add">增加栅格</a-button>
    </a-form-item>
  </a-form>
</template>

<script setup>
import { computed, defineProps, inject } from 'vue'

const WidgetData = inject('$WidgetData')
const props = defineProps({
  params: Object,
})

const options = computed(() => {
  return props.params.options
})

const children = computed(() => {
  return props.params.children
})

const add = () => {
  children.value.push(WidgetData.createReactive(Object.assign({
    parentKey: props.params.key,
    content: []
  },options.value.defaultChildrenOptions)))
}

const colListChange = (val, index) => {
  children.value[index].span = val
}

</script>

<style lang="less" scoped>
.list{
  display: flex;
  flex-direction: column;
  align-items: center;
  flex: 1;
  flex-wrap: wrap;
  width: 100%;
  .item{
    display: flex;
    align-items: center;
    margin-bottom: 10px;
    .title{
      display: inline-block;
      font-size: 13px;
      width: 120px;
    }
    .inputNumber{
      width: 120px;
      line-height: 22px;
    }
    .delete{
      margin-left: 6px;
      cursor: pointer;
    }
  }
}
</style>