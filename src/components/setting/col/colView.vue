<template>
  <a-divider>常规属性</a-divider>
  <a-form 
    :model="element"
    :label-col="{ span: 9 }"
    :wrapper-col="{ span: 13 }"
    labelAlign="left"
  >
    <a-form-item label="隐藏" name="hidden" >
      <a-switch v-model:checked="element.options.hidden" />
    </a-form-item>
    <a-divider>栅格属性</a-divider>
    <a-form-item label="栅格宽度" name="span" >
      <a-input-number class="input" v-model:value="element.options.span" :min="1" :max="24" />
    </a-form-item>
    <a-form-item label="左侧间隔格数" name="offset" >
      <a-input-number class="input" v-model:value="element.options.offset" :min="0" :max="24" />
    </a-form-item>
    <a-form-item label="右移栅格数" name="push" >
      <a-input-number class="input" v-model:value="element.options.push" :min="0" :max="24" />
    </a-form-item>
    <a-form-item label="左移栅格数" name="pull" >
      <a-input-number class="input" v-model:value="element.options.pull" :min="0" :max="24" />
    </a-form-item>
  </a-form>
</template>

<script setup>
import { inject, reactive } from 'vue'

const WidgetData = inject('$WidgetData')
const selectKey = WidgetData.selectKey
const element = reactive(WidgetData.find(selectKey))

</script>

<style lang="less" scoped>
.input{
  width: 160px;
}
</style>