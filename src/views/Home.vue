<template>
  <div class="home">
    <img alt="Vue logo" src="../assets/logo.png">
    <HelloWorld msg="Welcome to Your Vue.js App"/>
    <div class="aa scrollBar">
      <div class="b"></div>
    </div>
    <a-button type="primary">Primary</a-button>
    <!-- <line-chart v-bind="config" /> -->
  </div>
</template>

<script>
// @ is an alias to /src
import HelloWorld from '@/components/HelloWorld.vue'

export default {
  name: 'Home',
  components: {
    HelloWorld
  },
  data () {
    return {
      config: {
        height: 350,
        autoFit: true,
        xField: 'year',
        yField: 'value',
        smooth: true,
        meta: {
          value: {
            max: 15
          }
        },
        data: [
          { year: '1991', value: 3 },
          { year: '1992', value: 4 },
          { year: '1993', value: 3.5 },
          { year: '1994', value: 5 },
          { year: '1995', value: 4.9 },
          { year: '1996', value: 6 },
          { year: '1997', value: 7 },
          { year: '1998', value: 9 },
          { year: '1999', value: 11 }
        ]
      }
    }
  },
  mounted () {
    console.log(this.axios.defaults)
  },
  methods: {

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
