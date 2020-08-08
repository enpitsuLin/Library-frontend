<template>
  <div>
    <div class="header-box">
      <div class="box">
        <div class="logo">LOGO</div>
        <div class="right-box">
          <div class="search-bar">搜索框</div>
          <div class="user">用户图标</div>
        </div>
      </div>
      <div class="nav">导航栏</div>
    </div>
    <div class="main">
      <div class="book-list">
        <div class="hot">热门图书</div>
        <div class="new">图书上新</div>
      </div>
    </div>
    <div class="footer">
      <div class="container">
        <div class="siteinfo"></div>
        <div class="copyright"></div>
      </div>
    </div>
  </div>
</template>

<style>
.el-header {
  background-color: #b3c0d1;
  color: #333;
  line-height: 60px;
}

.el-aside {
  color: #333;
}
</style>

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