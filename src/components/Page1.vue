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
      // 주의: 해당 구간에서 데이터 조회를 하면 안됩니다. 데이터 조회는 onRenderFirstFinish 이벤트에서 실행해야합니다.
      sheetId = sheet.id;
      console.log('created sheet', sheet.id);
    });
  },
  beforeDestroy() {
    loader.removeSheet(sheetId);
  }
}
</script>