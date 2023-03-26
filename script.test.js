/* 
  Write tests to check for the following scenarios:
   - Solve the equation and return a correct solution
   - Expect a NaN result if the final coefficient of x is 0
*/
import { solveEquationA, solveEquationB } from './script.js'

// unit tests
describe('solveEquationA', () => {
  test('returns the correct solution', () => {
    expect(solveEquationA(2, 4, 6)).toBe(5)
  })

  test('returns NaN if a is 0', () => {
    expect(solveEquationA(0, 4, 6)).toBe(NaN)
  })
})

describe('solveEquationB', () => {
  test('returns the correct solution', () => {
    expect(solveEquationB(2, 4, 6, 8, 10, 12)).toBe(-0.5)
  })

  test('returns NaN if the denominator is 0', () => {
    expect(solveEquationB(2, 0, 6, 8, 10, 0)).toBe(NaN)
  })
})

// integration tests
// solveEquationA integration tests
describe('solveEquationA', () => {
  it('should return the correct solution for a simple equation', () => {
    const a = 2
    const b1 = 3
    const b2 = 4
    const result = solveEquationA(a, b1, b2)
    expect(result).toEqual(3.5)
  })

  it('should return NaN if a is 0', () => {
    const a = 0
    const b1 = 3
    const b2 = 4
    const result = solveEquationA(a, b1, b2)
    expect(result).toBeNaN()
  })
})

// solveEquationB integration tests
describe('solveEquationB', () => {
  it('should return the correct solution for a simple equation', () => {
    const b1 = 2
    const a1 = 4
    const b2 = 3
    const b3 = 6
    const b4 = 24
    const a2 = 4
    const result = solveEquationB(b1, a1, b2, b3, b4, a2)
    expect(result).toEqual(1)
  })

  it('should return NaN if the denominator is 0', () => {
    const b1 = 0
    const a1 = 3
    const b2 = 4
    const b3 = 5
    const b4 = 6
    const a2 = 0
    const result = solveEquationB(b1, a1, b2, b3, b4, a2)
    expect(result).toBeNaN()
  })
})
