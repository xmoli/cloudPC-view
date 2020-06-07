<template>
  <div id="app">
    <div v-if="online">
      <Sidebar active=""/>
      <Appbar/>
      <div class="content">
        <router-view/>
      </div>
    </div>
    <div v-else>
      <router-view name="Login"/>
    </div>
  </div>
</template>

<script>
import Sidebar from './components/Sidebar.vue'
import Appbar from './components/Appbar.vue'
import 'font-awesome/css/font-awesome.min.css'

export default {
  name: 'App',
  data: function(){
    return {online: true}
  },
  components: {
    Sidebar,
    Appbar
  }
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
}
body {
  margin: 0;
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
