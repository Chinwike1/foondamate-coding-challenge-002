import inquirer from 'inquirer'
import equations from './equations.js'

const questions = [
  {
    type: 'list',
    name: 'equationType',
    message: 'What type of equation do you want solved?',
    choices: [equations.a.expression, equations.b.expression],
  },
]

export function solveEquationA(a, b1, b2) {
  if (a === 0) {
    return NaN
  } else {
    return (b2 + b1) / a
  }
}

export function solveEquationB(b1, a1, b2, b3, b4, a2) {
  // check if final coefficient of x is 0
  if (b1 * a1 + a2 === 0) {
    return NaN
  } else {
    return (b4 - (b2 * b1 + b3)) / (b1 * a1 + a2)
  }
}

// Program intro
console.log(
  'Hello there! This is an application for solving algebraic equations.'
)

console.log(
  'Make sure to provide the \x1b[1m\x1b[36mabsolute values\x1b[0m (positive values) of the constants required in each expression.\n'
)

inquirer.prompt(questions).then((answers) => {
  // Equation A
  if (answers.equationType === equations.a.expression) {
    inquirer.prompt(equations.a.questions).then((answers) => {
      // sequence of console logs explaining the steps to solve the problem
      console.log(
        'How to solve your problem \n',
        `${answers.a}x - ${answers.b1} = ${answers.b2}`
      )
      console.log(
        `First, add ${answers.b1} to both sides\n`,
        `${answers.a}x - ${answers.b1} + ${answers.b1} = ${answers.b2} + ${answers.b1}`
      )
      console.log(
        'Simplify: add the numbers to get the resulting equation\n',
        `${answers.a}x = ${answers.b2 + answers.b1}`
      )
      console.log(
        'Divide both sides by the same factor\n',
        `${answers.a}x / ${answers.a} = ${answers.b2 + answers.b1}`,
        `/ ${answers.a}\n`,
        `x = ${answers.b2 + answers.b1} / ${answers.a}`
      )
      console.log(
        'Solution: \n',
        `x = ${solveEquationA(answers.a, answers.b1, answers.b2)}`
      )
    })
    return
  }
  // Equation B
  if (answers.equationType === equations.b.expression) {
    inquirer.prompt(equations.b.questions).then((answers) => {
      const bSumLeftSide = answers.b2 * answers.b1 + answers.b3

      // sequence of console logs explaining the steps to solve the problem
      console.log(
        'How to solve your problem \n',
        `${answers.b1}(${answers.a1}x + ${answers.b2}) + ${answers.b3} = ${answers.b4} - ${answers.a2}x`
      )
      console.log(
        `First, simplify: distribute ${answers.b1} and add up the numbers \n`,
        `${answers.b1 * answers.a1}x + ${answers.b2 * answers.b1} + ${
          answers.b3
        } = ${answers.b4} - ${answers.a2}x \n`,
        `${answers.b1 * answers.a1}x + ${bSumLeftSide} = ${answers.b4} - ${
          answers.a2
        }x`
      )
      console.log(
        `Subtract ${answers.b2 * answers.b1 + answers.b3} from both sides \n`,
        `${answers.b1 * answers.a1}x + ${bSumLeftSide} - ${bSumLeftSide} = ${
          answers.b4
        } - ${answers.a2}x - ${bSumLeftSide}`
      )
      console.log(
        'Simplify: subtract the numbers to get the resulting equation \n',
        `${answers.b1 * answers.a1}x = ${answers.b4 - bSumLeftSide} - ${
          answers.a2
        }x`
      )
      console.log(
        `Add ${answers.a2}x to both sides \n`,
        `${answers.b1 * answers.a1}x + ${answers.a2}x = ${
          answers.b4 - bSumLeftSide
        } - ${answers.a2}x + ${answers.a2}x`
      )
      console.log(
        'Simplify the expression \n',
        `${answers.b1 * answers.a1 + answers.a2}x = ${
          answers.b4 - bSumLeftSide
        }`
      )
      console.log(
        'Divide both sides by the same factor \n',
        `${answers.b1 * answers.a1 + answers.a2}x / ${
          answers.b1 * answers.a1 + answers.a2
        } = ${answers.b4 - bSumLeftSide} / ${
          answers.b1 * answers.a1 + answers.a2
        }\n`,
        `x = ${answers.b4 - bSumLeftSide} / ${
          answers.b1 * answers.a1 + answers.a2
        }`
      )
      console.log(
        'Solution:\n',
        `x = ${solveEquationB(
          answers.b1,
          answers.a1,
          answers.b2,
          answers.b3,
          answers.b4,
          answers.a2
        )}`
      )
    })
    return
  }
})
