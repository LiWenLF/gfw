<template>
<div class="header">
  <el-menu :default-active="activeIndex"  mode="horizontal" style="float: right">
     <el-menu-item index="1" style="float: right"><el-button>中文</el-button></el-menu-item>
    <el-submenu index="2"  style="float: right">
      <template slot="title">
        <img src="https://gw.alipayobjects.com/zos/rmsportal/BiazfanxmamNRoxxVxka.png" alt="avatar" style="width:25px">
        <span>{{name}}</span>
        <i class=""></i>
      </template>
      <el-menu-item index="1-1">选项1</el-menu-item>
      <el-menu-item index="1-2">选项2</el-menu-item>
      <el-menu-item index="1-3">选项3</el-menu-item>
    </el-submenu>
    <el-menu-item index="3" style="float: right"><i class="el-icon-bell"></i></el-menu-item>
    <el-menu-item index="4" style="float: right">首页</el-menu-item>
    <el-menu-item index="5" style="float: right"><i class="el-icon-search"></i></el-menu-item>
  </el-menu>
</div>
</template>

<script>
export default {
  name: 'TheHeader',
  data () {
    return {
      name: 'admin',
      activeIndex: '3'
    }
  }
}
</script>

<style scoped lang="scss">
.header {
  height: 100%;
  width: 100%;
}
 .header .el-dropdown {
    float: right;
    margin-right: 50px;
 }
  .header .el-dropdown .el-button {
    padding: 2px 20px 2px 2px;  // 重置button的样式，去除本有的padding
    border-radius: 50px;
    color: #00B5FF;
    font-size: 14px;
  }
  .header .el-dropdown .el-button .avatar {
    width: 50px;
    height: 50px;
    margin-right: 6px;
    border-radius: 40px;
    vertical-align: middle
  }

</style>
