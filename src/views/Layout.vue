<template>
  <a-layout id="layout">
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
    <a-layout>
      <a-layout-header style="background: #fff; padding: 0">
        <a-icon
          class="trigger"
          :type="collapsed ? 'menu-unfold' : 'menu-fold'"
          @click="() => (collapsed = !collapsed)"
        />
        <a-dropdown-button>
          梁景轩
          <a-menu slot="overlay">
            <a-menu-item key="1">
              <router-link to="/login" tag="span">
                <a-icon type="poweroff" />退出登录
              </router-link>
            </a-menu-item>
          </a-menu>
        </a-dropdown-button>
      </a-layout-header>
      <a-layout-content
        :style="{ margin: '24px 16px', padding: '24px', background: '#fff', minHeight: '280px' }"
      >
        <Breadcrumb :routed="routed" />
        <router-view />
      </a-layout-content>
    </a-layout>
  </a-layout>
</template>
<script>
import Breadcrumb from '@/components/Breadcrumb'
export default {
  components: {
    Breadcrumb
  },
  data() {
    return {
      collapsed: false,
    };
  },
  computed: {
    routed() {
      return this.$route;
    },
  },
};
</script>
<style lang="less" scoped>
#layout {
  background-color: #ffffff;
  height: 100vh;
  .trigger {
    font-size: 18px;
    line-height: 64px;
    padding: 0 24px;
    cursor: pointer;
    transition: color 0.3s;
    &:hover {
      color: #1890ff;
    }
  }
  .logo {
    text-align: center;
    line-height: 32px;
    height: 32px;
    background: #eee;
    margin: 16px;
    overflow: hidden;
  }
  .ant-layout-header {
    display: flex;
    .ant-dropdown-button {
      flex: 1;
      text-align: right;
      margin-right: 20px;
    }
  }
  .breadcrumb {
    margin-bottom: 20px;
  }
}
</style>