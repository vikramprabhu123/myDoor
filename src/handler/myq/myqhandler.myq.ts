import { InternalServerErrorException } from "@nestjs/common";
import * as config from "config";
// import * as MyQ from "myq-api";
const MyQ = require('myq-api');

const loginaccount = config.get('account');
const EMAIL = loginaccount.login;
const PASSWORD = loginaccount.password;

export class MyQHandler {

    async getStatus() {
        const account = new MyQ();

        try {
            console.log('Logging in.');
            const loginResult = await account.login(EMAIL, PASSWORD);
            console.log('Login result:');
            console.log(JSON.stringify(loginResult, null, 2));
            console.log(`Short-lived security token: '${loginResult.securityToken}'`);

            console.log(`\nGetting all devices on account`);
            const getDevicesResult = await account.getDevices();
            console.log('getDevices result:');
            console.log(JSON.stringify(getDevicesResult, null, 2));

            const { devices } = getDevicesResult;
            if (devices.length === 0) {
                throw Error('No devices found!');
            }
            console.log('Devices:');
            devices.forEach((device, index) => {
                console.log(
                    `Device ${index} - Name: '${device.name}', Serial Number: '${device.serial_number}'`
                );
            });

            const door = devices.find(
                (device) => device.state && MyQ.constants._stateAttributes.doorState in device.state
            );
            if (!door) {
                throw Error('No doors found!');
            }

            console.log(`\nGetting state of door '${door.name}'`);
            const getDoorStateResult = await account.getDoorState(door.serial_number);
            console.log('getDoorState result:');
            console.log(JSON.stringify(getDoorStateResult, null, 2));
            console.log(`State of door '${door.name}': ${getDoorStateResult.deviceState}`);
            return getDoorStateResult.deviceState;
        } catch (error) {
            console.error('Error received:');
            console.error(error);
            console.error(`Error code: ${error.code}`);
            console.error(`Error message: ${error.message}`);

            throw new InternalServerErrorException();
        }
    }

    async openDoor() {
        const account = new MyQ();

        try {
            console.log('Logging in.');
            const loginResult = await account.login(EMAIL, PASSWORD);
            console.log('Login result:');
            console.log(JSON.stringify(loginResult, null, 2));
            console.log(`Short-lived security token: '${loginResult.securityToken}'`);

            console.log(`\nGetting all devices on account`);
            const getDevicesResult = await account.getDevices();
            console.log('getDevices result:');
            console.log(JSON.stringify(getDevicesResult, null, 2));

            const { devices } = getDevicesResult;
            if (devices.length === 0) {
                throw Error('No devices found!');
            }
            console.log('Devices:');
            devices.forEach((device, index) => {
                console.log(
                    `Device ${index} - Name: '${device.name}', Serial Number: '${device.serial_number}'`
                );
            });

            const door = devices.find(
                (device) => device.state && MyQ.constants._stateAttributes.doorState in device.state
            );
            if (!door) {
                throw Error('No doors found!');
            }

            const setDoorStateResult = await account.setDoorState(
                door.serial_number,
                MyQ.actions.door.OPEN
              );
              console.log('setDoorStateResult:');
              console.log(JSON.stringify(setDoorStateResult, null, 2));

            return setDoorStateResult;
        } catch (error) {
            console.error('Error received:');
            console.error(error);
            console.error(`Error code: ${error.code}`);
            console.error(`Error message: ${error.message}`);

            throw new InternalServerErrorException();
        }
    }


}