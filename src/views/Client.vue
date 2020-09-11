<template>
  <div>
    <p>{{collapsed}}</p>
  </div>
</template>

<script>
import { mapState } from 'vuex'

export default {
  computed: {
    ...mapState(['collapsed'])
  }
}
</script>

<style>

</style>