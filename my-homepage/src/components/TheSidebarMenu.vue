<template>
  <nav class="nav-sidebar">
    <el-menu
      :collapse="isCollapse"
      :default-active="$route.path"
      class="el-menu-vertical"
    >
      <router-link
        v-for="navigationItem of navigationItems"
        :to="{path: navigationItem.navUrl}"
        :key="navigationItem.index"
      >
        <el-menu-item>
          <i :class="['icon', navigationItem.icon ? navigationItem.icon : '']"/>
          <span slot="title">{{navigationItem.name}}</span>
        </el-menu-item>
      </router-link>
    </el-menu>

    <el-radio-group v-model="isCollapse">
      <el-radio-button :label="false" :body-style="{ width:'100%' }">
        <span class="el-icon-arrow-right"/>
      </el-radio-button>
      <el-radio-button :label="true">
        <span class="el-icon-arrow-left"/>
      </el-radio-button>
    </el-radio-group>
  </nav>
</template>

<script>
export default {
  data () {
    return {
      isCollapse: true,
      navigationItems: [
        { index: 0, name: '我的首页', navUrl: '/', icon: 'el-icon-user' },
        { index: 1, name: '专业技能', navUrl: '/skills', icon: 'el-icon-link' },
        { index: 2, name: '作品链接', navUrl: '/works', icon: 'el-icon-files' },
        { index: 3, name: '联系方式', navUrl: '/contact', icon: 'el-icon-message' }
      ]
    }
  }
}
</script>

<style lang="scss" scoped>
  .el-menu-vertical:not(.el-menu--collapse) {
    width: 200px;
    min-height: 400px;
  }

  .el-menu {
    border: none;
  }

  .el-menu-item {
    i {
      margin-right: 15px;
      width: 25px;
      text-align: center;
      font-size: 18px;
      vertical-align: middle;
    }
  }

  .el-radio-group {
    position: absolute;
    bottom: 0;
    width: 100%;
  }

  .nav-sidebar {
    border-right: solid 1px #e6e6e6;
    background: #fff;
    padding-top: 10px;
    position: fixed;
    top: 0;
    bottom: 0;
    left: 0;
    z-index: 999;
  }

  a {
    color: inherit;
    display: block;
    text-decoration: none;
  }
</style>

<style lang="scss">
  .el-radio-button {
    display: block;
    width: 100%;

    .el-radio-button__inner {
      display: block !important;
      width: 100% !important;
      border-radius: 0 !important;
    }
  }
</style>
