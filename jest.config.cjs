/** @type {import('ts-jest').JestConfigWithTsJest} */
module.exports = {
  preset: 'ts-jest', // Use ts-jest for TypeScript support
  testEnvironment: 'jest-environment-jsdom', // Use JSDOM for browser-like environment
  extensionsToTreatAsEsm: ['.ts'], // Treat .ts files as ES modules
  setupFilesAfterEnv: ['<rootDir>/src/setupTests.ts'], // Path to your setup file
  moduleNameMapper: {
    '\\.(svg|webp)$': 'jest-transform-stub', // Stub binary assets
    '\\.(scss|sass|css)$': 'identity-obj-proxy', // Mock CSS imports
    '^app(.*)$': '<rootDir>/src/app$1',
    '^processes(.*)$': '<rootDir>/src/processes$1',
    '^pages(.*)$': '<rootDir>/src/pages$1',
    '^widgets(.*)$': '<rootDir>/src/widgets$1',
    '^features(.*)$': '<rootDir>/src/features$1',
    '^entities(.*)$': '<rootDir>/src/entities$1',
    '^shared(.*)$': '<rootDir>/src/shared$1'
  },
  transform: {
    '^.+\\.tsx?$': ['ts-jest',  { useESM: true }], // Transform TypeScript files with ES module support
    '^.+\\.(js|jsx|mjs)$': '<rootDir>/node_modules/babel-jest' // Transform JavaScript files
  },
  transformIgnorePatterns: [
    '<rootDir>/node_modules/(?!(.*\\.mjs)|rc-picker|@babel|rc-util|lodash-es)' // Ignore certain modules
  ]
};
