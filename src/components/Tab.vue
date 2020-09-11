<template>
  <div id="tab">
    <ul>
      <li
        v-for="(l,index) in labels"
        :key="l"
        @click="activeIndex=index"
        :class="{active: activeIndex===index}"
      >{{l}}</li>
    </ul>
    <slot></slot>
  </div>
</template>

<script>
export default {
  name: "Tab",
  data() {
    return {
      labels: [],
      activeIndex: 0,
    };
  },
  mounted() {
    this.$children[0].show = true;
  },
  watch: {
    activeIndex(index) {
      this.$children.map((v, i) => {
        v.show = index === i;
      });
    },
  },
};
</script>

<style lang="less" scoped>
#tab {
  border: 1px solid #ccc;
  border-radius: 5px;
  width: 500px;
  height: 300px;

  ul {
    display: flex;

    li {
      flex: 1;
      list-style: none;
      text-align: center;
    }

    .active {
      border-bottom: 2px solid red;
      color: red;
      padding-bottom: 10px;
    }
  }
}
</style>
