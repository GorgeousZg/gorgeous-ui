<template>
  <div>
    <el-container>
      <el-header class="homeHeader">Header</el-header>
      <el-container>
        <el-aside style="background-color: #545c64;width: 208px;">
          <el-col :span="12">
            <el-menu
            background-color="#545c64"
            text-color="#fff"
            @select="menuClick">
              <el-submenu index="1">
                <template slot="title">
                  <i class="el-icon-location"></i>
                  <span>我的电脑</span>
                </template>
                <el-menu-item-group>
                  <template slot="title">分组一</template>
                  <el-menu-item index="/mydisk">树状磁盘</el-menu-item>
                  <el-menu-item index="1-2">选项2</el-menu-item>
                </el-menu-item-group>
              </el-submenu>
            </el-menu>
          </el-col>
        </el-aside>
        <el-main>
          <router-view/>
          </el-main>
      </el-container>
    </el-container>
  </div>
</template>

<script>
import { log } from 'util';
// @ is an alias to /src
export default {
  name: 'home',
  components: {
  },
  methods: {
    menuClick(index,indexPath){
      console.log(index,indexPath);
      this.$router.push(index);
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
