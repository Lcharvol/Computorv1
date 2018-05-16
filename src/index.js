import initialDataStruct from './constants/initialDataStruct';
import parse from './parser';
import solve from './solver';
import printSolution from './print/solution';
import { getArg } from './utils';

const start = () => {
    const arg = getArg();
    console.log('arg: ', arg);
    let dataStruct = initialDataStruct;
    dataStruct = parse(dataStruct);
    dataStruct = solve(dataStruct);
    printSolution(dataStruct);
};

start();