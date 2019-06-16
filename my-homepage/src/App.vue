<template>
  <div id="app">
    <the-sidebar-menu></the-sidebar-menu>
    <router-view class="main-content"/>
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
