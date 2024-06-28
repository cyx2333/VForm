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
    <a-form-item label="默认值" name="defaultValue" >
      <a-input v-model:value="element.options.defaultValue" size="small" />
    </a-form-item>
    <a-form-item label="必填项" name="required" >
      <a-switch v-model:checked="element.options.required" />
    </a-form-item>
    <a-form-item label="必填校验提示" name="requiredHint" >
      <a-input v-model:value="element.options.requiredHint" size="small" />
    </a-form-item>
    <a-form-item label="字段校验" name="validation" >
      <a-select v-model:value="element.options.validation" size="small">
        <a-select-option value="string">文本</a-select-option>
        <a-select-option value="number">数字</a-select-option>
        <a-select-option value="phone">手机号</a-select-option>
        <a-select-option value="email">邮箱</a-select-option>
        <a-select-option value="url">网址</a-select-option>
      </a-select>
    </a-form-item>
    <a-form-item label="字段校验提示" name="validationHint" >
      <a-input v-model:value="element.options.validationHint" size="small" />
    </a-form-item>
    <a-form-item label="禁用" name="disabled" >
      <a-switch v-model:checked="element.options.disabled" />
    </a-form-item>
    <a-form-item label="允许清除" name="allowClear" >
      <a-switch v-model:checked="element.options.allowClear" />
    </a-form-item>
  </a-form>
  <a-divider>事件属性</a-divider>
  <div class="event_list">
    <div class="event_item" v-for="(name, index) in eventNameList" :key="index">
      <div class="title">{{name}}</div>
      <a-button type="default" shape="round" size="small" @click="() => openEditor(name)">
        <a-icon name="EditOutlined" />
        编辑事件
      </a-button>
    </div>
  </div>
  <aceEditor :title="title" v-model:open="open" v-model:functionsCode="element.options[eventName]" />
</template>

<script setup>
import { computed, inject, reactive, ref } from 'vue'
import aceEditor from '@/components/ace-editor/ace-editor.vue';

const WidgetData = inject('$WidgetData')
const element = reactive(WidgetData.find(WidgetData.selectKey))
let eventName = ref('')
const open = ref(false)
const eventNameList = ['onChange', 'onInput', 'onFocus', 'onBlur']

const openEditor = (name) => {
  eventName.value = name 
  open.value = true
}

const title = computed(() => {
  return element.key + '.' + eventName.value
})

</script>

<style lang="less" scoped>
.event_list{
  .event_item{
    display: flex;
    align-items: center;
    justify-content: space-between;
    width: 80%;
    margin-bottom: 16px;
    .title{
      font-size: 13px;
      overflow: hidden;
      white-space: nowrap;
    }
  }
}
</style>