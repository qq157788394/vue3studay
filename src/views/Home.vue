<template>
  <div class="home">
    <img alt="Vue logo" src="../assets/logo.png">
    <HelloWorld msg="Welcome to Your Vue.js App"/>
    <div class="aa scrollBar">
      <div class="b"></div>
    </div>
    <a-button type="primary">Primary</a-button>
  </div>
</template>

<script>
// @ is an alias to /src
import HelloWorld from '@/components/HelloWorld.vue'

export default {
  name: 'Home',
  components: {
    HelloWorld
  }
}
</script>

<style lang="less">
.aa {
  width: 500px;
  height: 500px;
  overflow-y: scroll;
}

.b {
  height: 1000px;
  background-color: red;
}
</style>
