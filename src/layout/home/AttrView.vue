<template>
  <div class="attr">
    <setting :key="selectKey" :type="type"></setting>
  </div>
</template>

<script setup>
import setting from '@/components/setting/settingView'
import { inject, ref } from "vue";

const WidgetData = inject('$WidgetData')
const key = 'settingView'
const type = ref(WidgetData.elementType)
const selectKey = ref(WidgetData.selectKey)

WidgetData.addObserver(key, () => {
  type.value = WidgetData.elementType
  selectKey.value = WidgetData.selectKey
})

</script>

<style lang="less" scoped>
.attr{
  width: 300px;
  border-left: 2px dotted #EBEEF5;
  background: #fff;
  padding: 12px;
  overflow-y: auto;
  height: calc(100vh - 48px);
}
</style>
<style>
.attr .ant-form-item{
  margin-bottom: 6px;
}
.attr .input{
  width: 160px;
}
</style>