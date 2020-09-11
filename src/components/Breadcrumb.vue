<template>
  <a-breadcrumb class="breadcrumb" v-show="routed.path!=='/home'">
    <a-breadcrumb-item>home首页</a-breadcrumb-item>
    <a-breadcrumb-item>{{routed.meta.title}}</a-breadcrumb-item>
  </a-breadcrumb>
</template>

<script>
export default {
  props: {
    routed: {
      type: Object,
      default(){
        return {}
      }
    }
  }
};
</script>

<style>
</style>