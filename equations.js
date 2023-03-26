const equations = {
  a: {
    expression: 'ax - b1 = b2',
    questions: [
      {
        type: 'number',
        name: 'a',
        message: 'What is the value of a?',
        validate: function (value) {
          if (value < 0) {
            return 'Please enter a positive number'
          }
          return true
        },
      },
      {
        type: 'number',
        name: 'b1',
        message: 'What is the value of b1?',
        validate: function (value) {
          if (value < 0) {
            return 'Please enter a positive number'
          }
          return true
        },
      },
      {
        type: 'number',
        name: 'b2',
        message: 'What is the value of b2?',
        validate: function (value) {
          if (value < 0) {
            return 'Please enter a positive number'
          }
          return true
        },
      },
    ],
  },
  b: {
    expression: 'b1(a1x + b2) + b3 = b4 - a2x',
    questions: [
      {
        type: 'number',
        name: 'b1',
        message: 'What is the value of b1?',
        validate: function (value) {
          if (value < 0) {
            return 'Please enter a positive number'
          }
          return true
        },
      },
      {
        type: 'number',
        name: 'a1',
        message: 'What is the value of a1?',
        validate: function (value) {
          if (value < 0) {
            return 'Please enter a positive number'
          }
          return true
        },
      },
      {
        type: 'number',
        name: 'b2',
        message: 'What is the value of b2?',
        validate: function (value) {
          if (value < 0) {
            return 'Please enter a positive number'
          }
          return true
        },
      },
      {
        type: 'number',
        name: 'b3',
        message: 'What is the value of b3?',
        validate: function (value) {
          if (value < 0) {
            return 'Please enter a positive number'
          }
          return true
        },
      },
      {
        type: 'number',
        name: 'b4',
        message: 'What is the value of b4?',
        validate: function (value) {
          if (value < 0) {
            return 'Please enter a positive number'
          }
          return true
        },
      },
      {
        type: 'number',
        name: 'a2',
        message: 'What is the value of a2?',
        validate: function (value) {
          if (value < 0) {
            return 'Please enter a positive number'
          }
          return true
        },
      },
    ],
  },
}

export default equations
