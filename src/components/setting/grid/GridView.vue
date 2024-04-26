<template>
  <a-form
    :model="options"
    :label-col="{ span: 6 }"
    :wrapper-col="{ span: 16 }"
    autocomplete="off"
    labelAlign="left"
  >
    <a-form-item
      label="隐藏"
      name="hidden"
    >
      <a-switch v-model:checked="options.hidden" @change="change"/>
    </a-form-item>
    <a-form-item
      label="高度"
      name="height"
    >
      <a-input-number v-model:value="options.height" :min="50" @change="change"/>
    </a-form-item>
  </a-form>
</template>

<script setup>
import { computed, defineProps, watch } from 'vue'
import { useStore } from 'vuex'

const store = useStore()

const props = defineProps({
  options: Object,
})
const options = computed(() => {
  return props.options
})

const change = () => {
  console.log(store.getters['view/widgetList'])
}

watch(() => store.getters['view/widgetList'], (val) => {
  console.log(val);
})
</script>