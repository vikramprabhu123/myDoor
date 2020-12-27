<template>
  <div id="app">
    <!-- <div class="garageImgContainer">
      <img alt="Vue logo" class="garageImg" src="./assets/garagedoor-open.png">
    </div> -->
    <Login></Login>
    <DoorControl></DoorControl>
    <HelloWorld v-if="false" msg="Open"/>
  </div>
</template>

<script>
import HelloWorld from './components/HelloWorld.vue'
import Login from './components/Login.vue';
import DoorControl from "./components/DoorControl.vue";

export default {
  name: 'App',
  components: {
    HelloWorld,
    Login,
    DoorControl
  }
}
</script>

<style>
html, body {
    height:100%; /*both html and body*/
}
body {
    margin: 0; /*reset default margin*/
}
#app {
  height: 100vh;
  font-family: Lato, Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  /* background-color: #efefef; */
  /* background-color: #efefef; */
}

.garageImgContainer{
  padding: 5%;
}
.garageImg{
  height: 90%;
  width: 90%;
  /* opacity: 0.5; */
}
</style>
