<template>
  <div class="optionSet">
    <div class="title">
      <span class="value">值</span>
      <span class="label">名称</span>
    </div>
    <div v-if="type === 'radio'">
      <a-radio-group class="list" v-model:value="value">
        <draggable 
          :list="options" 
          v-bind="{ group: 'options', ghostClass: 'move', handle: '.move-handler', pull: true, put: false, animation: 300}" 
          item-key="key"
        >
          <template #item="{ element }">
            <div>
              <a-radio class="item" :key="element.value" :value="element.value">
                <a-input class="input" v-model:value="element.value" size="small" />
                <a-input class="input" v-model:value="element.label" size="small" />
                <a-iconfont class="move-handler" type="icon-drag" size="18" />
              </a-radio>
              <a-icon class="delete" name="MinusCircleOutlined" size="18" style="color: #ff4d4f;" @click="()=>del(element.value)" />
            </div>
          </template>
        </draggable>
      </a-radio-group>
    </div>
    <div v-if="type === 'checkbox'">
      <a-checkbox-group class="list" v-model:value="value">
        <template #item="{ element }">
          <div>
            <a-checkbox class="item" :key="element.value" :value="element.value">
              <a-input class="input" v-model:value="element.value" size="small" />
              <a-input class="input" v-model:value="element.label" size="small" />
              <a-iconfont class="move-handler" type="icon-drag" size="18" />
            </a-checkbox>
            <a-icon class="delete" name="MinusCircleOutlined" size="18" style="color: #ff4d4f;" @click="()=>del(element.value)" />
          </div>
        </template>
      </a-checkbox-group>
    </div>
    <div class="btn">
      <a-space :size="2">
        <a-button type="link" @click="add">增加选项</a-button>
        <a-button type="link" @click="openEdit = true" >批量编辑</a-button>
        <a-button type="link" @click="reset" >重设选择项</a-button>
      </a-space>
    </div>
  </div>
  <a-modal v-model:open="openEdit" title="设置选项属性" @ok="radioHandle">
    <a-textarea v-model:value="radioText" :autoSize="{minRows: 8, maxRows: 8}" />
  </a-modal>
</template>

<script setup>
import { defineProps, defineModel, inject, ref } from 'vue';
import draggable from "vuedraggable";
const WidgetData = inject('$WidgetData')

defineProps({
  type: String, // radio、checkbox
})
const options = defineModel('options')
const value = defineModel('value')
const openEdit = ref(false)

// 设置批量编辑的初始值
const radioText = ref('')
options.value.forEach(item => {
  radioText.value += item.value + ',' + item.label + '\n'
})

const add = () => {
  options.value.push(WidgetData.createReactive({
    label: 'new option',
    value: options.value.length + 1,
  }))
}

const del = (val) => {
  options.value = options.value.filter(item => item.value !== val)
}

const reset = () => {
  value.value = ''
}

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
  options.value = WidgetData.createReactive(res)
  openEdit.value = false
}
</script>

<style lang="less" scoped>
.list{
  display: flex;
  flex-direction: column;
  .item{
    margin-bottom: 8px;
    .input{
      width: 85px;
      margin-left: 5px;
    }
    .move-handler{
      cursor: move;
      margin-right: 10px;
    }
  }
}
.title{
  font-size: 16px;
  .value{
    margin-left: 60px;
  }
  .label{
    margin-left: 60px;
  }
}
</style>
<style>
.optionSet .ant-btn{
  padding: 4px 5px;
  font-size: 13px;
}
</style>
