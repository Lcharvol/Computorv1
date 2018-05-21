import {
    equals,
} from 'ramda';
import { printPolynomialDegree, printReducedEquation } from '../print/solution';
import print from '../print';
import { maxDegreeExit } from '../exit';
import {
    solverZeroDegree,
    solveFirstDegree,
    solveSecondDegree,
} from './degrees';

const solve = dataStruct => {
    const { polynomialDegree } = dataStruct;
    printReducedEquation(dataStruct);
    if(equals(polynomialDegree, 0)) {
        solverZeroDegree(dataStruct);
    } else if (equals(polynomialDegree, 1)) {
        solveFirstDegree(dataStruct);
    } else if (equals(polynomialDegree, 2)) {
        solveSecondDegree(dataStruct);
    } else {
        printPolynomialDegree(polynomialDegree);
        maxDegreeExit();
    }
};

export default solve;