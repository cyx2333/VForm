<template>
  <Wrapper :params="params" :border="false">
    <a-form-item
      :label="params.options.label"
      :label-col="{ span: params.options.labelSpan }"
      :wrapper-col="{ span: params.options.wrapperSpan }"
      :labelAlign="params.options.labelAlign"
      :rules="rules"
    >
      <a-input v-if="params.options.type === 'text'" :placeholder="params.options.placeholder" :defaultValue="params.options.defaultValue" :key="params.options.defaultValue" :disabled="params.options.disabled" :allowClear="params.options.allowClear"/>
      <a-input-number v-if="params.options.type === 'number'" :placeholder="params.options.placeholder" :defaultValue="params.options.defaultValue" :key="params.options.defaultValue" :disabled="params.options.disabled" :allowClear="params.options.allowClear" style="width: 100%;" />
      <a-input-password v-if="params.options.type === 'password'" :placeholder="params.options.placeholder" :defaultValue="params.options.defaultValue" :key="params.options.defaultValue" :disabled="params.options.disabled" :allowClear="params.options.allowClear"/>
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