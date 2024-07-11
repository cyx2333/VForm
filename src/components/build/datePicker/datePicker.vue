<template>
  <Wrapper :params="params" :border="false">
    <a-form-item
      :label="params.options.label"
      :label-col="{ span: params.options.labelSpan }"
      :wrapper-col="{ span: params.options.wrapperSpan }"
      :labelAlign="params.options.labelAlign"
      :rules="rules"
    > 
      <a-date-picker
        v-model:value="value" 
        style="width: 100%;" 
        :placeholder="params.options.placeholder" 
        :allowClear="params.options.allowClear" 
        :valueFormat="params.options.valueFormat"
        :format="params.options.valueFormat"
        :disabled="params.options.disabled"
        :show-time="params.options.showtime"
        v-if="!params.options.range"
      />
      <a-range-picker
        v-model:value="value" 
        style="width: 100%;" 
        :placeholder="params.options.placeholder" 
        :allowClear="params.options.allowClear" 
        :valueFormat="params.options.valueFormat"
        :format="params.options.valueFormat"
        :disabled="params.options.disabled"
        :show-time="params.options.showtime"
        v-if="params.options.range"
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

const value = computed(() => props.params.options.defaultValue)

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