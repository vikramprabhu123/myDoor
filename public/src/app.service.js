import axios from 'axios';

const store = require('./store').store;
// const url = 'http://192.168.1.123:3000/handler';
const url = 'http://localhost:3000';

const appService = {

    async checkhealth(){
        const response = await axios.get(url + '/health');
        console.log(response);
        return response;
    },
	async authenticate(passcode) {
        const response = await axios.post(url + '/auth/signin', {
            passcode: passcode
        });

        if(response.status == 201){
            store.commit('setJwt', response.data.accesstoken);
            store.commit('setIsLoggedIn', true);
            this.getDoorStatus();
        }else{
            store.commit('setJwt', null);
            store.commit('setIsLoggedIn', false);
        }
        return response.data;


    },
    async getDoorStatus(){
        store.commit('setDoorStatus', "INPROGRESS");

        const response = await axios.get(url + '/handler', {
            headers: {
                Authorization: 'Bearer ' + store.state.jwttoken
            }
        });

        store.commit('setDoorStatus', response.data.toUpperCase());
        return response;

    },
    async closeDoor(){
        store.commit('setDoorStatus', "INPROGRESS");

        const response = await axios.post(url + '/handler/close', {}, {
            headers: {
                Authorization: 'Bearer ' + store.state.jwttoken
            }
        });

        setTimeout(() => {
            this.getDoorStatus();
        }, 15000);

        return response.data;
    },
    async openDoor(){
        store.commit('setDoorStatus', "INPROGRESS");

        const response = await axios.post(url + '/handler/open', {}, {
            headers: {
                Authorization: 'Bearer ' + store.state.jwttoken
            }
        });

        setTimeout(() => {
            this.getDoorStatus();
        }, 15000);

        return response.data;

    }
}

export default appService;