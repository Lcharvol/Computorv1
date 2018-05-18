import {
    equals,
    prop,
    find,
    propEq,
} from 'ramda';
import { printPolynomialDegree, printReducedEquation } from '../print/solution';
import print from '../print';
import { FgGreen } from '../constants/colors';

const solveFirstDegree = dataStruct => {
    const { reducedEquation } = dataStruct;
    const a = prop('a', find(propEq('p', 1), reducedEquation));
    const b = prop('a', find(propEq('p', 0), reducedEquation));
    const res = -b/a;
    print('The solution is: ', FgGreen)
    print(res, FgGreen);
};

const solveSecondDegree = dataStruct => {
    const { reducedEquation, discriminant } = dataStruct;
    const res1 = 0;
    const res2 = 0;
    if(discriminant > 0) {
        print('Discriminant is strictly positive, the two solutions are:', FgGreen);
        print(res1, FgGreen);
        print(res2, FgGreen);
    } else if(discriminant === 0) {
        print('Discriminant is null, the only solution is:', FgGreen);
    } else {
        print('Discriminant is negative, their is no solution.', FgGreen);
    };
};

const solve = dataStruct => {
    const { polynomialDegree } = dataStruct;
    printReducedEquation(dataStruct);
    if (equals(polynomialDegree, 1)) {
        printPolynomialDegree(polynomialDegree);
        solveFirstDegree(dataStruct);
    } else if (equals(polynomialDegree, 2)) {
        solveSecondDegree(dataStruct);
    }
    else {
        printPolynomialDegree(polynomialDegree);
        maxDegreeExit();
    }
};

export default solve;