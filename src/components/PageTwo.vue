<template>
<div>
  <p>page2 works!</p>
  <div id="sheetContainer"></div>
</div>
</template>

<script>
import loader from '@ibsheet/loader'
import { SheetSampleData } from '../shared/ibsheet-data'

let SHEET_ID = ''

export default {
  mounted() {
    const { data, options } = SheetSampleData[1]
    loader.createSheet({
      el: 'sheetContainer',
      options,
      data
    }).then((sheet) => {
      SHEET_ID = sheet.id
    });
  },
  beforeDestroy() {
    loader.removeSheet(SHEET_ID)
  }
}
</script>