<template>
  <div class="draw">
    <div class="header">
      <a-button class="btn">Layout</a-button>
      <a-button class="btn">Menu</a-button>
    </div>
    <draggable :list="list" v-bind="{ group: 'panel', ghostClass: 'ghost', handle: '.drag-handler', pull: true, put: false, animation: 300}" class="content" @change="onChange" item-key="key">
      <template #item="{ element }">
        <xcomponent :params="element" />
      </template>
    </draggable>
  </div>
</template>

<script setup>
import { ref } from "vue";
import draggable from "vuedraggable";
import xcomponent from '../xcomponents'
import { useStore } from "vuex";
import { deepCopyArray, generateId } from "@/utils/util";

const list = ref([])

const store = useStore()

const onChange = (e) => {
  for (let key in e) {
    if (key === 'added') {
      let newIndex = e[key]['newIndex']
      let _list = deepCopyArray(list.value)
      let item = _list[newIndex]
      // 只有在 added 时，才添加 key
      item.key = item.type + generateId()
      list.value = _list
      store.commit('view/change', list)  
    }
  }
}

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
  .content{
    background: #fff;
    width: calc(100% - 20px);
    min-height: calc(100% - 20px - 42px);
    margin: 10px;
  }
}
.ghost {
  border: solid 1px rgb(19, 41, 239);
}
.chosenClass {
  background-color: #f1f1f1;
}
</style>