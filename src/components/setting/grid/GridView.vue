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
      <a-switch :checked="options.hidden" @change="val => element.options.hidden = val"/>
    </a-form-item>
    <a-form-item label="高度" name="height" >
      <a-input-number :value="options.height" :min="50" @change="val => element.options.height = val" />
    </a-form-item>
    <a-form-item label="当前栅格列:" :labelCol="{span: 24}" :wrapperCol="{span: 24}">
      <div class="list">
        <div class="item" v-for="(item, index) in options.colList" :key="index">
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
import { defineProps, inject } from 'vue'

const WidgetData = inject('$WidgetData')
defineProps({
  options: Object,
})

const widgetList = WidgetData.widgetList
const selectKey = WidgetData.selectKey
const element = widgetList.find(e => e.key === selectKey)

const add = () => {
  const item = WidgetData.createReactive({
    span: 12
  })
  element.options.colList.push(item)
}

const colListChange = (val, index) => {
  element.options.colList[index].span = val
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