<template>
  <div id="tab-item" v-show="show">
    <slot></slot>
  </div>
</template>

<script>
export default {
  name: "TabItem",
  props: {
    label: {
      label: String,
      default: "",
    },
  },
  data() {
    return {
      show: false,
    };
  },
  created() {
    this.$parent.labels.push(this.label);
  },
};
</script>

<style>
#tab-item {
  line-height: 30px;
  margin-left: 10px;
}
</style>
