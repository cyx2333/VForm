<template>
  <Wrapper :params="params" :border="false">
    <a-form-item
      :label="params.options.label"
    >
      <a-input />
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