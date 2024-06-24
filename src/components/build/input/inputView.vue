<template>
  <Wrapper :params="params" :border="false">
    <a-form-item
      :label="params.options.label"
      :label-col="{ span: params.options.labelSpan }"
      :wrapper-col="{ span: params.options.wrapperSpan }"
      :labelAlign="params.options.labelAlign"
    >
      <a-input v-if="params.options.type === 'text'" :placeholder="params.options.placeholder" />
      <a-input-number v-if="params.options.type === 'number'" :placeholder="params.options.placeholder" />
      <a-input-password v-if="params.options.type === 'password'" :placeholder="params.options.placeholder" />
    </a-form-item>
  </Wrapper>
</template>

<script setup>
import Wrapper from '../wrapper'
import { defineProps } from 'vue';

defineProps({ 
  params: Object,
})

</script>