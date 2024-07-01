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
    <a-form-item label="字段标签对齐" name="labelAlign" >
      <a-radio-group v-model:value="element.options.labelAlign" size="small" button-style="solid">
        <a-radio-button value="left">居左</a-radio-button>
        <a-radio-button value="right">居右</a-radio-button>
      </a-radio-group>      
    </a-form-item>
    <a-form-item label="必填项" name="required" >
      <a-switch v-model:checked="element.options.required" />
    </a-form-item>
    <a-form-item label="必填校验提示" name="requiredHint" >
      <a-input v-model:value="element.options.requiredHint" size="small" />
    </a-form-item>
    <a-form-item label="禁用" name="disabled" >
      <a-switch v-model:checked="element.options.disabled" />
    </a-form-item>
    <a-divider>选项属性</a-divider>
    <a-form-item label="选项设置" name="optionItems" >
      <a-button type="default" shape="round" size="small" @click="openRadioEdit = true">
        <a-icon name="EditOutlined" />
        设置选项
      </a-button>
    </a-form-item>
    <a-form-item label="默认值" name="defaultValue" >
      <a-select v-model:value="element.options.defaultValue" size="small" allowClear>
        <a-select-option :value="item.value" v-for="item in element.options.optionItems" :key="item.value">{{item.label}}</a-select-option>
      </a-select>
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
  <a-modal v-model:open="openRadioEdit" title="设置选项属性" @ok="radioHandle">
    <a-textarea v-model:value="radioText" :autoSize="{minRows: 8, maxRows: 8}" />
  </a-modal>
  <aceEditor :title="title" v-model:open="open" v-model:functionsCode="element.options[eventName]" />
</template>

<script setup>
import { computed, inject, reactive, ref } from 'vue'
import aceEditor from '@/components/ace-editor/ace-editor.vue';

const WidgetData = inject('$WidgetData')
const element = reactive(WidgetData.find(WidgetData.selectKey))
let eventName = ref('')
const open = ref(false)
const openRadioEdit = ref(false)
const eventNameList = ['onChange', 'onInput', 'onFocus', 'onBlur']

const openEditor = (name) => {
  eventName.value = name 
  open.value = true
}

const title = computed(() => {
  return element.key + '.' + eventName.value
})

const radioText = ref('')
element.options.optionItems.forEach(item => {
  radioText.value += item.value + ',' + item.label + '\n'
})
const radioHandle = () => {
  let text = radioText.value
  let res = []
  text.split('\n').forEach(item => {
    if (item !== '' && item.indexOf(',') > 0) {
      let arr = item.split(',')
      res.push({
        label: arr[1],
        value: arr[0]
      })
    }
  })
  element.options.optionItems = res
  openRadioEdit.value = false
}

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