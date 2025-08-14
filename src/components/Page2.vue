<script setup>
import { onMounted, onBeforeUnmount } from 'vue'
import loader from '@ibsheet/loader';
import { SheetSampleData } from '../assets/shared/ibsheet-data';

let sheetId = '';
const sheetEl = 'sheetContainer';

onMounted(() => {
  const { data, options } = SheetSampleData[1];

  loader.createSheet({
    el: sheetEl,
    options,
    data
  }).then((sheet) => {
    // 주의: 해당 구간에서 데이터 조회를 하면 안됩니다. 데이터 조회는 onRenderFirstFinish 이벤트에서 실행해야합니다.
    sheetId = sheet.id;
    console.log('created sheet', sheet.id);
  })
})

onBeforeUnmount(() => {
  loader.removeSheet(sheetId)
})
</script>

<template>
  <div>
    <p>SearchMode: 0, 기본 페이지입니다.</p>
    <div id="sheetContainer"></div>
  </div>
</template>