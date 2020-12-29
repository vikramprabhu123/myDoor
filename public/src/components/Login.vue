<template>
<div v-show="!isLoggedIn" class="background-img">
        <!-- <div class="garageImgContainer">
      <img alt="Vue logo" class="garageImg" src="./../assets/garagedoor-open.png">
    </div> -->

<section class="section-locked">
    <!-- <i class="fas fa-camera fa-5x icon-locked"></i> -->
    <!-- <i class="fas fa-sign-in-alt fa-5x icon-locked"></i> -->
    <i class="fas fa-lock fa-3x icon-locked"></i>
    <form @submit.prevent="onSubmit">
        <div class="form-control">
            <!-- <label for="password">Enter your Code</label> -->
            <input type="tel" placeholder="    ENTER YOUR CODE" v-model="password"/>
        </div>
        <div>
            <button type="submit" class="submit-btn">Submit</button>
        </div>
    </form>
</section>
</div>
</template>

<script>
import { mapState } from 'vuex'
import appService from "../app.service.js";

export default {
    data(){
        return{
            password: ''
        }
    },
    computed: {
        ...mapState(['isLoggedIn'])
    },
    methods: {
        onSubmit: function(){
            console.log(this.password);
            appService.authenticate(this.password)
            .then((res) => console.log("Login: Success ", res))
            .catch((err) => {
                console.log("Login: Failed ", err);
            });

        }
    }
}
</script>
<style>
.icon-locked{
    padding-top: 10px;
    color: #7A421D;
}
.form-control{
    padding: 10px 5px;
}
input{
    height: 40px;
}
input[type=text], select {
    /* height: 40px; */
  width: 100%;
  padding: 12px 20px;
  margin: 8px 0;
  display: inline-block;
  border: 1px solid #ccc;
  border-radius: 4px;
  box-sizing: border-box;
}

input[type=submit] {
  width: 100%;
  background-color: #4CAF50;
  color: white;
  padding: 14px 20px;
  margin: 8px 0;
  border: none;
  border-radius: 4px;
  cursor: pointer;
}

input[type=submit]:hover {
  background-color: #45a049;
}
.submit-btn{
    width: 90%;
    /* height: 30px; */
    background-color: #7A421D; /* Green */
    border-radius: 200px;
    border: none;
    color: white;
    padding: 10px 32px;
    text-align: center;
    text-decoration: none;
    display: inline-block;
    font-size: 30px;
    box-shadow: 0 8px 16px 0 rgba(0,0,0,0.2), 0 6px 20px 0 rgba(0,0,0,0.19);
}
/* input{
    display: block;
} */
/* .section-locked{
    background-color: #efefef;
} */
/* body{
    background-image: url('./../assets/garagedoor-open.png');
    background-repeat: no-repeat;
      background-attachment: fixed;
  background-size: 100% 100%;
} */
/* .background-img{
    background-image: url('./../assets/garagedoor-open.png');
} */
</style>