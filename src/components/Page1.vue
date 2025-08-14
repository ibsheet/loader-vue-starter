<script setup>
import { onMounted, onBeforeUnmount } from 'vue'
import loader from '@ibsheet/loader'
import { SheetSampleData } from '../assets/shared/ibsheet-data'

let sheetId = ''
const sheetEl = 'sheetContainer'

onMounted(() => {
  const { data, options } = SheetSampleData[0]

  loader.createSheet({
    el: sheetEl,
    options,
    data
  }).then((sheet) => {
    sheetId = sheet.id
    console.log('created sheet', sheet.id)
  })
})

onBeforeUnmount(() => {
  loader.removeSheet(sheetId)
})
</script>

<template>
  <div>
    <p>SearchMode: 2, 기본 페이지입니다.</p>
    <div id="sheetContainer"></div>
  </div>
</template>