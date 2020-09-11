<template>
  <div class="about">
    <h4>自定义指令</h4>
    <p v-red>{{name}}</p>
  </div>
</template>

<script>
export default {
  data() {
    return {
      name: "simba",
    };
  },
  directives: {
    red: {
      inserted(el, data) {
        el.style.color = "red";
      },
    },
  },
};
</script>

<style lang="less" scoped>
</style>