<template>
  <div class="panel">
    <a-collapse v-model:activeKey="activeKey" expand-icon-position="end" :bordered="false" ghost>
      <a-collapse-panel :header="item.header" v-for="item in list" :key="item.key">
        <draggable :list="item.children" :group="{name: 'panel', pull: 'clone', forceFallback: false, put: false}" :sort="false" @clone="onClone"  @change="onChange" >
          <template #item="{ element }">
            <widget class="draggable-item" :title="element.title" :icon="element.icon" :key="element.name"/>
          </template>
        </draggable>
      </a-collapse-panel>
    </a-collapse>
  </div>
</template>

<script setup>
import widget from './components/WidgetForPanel';
import draggable from "vuedraggable";
import { ref } from 'vue';
import config from '../config'

const activeKey = ref([1, 2])

const list = config

const onClone = (e) => {
  console.log('onClone', e);
}

const onChange = (e) => {
  console.log('onChange', e);
}
</script>

<style lang="less" scoped>
.panel{
  width: 260px;
  border-right: 2px dotted #EBEEF5;
  background: #fff;
  .draggable-item{
    margin: 0px 6px 6px 0;
    display: inline-block;
  }
  .draggable-item:nth-child(2n){
    margin: 0px 0px 6px 0;
  }
}
</style>