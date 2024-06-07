<template>
  <a-divider>常规属性</a-divider>
  {{ element }}
</template>

<script setup>
import { inject, reactive } from 'vue'

const WidgetData = inject('$WidgetData')
const selectKey = WidgetData.selectKey
const element = reactive(WidgetData.find(selectKey))

</script>