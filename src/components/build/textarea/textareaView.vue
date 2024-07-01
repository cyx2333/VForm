<template>
  <Wrapper :params="params" :border="false">
    <a-form-item
      :label="params.options.label"
      :label-col="{ span: params.options.labelSpan }"
      :wrapper-col="{ span: params.options.wrapperSpan }"
      :labelAlign="params.options.labelAlign"
      :rules="rules"
    >
      <a-textarea :placeholder="params.options.placeholder" :defaultValue="params.options.defaultValue" :key="params.options.defaultValue" :disabled="params.options.disabled" :allowClear="params.options.allowClear" :autoSize="{minRows: params.options.rows, maxRows: params.options.rows}" />
    </a-form-item>
  </Wrapper>
</template>

<script setup>
import Wrapper from '../wrapper'
import { computed, defineProps } from 'vue';

const props = defineProps({ 
  params: Object,
})

const rules = computed(() => {
  return [
    {
      required: props.params.options.required,
      message: props.params.options.requiredHint,
      trigger: 'change'
    },
  ]
})

</script>