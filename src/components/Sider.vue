<template>
  <a-layout-sider theme="light" v-model="collapsed" :trigger="null" collapsible>
    <div class="logo" v-show="!collapsed">兴商TS系统</div>
    <div class="logo" v-show="collapsed">TS</div>
    <a-menu mode="inline" :default-selected-keys="[routed.path]">
      <a-menu-item key="/home">
        <router-link to="/home">
          <a-icon type="home" />
          <span>home首页</span>
        </router-link>
      </a-menu-item>
      <a-menu-item key="/house">
        <router-link to="/house">
          <a-icon type="key" />
          <span>房源管理</span>
        </router-link>
      </a-menu-item>
      <a-menu-item key="/client">
        <router-link to="/client">
          <a-icon type="team" />
          <span>客源管理</span>
        </router-link>
      </a-menu-item>
    </a-menu>
  </a-layout-sider>
</template>

<script>
export default {};
</script>

<style>
</style>