<template>
  <a-modal v-model:open="open" title="组件事件处理" @ok="open = false" :width="700">
    <a-alert class="alert" :message="title + '() {' " type="success" />
    <v-ace-editor
      v-model:value="functionsCode"
      lang="javascript"
      theme="chrome"
      :options="{
        enableBasicAutocompletion: true,
        enableSnippets: true,
        enableLiveAutocompletion: true,
        fontSize: 14,
        tabSize: 2,
        showPrintMargin: false,
        highlightActiveLine: true,
      }"
      highlightActiveLine
      style="height: 300px" 
    />
    <a-alert class="alert" :message="' }' " type="success" />
  </a-modal>
</template>

<script setup>
import { VAceEditor } from 'vue3-ace-editor';
import { defineProps, defineModel } from 'vue'
import './ace.config'

defineProps({
  title: String,
})
let open = defineModel('open')
let functionsCode = defineModel('functionsCode')

</script>

<style lang="less" scoped>
.alert{
  color: #909399;
  background-color: #f4f4f5;
  border: 0;
  border-radius: 0;
}
</style>