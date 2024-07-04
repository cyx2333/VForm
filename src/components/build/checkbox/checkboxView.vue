<template>
  <Wrapper :params="params" :border="false">
    <a-form-item
      :label="params.options.label"
      :label-col="{ span: params.options.labelSpan }"
      :wrapper-col="{ span: params.options.wrapperSpan }"
      :labelAlign="params.options.labelAlign"
      :rules="rules"
    >
      <a-radio-group 
        v-model:value="value" 
        :options="plainOptions" 
        :disabled="params.options.disabled" 
        :size="params.options.size" 
        :optionType="params.options.optionType" 
        :buttonStyle="params.options.buttonStyle" 
      />
    </a-form-item>
  </Wrapper>
</template>

<script setup>
import Wrapper from '../wrapper'
import { computed, defineProps } from 'vue';

const props = defineProps({ 
  params: Object,
})
const plainOptions = computed(() => props.params.options.optionItems)
const value = computed(()=>props.params.options.defaultValue)

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