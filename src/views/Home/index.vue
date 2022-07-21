<template>
  <el-container class="container">
    <el-header>
      <h2>后台管理系统</h2>
      <el-button @click="logout">退出</el-button>
    </el-header>
    <el-container>
      <el-aside :width="isCollapse ? '70px' : '200px'">
        <!-- 头部图标 -->
        <div @click="isCollapse = !isCollapse" class="headerIcon">
          <i :class="isCollapse ? 'el-icon-s-unfold' : 'el-icon-s-fold'"></i>
        </div>
        <el-menu
          background-color="#373d41"
          text-color="#fff"
          unique-opened
          :collapse="isCollapse"
          :router="true"
        >
          <el-submenu index="1">
            <template #title>
              <i class="el-icon-s-custom"></i>用户管理</template
            >
            <el-menu-item index="/home/userList">
              <i class="el-icon-menu"></i> 用户列表</el-menu-item
            >
          </el-submenu>
          <el-submenu index="2">
            <template #title>
              <i class="el-icon-s-tools"></i> 权限管理</template
            >
            <el-menu-item index="/home/roleList">
              <i class="el-icon-menu"></i> 角色列表</el-menu-item
            >
            <el-menu-item index="/home/qxList">
              <i class="el-icon-menu"></i> 权限列表</el-menu-item
            >
          </el-submenu>
          <el-submenu index="3">
            <template #title>
              <i class="el-icon-s-goods"></i> 商品管理</template
            >
            <el-menu-item index="/home/goodsList">
              <i class="el-icon-menu"></i> 商品列表</el-menu-item
            >
            <el-menu-item index="/home/classParm">
              <i class="el-icon-menu"></i> 分类参数</el-menu-item
            >
            <el-menu-item index="/home/goodsClass">
              <i class="el-icon-menu"></i> 商品分类</el-menu-item
            >
          </el-submenu>
          <el-submenu index="4">
            <template #title>
              <i class="el-icon-s-order"></i> 订单管理</template
            >
            <el-menu-item index="/home/orderList">
              <i class="el-icon-menu"></i> 订单列表</el-menu-item
            >
          </el-submenu>
          <el-submenu index="5">
            <template #title>
              <i class="el-icon-data-line"></i> 数据统计</template
            >
            <el-menu-item index="/home/dataReport">
              <i class="el-icon-menu"></i> 数据报表</el-menu-item
            >
          </el-submenu>
        </el-menu></el-aside
      >
      <el-main>
        <router-view />
      </el-main>
    </el-container>
  </el-container>
</template>

<script>
export default {
  created () { },
  data () {
    return {
      isCollapse: true
    }
  },
  methods: {
    logout () {
      this.$router.push('/login')
      this.$store.commit('myToken', '')
    }

  },
  computed: {},
  watch: {},
  filters: {},
  components: {}
}
</script>

<style scoped lang='less'>
.container {
  height: 100vh;
  .el-header {
    background-color: #1c5479;
    display: flex;
    justify-content: space-between;
    align-items: center;
    h2 {
      color: white;
      font-weight: 400;
    }
  }
  .el-aside {
    background-color: #676d71;
    .headerIcon {
      height: 50px;
      line-height: 50px;
      background-color: rgb(60, 131, 254);
      text-align: center;
      i {
        font-size: 20px;
      }
    }
  }
  .el-main {
    background-color: #eaedf1;
  }
}
.el-menu {
  border-right: none;
  .el-submenu {
    // height: 100px;
    // /deep/ i {
    //   height: 56px;
    //   line-height: 56px;
    //   padding-left: 5px;
    // }
    .el-menu-item {
      // height: 70px;
    }
  }
}
</style>
