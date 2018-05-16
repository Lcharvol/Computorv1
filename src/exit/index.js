import {
    WRONG_ARGS_NUMBER,
    MAX_DEGREE,
} from './constants';
import { FgRed } from '../constants/colors';
import print from '../print';

export const argsExit = () => {
    print(`${WRONG_ARGS_NUMBER}`, FgRed);
    process.exit();
};

export const maxDegreeExit = () => {
    print(`${MAX_DEGREE}`, FgRed);
    process.exit();
};