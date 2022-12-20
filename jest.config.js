module.exports = {
    // Use the TypeScript compiler to transpile the code before running the tests
    transform: {
      '^.+\\.tsx?$': 'ts-jest'
    },
    // Run the tests on .ts and .tsx files
    testRegex: '(/__tests__/.*|(\\.|/)(test|spec))\\.tsx?$',
    // Include the TypeScript type definitions in the test output
    globals: {
      'ts-jest': {
        tsConfig: 'tsconfig.json'
      }
    },}