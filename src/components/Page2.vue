<template>
  <div>
    <p>page2 works!</p>
    <div id="sheetContainer"></div>
  </div>
</template>

<script>
import loader from '@ibsheet/loader'
import { SheetSampleData } from '../shared/ibsheet-data'

const SHEET_ID = 'sheet'

export default {
  mounted() {
    const { data, options } = SheetSampleData[1]
    loader.createSheet({
      id: SHEET_ID,
      el: 'sheetContainer',
      options,
      data
    })
  },
  beforeDestroy() {
    loader.removeSheet(SHEET_ID)
  }
}
</script>