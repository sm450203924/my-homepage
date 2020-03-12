<template>
  <div id="app">
    <the-sidebar-menu/>
    <keep-alive>
      <router-view class="main-content"/>
    </keep-alive>
  </div>
</template>

<script>
import TheSidebarMenu from '@/components/TheSidebarMenu'

export default {
  components: {
    'the-sidebar-menu': TheSidebarMenu
  }
}
</script>

<style lang="scss">
  .main-content {
    padding-left:70px !important;
  }
</style>
