<template>
  <div id="app">
    <div class="garageImgContainer">
      <img alt="Vue logo" class="garageImg" src="./assets/garagedoor-open.png">
    </div>
    <HelloWorld msg="Open"/>
  </div>
</template>

<script>
import HelloWorld from './components/HelloWorld.vue'

export default {
  name: 'App',
  components: {
    HelloWorld
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
