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
    <a-form-item label="占位内容" name="placeholder" >
      <a-input v-model:value="element.options.placeholder" size="small" />
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
    <a-form-item label="可清除" name="allowClear" >
      <a-switch v-model:checked="element.options.allowClear" />
    </a-form-item>
    <a-form-item label="范围选择" name="range" >
      <a-switch v-model:checked="element.options.range" @change="rangeChange" />
    </a-form-item>
    <a-form-item label="时间选择" name="range" >
      <a-switch v-model:checked="element.options.showtime" />
    </a-form-item>
    <a-form-item :wrapperCol="{span: 24}" :labelCol="{span: 24}" label="显示格式" name="valueFormat" >
      <a-select v-model:value="element.options.valueFormat" size="small" @change="formatChange">
        <a-select-option value="YYYY-MM-DD">YYYY-MM-DD</a-select-option>
        <a-select-option value="YYYY年MM月DD日">YYYY年MM月DD日</a-select-option>
        <a-select-option value="YYYY-MM-DD HH:mm:ss">YYYY-MM-DD HH:mm:ss</a-select-option>
        <a-select-option value="YYYY年MM月DD日 HH时mm分ss秒">YYYY年MM月DD日 HH时mm分ss秒</a-select-option>
      </a-select>
    </a-form-item>
    <a-divider>时间属性</a-divider>
    <a-form-item :wrapperCol="{span: 24}" :labelCol="{span: 24}" label="默认时间" name="range" >
      <a-date-picker v-model:value="element.options.defaultValue" allowClear :valueFormat="element.options.valueFormat" :show-time="element.options.showtime" v-if="!element.options.range" style="width: 100%;" />
      <a-range-picker v-model:value="element.options.defaultValue" allowClear :valueFormat="element.options.valueFormat" v-if="element.options.range" :show-time="element.options.showtime" @change="rangePickerChange"/>
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
const eventNameList = ['onChange']

const openEditor = (name) => {
  eventName.value = name 
  open.value = true
}

const title = computed(() => {
  return element.key + '.' + eventName.value
})

const rangeChange = (status) => {
  if (status) {
    element.options.defaultValue = WidgetData.createReactive([])
  } else {
    element.options.defaultValue = ''
  }
}

const rangePickerChange = (val) => {
  element.options.defaultValue = WidgetData.createReactive(val)
}

const formatChange = (format) => {
  element.options.defaultValue = element.options.range ? [] : ''
  if (format.indexOf('HH') >= 0) {
    element.options.showtime = true
  } else {
    element.options.showtime = false
  }
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