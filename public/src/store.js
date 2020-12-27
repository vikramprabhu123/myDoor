import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

export const store = new Vuex.Store({
	state: {
        jwttoken: null,
        isLoggedIn: false,
		doorstatus: null,
    },
    mutations: {
        setJwt(state, val){
			state.jwttoken = val;
        },
        setIsLoggedIn(state, val){
            state.isLoggedIn = val;
        },
		setDoorStatus(state, val){
			state.doorstatus = val;
		},

    }
});
