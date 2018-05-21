import initialDataStruct from './constants/initialDataStruct';
import parse from './parser';
import solve from './solver';
import { getArg } from './utils';

const start = () => {
    const arg = getArg();
    let dataStruct = initialDataStruct;
    dataStruct = parse(dataStruct, arg);
    solve(dataStruct);
};

start();