<template>
  <div class="draw">
    <div class="header">
      <a-button class="btn">Layout</a-button>
      <a-button class="btn">Menu</a-button>
    </div>
    <a-form
      autocomplete="off"
    >
      <DragView :viewKey="key" :list="list" @change="onChange" ></DragView>
    </a-form>
  </div>
</template>

<script setup>
import DragView from './components/DragView.vue'
import { inject, onBeforeUnmount, ref } from "vue";

const list = ref([])
const WidgetData = inject('$WidgetData')
const key = 'Premier-Draw'

const onChange = (e) => {
  for (let key in e) {
    WidgetData.setWidgetList(key, e[key])
  }
}

onBeforeUnmount(() => {
  WidgetData.removeObserver(key) 
})
</script>

<style lang="less" scoped>
.draw{
  flex: 1;
  .header{
    height: 42px;
    border-bottom: 2px dotted #EBEEF5;
    background: #fff;
    display: flex;
    align-items: center;
    padding: 0 15px;
    .btn{
      margin: 0 5px;
    }
  }
}
.ghost {
  border: solid 1px rgb(19, 41, 239);
}
.chosenClass {
  background-color: #f1f1f1;
}
</style>
<style>
.draw .ant-form-item{
  margin-bottom: 0;
}
</style>