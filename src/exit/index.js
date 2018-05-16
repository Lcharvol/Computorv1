import {
    WRONG_ARGS_NUMBER,
} from './constants';
import { FgRed } from '../constants/colors';
import print from '../print';

export const argsExit = () => {
    print(`${WRONG_ARGS_NUMBER}`, FgRed);
    process.exit();
};