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
    <a-divider>标签页属性</a-divider>
    <a-form-item label="当前标签:" :labelCol="{span: 24}" :wrapperCol="{span: 24}">
      <div class="list">
        <a-radio-group v-model:value="element.options.activeKey" >
          <div class="item" v-for="(item, index) in element.children" :key="index">
            <a-radio class="title" :value="item.key">激活</a-radio>
            <div class="input">
              <span>命名：</span>
              <a-input class="inputTitle" size="small" v-model:value="item.options.title"/>
            </div>
            <a-icon class="delete" name="MinusCircleOutlined" @click="()=>remove(item.key, index)" size="20" style="color: #ff4d4f;" />
          </div>
        </a-radio-group>
      </div>
      <a-button type="primary" @click="add">增加标签</a-button>
    </a-form-item>
  </a-form>
</template>

<script setup>
import { message } from 'ant-design-vue';
import { inject, reactive } from 'vue'

const WidgetData = inject('$WidgetData')
const element = reactive(WidgetData.find(WidgetData.selectKey))

const add = () => {
  WidgetData.addChildren(1, element)
}

const remove = (key, idx) => {
  if (key != element.options.activeKey) {
    element.children.splice(idx, 1)
  } else {
    message.warning('不能删除当前选中项')
  }
}

</script>

<style lang="less" scoped>
.list{
  display: flex;
  flex-direction: column;
  align-items: center;
  flex: 1;
  flex-wrap: wrap;
  width: 100%;
  .item{
    display: flex;
    align-items: center;
    margin-bottom: 10px;
    .title{
      font-size: 13px;
      // width: 120px;
    }
    .input{
      display: flex;
      align-items: center;
      span{
        font-size: 13px;
      }
    }
    .inputTitle{
      width: 120px;
      line-height: 22px;
    }
    .delete{
      margin-left: 6px;
      cursor: pointer;
    }
  }
}
</style>