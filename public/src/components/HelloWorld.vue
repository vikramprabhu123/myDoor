<template>
  <div class="card">
    
    <h4>Door is closed</h4>
    
  </div>
</template>

<script>
export default {
  name: 'HelloWorld',
  props: {
    msg: String
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.card{
  position: absolute;
  top: 5%;
  padding-top: 35%;
  width: 100%;
}

.action{
  width: 80%;
  min-height: 40px;
  background-color: lightgreen;
}

h4 {
  margin: 10px 0 0;
  padding-top: 70px;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}

</style>
