<template>
<el-aside>
	<div style="height: 80px; background-color:#002141 !important" >
    <a id="logo" href="/index-cn">
      <img src="https://gw.alipayobjects.com/zos/rmsportal/KDpgvguMpGfqaHPjicRK.svg" alt="logo">
      <img src="https://gw.alipayobjects.com/zos/rmsportal/tNoOLUAkyuGLXoZvaibF.svg" alt="Ant Design Pro">
    </a>
  </div>
	
  <el-menu class="el-menu-vertical-demo" :default-openeds="['1']" router default-active="/CarouselTable" @open="handleOpen" @close="handleClose"
    background-color="#001529" text-color="#fff" active-text-color="#fff; ">
    
    <el-submenu index="1">
      <template slot="title">
        <i class="el-icon-document"></i>
        <span>Desbord</span>
      </template>
      <el-menu-item-group>
        <el-menu-item index="/CarouselTable">轮播图和表格</el-menu-item>
        <el-menu-item index="/Echarts">图表(Echarts)</el-menu-item>
      </el-menu-item-group>
    </el-submenu>
    
    <el-submenu index="2" >
      <template slot="title">
        <i class="el-icon-edit-outline"></i>
        <span>表单页</span>
      </template>
      <el-menu-item-group >
        <el-menu-item index="/FormView">个人中心(表单)</el-menu-item>
      </el-menu-item-group>
    </el-submenu>
  
    <el-submenu index="3" >
      <template slot="title">
        <i class="el-icon-menu"></i>
        <span>列表页</span>
      </template>
      <el-menu-item-group >
        <el-menu-item index="/FormView">个人中心(表单)</el-menu-item>
      </el-menu-item-group>
    </el-submenu>

    <el-submenu index="3" >
      <template slot="title">
        <i class="el-icon-message"></i>
        <span>详情页</span>
      </template>
      <el-menu-item-group >
        <el-menu-item index="/FormView">个人中心(表单)</el-menu-item>
      </el-menu-item-group>
    </el-submenu>

    <el-submenu index="3" >
      <template slot="title">
        <i class="el-icon-success"></i>
        <span>结果页</span>
      </template>
      <el-menu-item-group >
        <el-menu-item index="/FormView">个人中心(表单)</el-menu-item>
      </el-menu-item-group>
    </el-submenu>

    <el-submenu index="3" >
      <template slot="title">
        <i class="el-icon-warning"></i>
        <span>异常页</span>
      </template>
      <el-menu-item-group >
        <el-menu-item index="/FormView">个人中心(表单)</el-menu-item>
      </el-menu-item-group>
    </el-submenu>
  </el-menu>
  
</el-aside>
</template>

<script>
export default {
  name: 'TheNav',
  methods: {
    handleOpen (key, keyPath) {   
    },
    handleClose (key, keyPath) {
    }
  }
}
</script>

<style scoped lang="scss">
	.el-aside {
		min-height: 100%;
		background-color: #001529; 
		overflow: hidden; 
		width:230px !important;
	}
	.el-menu {
		width: 230px;
	}
	.el-menu-item {
		width: 230px;
  }
  #logo img {
    height: 32px;
    margin-right: 16px;
    margin-left: 15px;
    border-style: none;
    padding-top: 22px;
  }
  #logo img + img {
    height: 16px;
    position: relative;  
}
</style>
