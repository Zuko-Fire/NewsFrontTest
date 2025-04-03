/** @type {import('ts-jest').JestConfigWithTsJest} */
module.exports = {
  preset: 'ts-jest',
  testEnvironment: 'jsdom',
  setupFilesAfterEnv: ['<rootDir>/src/setupTests.ts'],
  moduleNameMapper: {
    '^.+.(svg|webp)$': 'jest-transform-stub',
    '\\.(scss|sass|css)$': 'identity-obj-proxy',
    '^app(.*)$': '<rootDir>/src/app$1',
    '^processes(.*)$': '<rootDir>/src/processes',
    '^pages(.*)$': '<rootDir>/src/pages$1',
    '^widgets(.*)$': '<rootDir>/src/widgets$1',
    '^features(.*)$': '<rootDir>/src/features$1',
    '^entities(.*)$': '<rootDir>/src/entities$1',
    '^shared(.*)$': '<rootDir>/src/shared$1',
  },
  transform: {
    '.test.[jt]sx?$': 'ts-jest',
    '^.+\\.(js|jsx|mjs)$': '<rootDir>/node_modules/babel-jest',
  },
  transformIgnorePatterns: [
    '<rootDir>/node_modules/(?!(.*\\.mjs)|rc-picker|@babel|rc-util|lodash-es)',
  ],
};
