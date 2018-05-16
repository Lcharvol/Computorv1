import initialDataStruct from './constants/initialDataStruct';
import parse from './parser';
import solve from './solver';
import printSolution from './print/solution';

const start = () => {
    let dataStruct = initialDataStruct;
    dataStruct = parse(dataStruct);
    dataStruct = solve(dataStruct);
    printSolution(dataStruct);
};

start();