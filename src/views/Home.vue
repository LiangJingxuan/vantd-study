<template>
  <div>
    <Center>
      <p v-limit="5">1111111111111111111111111111111</p>
      <p>{{0 | fmtState}}</p>
      <p>{{1 | fmtGender}}</p>
    </Center>
  </div>
</template>

<script>
export default {
  created() {
    this.$log('1');
  },
};
</script>

<style>
</style>