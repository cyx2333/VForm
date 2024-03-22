<template>
  <div class="panel">
    <a-collapse v-model:activeKey="activeKey" expand-icon-position="end" accordion :bordered="false" ghost>
      <a-collapse-panel :header="item.header" v-for="item in list" :key="item.key">
        <draggable v-model="item.children" :sort="false">
          <template #item="{ element }">
            <widget class="draggable-item" :title="element.title" :icon="element.icon" :key="element.name"/>
          </template>
        </draggable>
      </a-collapse-panel>
    </a-collapse>
  </div>
</template>

<script setup>
import { ref } from 'vue';
import widget from './components/WidgetForPanel';
import draggable from "vuedraggable";

const activeKey = ref(1)

const list = [
  {
    key: 1, header: '容器', children: [
      { name: 'grid', title: '栅格', icon: 'TableOutlined' },
      { name: 'card', title: '卡片', icon: 'CreditCardOutlined' },
    ]
  },
]
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