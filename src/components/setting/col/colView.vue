<template>
  <a-divider>常规属性</a-divider>
  {{ element }}
  <a-form 
    :model="element"
    :label-col="{ span: 6 }"
    :wrapper-col="{ span: 16 }"
    autocomplete="off"
    labelAlign="left"
  >
    <a-form-item label="隐藏" name="hidden" >
      <a-switch v-model:checked="element.options.hidden" />
    </a-form-item>
    <a-form-item label="高度" name="colHeight" >
      <a-input-number v-model:value="element.options.colHeight" :min="50" />
    </a-form-item>
    <a-divider>栅格属性</a-divider>
    
  </a-form>
</template>

<script setup>
import { inject, reactive } from 'vue'

const WidgetData = inject('$WidgetData')
const selectKey = WidgetData.selectKey
const element = reactive(WidgetData.find(selectKey))

</script>