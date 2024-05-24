<template>
  <Icon :fill="fill" :spin="spin" :style="{fontSize:size + 'px'}" />
</template>

<script setup>
import {computed, defineProps} from 'vue'

const props = defineProps({
  name:String,
  fill:{
    type:String,
    default: 'currentColor'
  },
  size: {
    type:[Number, String],
    default: 14
  },
  spin: {
    type: Boolean,
    default: false
  },
})

let Icon = computed(()=>{
  return require('@ant-design/icons-vue')[props.name]
})

</script>
