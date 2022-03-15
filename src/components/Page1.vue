<template>
  <div>
    <p>SearchMode: 2, 기본 페이지입니다.</p>
    <div id="sheetContainer"></div>
  </div>
</template>

<script>
import loader from '@ibsheet/loader';
import { SheetSampleData } from '../shared/ibsheet-data';

let sheetId = '';
const sheetEl = 'sheetContainer';

export default {
  mounted() {
    const { data, options } = SheetSampleData[0];

    loader.createSheet({
      el: sheetEl,
      options,
      data
    }).then((sheet) => {
      sheetId = sheet.id;
      console.log('created sheet', sheet.id);
    });
  },
  beforeDestroy() {
    loader.removeSheet(sheetId);
  }
}
</script>