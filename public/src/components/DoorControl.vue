<template>
    <div v-show="isLoggedIn" >
        <div v-on:click="onDoorOpen()" v-show="doorstatus == 'CLOSED'">
            <i class="fas fa-door-closed fa-5x icon-door-closed" ></i>
            <h3>CLOSED</h3>
        </div>
        <div v-on:click="onDoorClose()" v-show="doorstatus == 'OPEN'">
            <i class="fas fa-door-open fa-5x icon-door-closed" ></i>
            <h3>OPEN</h3>
        </div>
        <div v-if="doorstatus == 'INPROGRESS'">
            <br><br>
            <i class="fas fa-sync fa-spin fa-5x icon-spin"></i>
            <h3>PROCESSING</h3>
        </div>
    </div>
</template>

<script>
import { mapState } from 'vuex'
import appService from "../app.service.js";

export default {
    data(){
        return{

        }
    },
    computed: {
        ...mapState(['isLoggedIn', 'doorstatus'])
    },
    methods: {
        onDoorOpen: function(){
            console.log("onDoorOpen");
            appService.openDoor();
        },
        onDoorClose: function(){
            console.log("onDoorOpen");
            appService.closeDoor();
        }

    }

}
</script>
<style scoped>
.icon-big {
    font-size: 350%;
    display: block;
    color: #7A421D;
    margin-bottom: 10px;
}
.icon-door-closed{
    padding-top: 30px;
    color: #7A421D;
}
.icon-spin{
    color: #7A421D;
}
</style>