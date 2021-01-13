import { InternalServerErrorException, Logger } from "@nestjs/common";
import * as config from "config";
// import * as MyQ from "myq-api";
const MyQ = require('myq-api');

const loginaccount = config.get('account');
const EMAIL = loginaccount.login;
const PASSWORD = loginaccount.password;

export class MyQHandler {
    private logger = new Logger('MyQHandler');
    async getStatus() {
        const account = new MyQ();

        try {
            this.logger.log('getStatus');
            this.logger.log(`Log-in with a/c: ${EMAIL}`);
            const loginResult = await account.login(EMAIL, PASSWORD);
            this.logger.log(`Log-in Result: ${JSON.stringify(loginResult, null, 2)}`);
            this.logger.log(`WT Token: ${loginResult.securityToken}`);

            this.logger.log(`Getting Devices List`);
            const getDevicesResult = await account.getDevices();
            // this.logger.log(`getDevices:  ${JSON.stringify(getDevicesResult, null, 2)}`);

            const { devices } = getDevicesResult;
            if (devices.length === 0) {
                this.logger.error(`No devices found!`);
                throw Error('No devices found!');
            }
            devices.forEach((device, index) => {
                this.logger.log(
                    `Device ${index} - Name: '${device.name}', Serial Number: '${device.serial_number}'`
                );
            });

            const door = devices.find(
                (device) => device.state && MyQ.constants._stateAttributes.doorState in device.state
            );
            if (!door) {
                throw Error('No doors found!');
            }

            this.logger.log(`Getting state of door '${door.name}'`);
            const getDoorStateResult = await account.getDoorState(door.serial_number);
            this.logger.log(`State of door '${door.name}': ${getDoorStateResult.deviceState}`);
            return getDoorStateResult.deviceState;
        } catch (error) {
            this.logger.error(error);
            this.logger.error(`Error code: ${error.code}`);
            this.logger.error(`Error message: ${error.message}`);

            throw new InternalServerErrorException();
        }
    }

    async openDoor() {
        const account = new MyQ();

        try {
            this.logger.log('openDoor');
            this.logger.log(`Log-in with a/c: ${EMAIL}`);
            const loginResult = await account.login(EMAIL, PASSWORD);
            this.logger.log(`Log-in Result: ${JSON.stringify(loginResult, null, 2)}`);
            this.logger.log(`WT Token: ${loginResult.securityToken}`);

            this.logger.log(`Getting Devices List`);
            const getDevicesResult = await account.getDevices();
            // this.logger.log(`getDevices:  ${JSON.stringify(getDevicesResult, null, 2)}`);

            const { devices } = getDevicesResult;
            if (devices.length === 0) {
                throw Error('No devices found!');
            }

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
            this.logger.log(`setDoorStateResult: ${JSON.stringify(setDoorStateResult, null, 2)}`);

            return setDoorStateResult;
        } catch (error) {
            this.logger.error(error);
            this.logger.error(`Error code: ${error.code}`);
            this.logger.error(`Error message: ${error.message}`);

            throw new InternalServerErrorException();
        }
    }

    async closeDoor() {
        const account = new MyQ();

        try {
            this.logger.log('closeDoor');
            this.logger.log(`Log-in with a/c: ${EMAIL}`);
            const loginResult = await account.login(EMAIL, PASSWORD);
            this.logger.log(`Log-in Result: ${JSON.stringify(loginResult, null, 2)}`);
            this.logger.log(`WT Token: ${loginResult.securityToken}`);

            this.logger.log(`Getting Devices List`);
            const getDevicesResult = await account.getDevices();
            // this.logger.log(`getDevices:  ${JSON.stringify(getDevicesResult, null, 2)}`);

            const { devices } = getDevicesResult;
            if (devices.length === 0) {
                throw Error('No devices found!');
            }

            const door = devices.find(
                (device) => device.state && MyQ.constants._stateAttributes.doorState in device.state
            );
            if (!door) {
                throw Error('No doors found!');
            }

            const setDoorStateResult = await account.setDoorState(
                door.serial_number,
                MyQ.actions.door.CLOSE
            );
            this.logger.log(`setDoorStateResult: ${JSON.stringify(setDoorStateResult, null, 2)}`);

            return setDoorStateResult;
        } catch (error) {
            this.logger.error(error);
            this.logger.error(`Error code: ${error.code}`);
            this.logger.error(`Error message: ${error.message}`);

            throw new InternalServerErrorException();
        }
    }
}