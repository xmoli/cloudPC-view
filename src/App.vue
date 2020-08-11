<template>
  <div id="app">
      <router-view/>
  </div>
</template>

<script>
import 'font-awesome/css/font-awesome.min.css'

export default {
  name: 'App'
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin: 0;
  overflow: hidden;
}
body {
  margin: 0;
  padding: 0;
  background: rgb(228, 237, 255);
}
ul,li {
    margin:0;
    padding:0;
    list-style-type: none;
}
</style>

<style scoped>
  .content {
    position: absolute;
    top: 9vh;
    left: 12vw;
    width: 88vw;
    height: 91vh;
  }
</style>
