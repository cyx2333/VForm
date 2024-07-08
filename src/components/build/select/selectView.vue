<template>
  <Wrapper :params="params" :border="false">
    <a-form-item
      :label="params.options.label"
      :label-col="{ span: params.options.labelSpan }"
      :wrapper-col="{ span: params.options.wrapperSpan }"
      :labelAlign="params.options.labelAlign"
      :rules="rules"
    >
      <a-select
        v-model:value="value"
        :options="plainOptions"
        :mode="params.options.multiple?'multiple':'combobox'"
        :allowClear="params.options.allowClear"
        :showSearch="params.options.showSearch"
        :filter-option="filterOption"
      ></a-select>
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

const filterOption = (input, option) => {
  return option.label.toLowerCase().indexOf(input.toLowerCase()) >= 0;
};

</script>