<template>
  <a-divider>常规属性</a-divider>
  <a-form
    :model="element"
    :label-col="{ span: 10 }"
    :wrapper-col="{ span: 14 }"
    autocomplete="off"
    labelAlign="left"
  > 
    <a-form-item label="隐藏" name="hidden" >
      <a-switch v-model:checked="element.options.hidden" />
    </a-form-item>
    <a-form-item label="标签名称" name="label" >
      <a-input v-model:value="element.options.label" size="small" />
    </a-form-item>
    <a-form-item label="标签跨距" name="labelSpan" >
      <a-input-number class="input" v-model:value="element.options.labelSpan" :min="1" :max="24" size="small" />
    </a-form-item>
    <a-form-item label="内容跨距" name="labelSpan" >
      <a-input-number class="input" v-model:value="element.options.wrapperSpan" :min="1" :max="24" size="small" />
    </a-form-item>
    <a-form-item label="显示类型" name="type" >
      <a-select v-model:value="element.options.type" size="small">
        <a-select-option value="text">文本</a-select-option>
        <a-select-option value="number">数字</a-select-option>
        <a-select-option value="password">密码</a-select-option>
      </a-select>
    </a-form-item>
    <a-form-item label="字段标签对齐" name="labelAlign" >
      <a-radio-group v-model:value="element.options.labelAlign" size="small" button-style="solid">
        <a-radio-button value="left">居左</a-radio-button>
        <a-radio-button value="right">居右</a-radio-button>
      </a-radio-group>      
    </a-form-item>
    <a-form-item label="占位内容" name="placeholder" >
      <a-input v-model:value="element.options.placeholder" size="small" />
    </a-form-item>
  </a-form>
</template>

<script setup>
import { inject, reactive } from 'vue'

const WidgetData = inject('$WidgetData')
const element = reactive(WidgetData.find(WidgetData.selectKey))


</script>