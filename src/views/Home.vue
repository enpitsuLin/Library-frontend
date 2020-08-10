<template>
  <div class="main">
    <div class="container">
      <div class="book-list">
        <div class="hot">热门图书</div>
        <div class="new">图书上新</div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    const item = {
      date: "2016-05-02",
      name: "王小虎",
      address: "上海市普陀区金沙江路 1518 弄",
    };
    return {
      tableData: Array(20).fill(item),
    };
  },
};
</script>

<style lang="less">

</style>