<template>
  <a-divider>常规属性</a-divider>
  <a-form
    :model="element"
    :label-col="{ span: 10 }"
    :wrapper-col="{ span: 14 }"
    autocomplete="off"
    labelAlign="left"
  >
    <a-form-item label="隐藏" name="hidden" >
      <a-switch v-model:checked="element.options.hidden" />
    </a-form-item>
    <a-divider>卡片属性</a-divider>
    <a-form-item label="是否收起" name="hidden" >
      <a-switch v-model:checked="element.options.folded" />
    </a-form-item>
    <a-form-item label="显示折叠按钮" name="hidden" >
      <a-switch v-model:checked="element.options.showFold" />
    </a-form-item>
  </a-form>
</template>

<script setup>
import { inject, reactive } from 'vue'

const WidgetData = inject('$WidgetData')
const element = reactive(WidgetData.find(WidgetData.selectKey))
</script>