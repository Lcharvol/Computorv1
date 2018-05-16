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

const printSolution = () => {
};

export default printSolution;