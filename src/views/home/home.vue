<template>
  <div>
    <el-container>
      <el-header class="homeHeader">Header</el-header>
      <el-container>
        <el-aside style="background-color: #545c64">
          <el-col :span="12">
            <el-menu
                    router
                    default-active="2"
                    class="el-menu-vertical-demo"
                    @open="handleOpen"
                    @close="handleClose"
                    background-color="#545c64"
                    text-color="#fff"
                    active-text-color="#ffd04b">
              <el-submenu index="1">
                <template slot="title">
                  <i class="el-icon-location"></i>
                  <span>我的电脑</span>
                </template>
                <el-menu-item-group>
                  <template slot="title">分组一</template>
                  <el-menu-item index="1-1">树状磁盘</el-menu-item>
                  <el-menu-item index="1-2">选项2</el-menu-item>
                </el-menu-item-group>
              </el-submenu>
            </el-menu>
          </el-col>
        </el-aside>
        <el-main><router-view/>></el-main>
      </el-container>
    </el-container>
  </div>
</template>

<script>
// @ is an alias to /src
export default {
  name: 'home',
  components: {
  },
  methods: {
    handleOpen(key, keyPath) {
      console.log(key, keyPath);
    },
    handleClose(key, keyPath) {
      console.log(key, keyPath);
    }
  }
}
</script>
<style>
  .homeHeader{
    background-color: #eeeeee;
    height: 103px;
  }
  .el-container{
    height: 832px;
  }
  .el-aside .el-col-12{
    width: 100%;
  }
</style>
