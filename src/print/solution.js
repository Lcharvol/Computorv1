import {
    map,
    equals,
} from 'ramda';

import { FgGreen } from '../constants/colors';
import { MAX_POLYNOMIAL_DEGREE } from '../constants/parsing';
import print from '../print';
import { getPolynomialDegree } from '../utils';
import { maxDegreeExit } from '../exit';

export const printPolynomialDegree = dataStruct => {
    const degree = getPolynomialDegree(dataStruct)
    print(`Polynomial degree: ${degree}`, FgGreen);
    if(degree > MAX_POLYNOMIAL_DEGREE) maxDegreeExit();
};

export const printReducedEquation = dataStruct => {
    const { reducedEquation } = dataStruct;
    let res = '';
    map(term => {
        let { a, p } = term;
        let op = '';
        if(equals(p, 0)) op = '';
        else if(a >=  0) op = '+';
        else {
            op = '-';
            a = a * -1;
        };
        res += `${op} ${a} * X^${p} `;
    },reducedEquation);
    print(`Reduced form:${res}`, FgGreen);
};

const printSolution = () => {
};

export default printSolution;