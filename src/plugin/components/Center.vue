<template>
  <div id="center">
    <slot></slot>
  </div>
</template>

<script>
export default {
  name: 'Center'
}
</script>

<style lang="less" scoped>
  #center{
    text-align: center;
    color: cornflowerblue;
  }
</style>