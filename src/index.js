import initialDataStruct from './constants/initialDataStruct';
import parse from './parser';
import solve from './solver';
import printSolution, { printPolynomialDegree, printReducedEquation } from './print/solution';
import { getArg } from './utils';

const start = () => {
    const arg = getArg();
    let dataStruct = initialDataStruct;
    dataStruct = parse(dataStruct, arg);
    printReducedEquation(dataStruct);
    printPolynomialDegree(dataStruct);
    dataStruct = solve(dataStruct);
    const util = require('util')
    console.log(util.inspect(dataStruct, false, null))
    printSolution(dataStruct);
};

start();