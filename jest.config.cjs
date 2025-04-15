/** @type {import('ts-jest').JestConfigWithTsJest} */
module.exports = {
  preset: 'ts-jest', // Используем ts-jest для TypeScript
  testEnvironment: 'jest-environment-jsdom', // Браузерное окружение
  globals: { 'ts-jest':{ useESM: true }, 'import.meta': {} },
  extensionsToTreatAsEsm: ['.ts'], // Обрабатывать .ts как ES-модули
  setupFilesAfterEnv: ['<rootDir>/src/setupTests.ts'], // Настройка тестового окружения
  moduleNameMapper: {
    '\\.(svg|webp)$': 'jest-transform-stub', // Заглушки для бинарных файлов
    '\\.(scss|sass|css)$': 'identity-obj-proxy', // Моки для CSS
    '^app(.*)$': '<rootDir>/src/app$1',
    '^processes(.*)$': '<rootDir>/src/processes$1',
    '^pages(.*)$': '<rootDir>/src/pages$1',
    '^widgets(.*)$': '<rootDir>/src/widgets$1',
    '^features(.*)$': '<rootDir>/src/features$1',
    '^entities(.*)$': '<rootDir>/src/entities$1',
    '^shared(.*)$': '<rootDir>/src/shared$1'
  },
  transform: {
    '^.+\\.tsx?$': ['ts-jest', { useESM: true }], // Транспиляция TypeScript с поддержкой ESM
    '^.+\\.(js|jsx|mjs)$': 'babel-jest' // Транспиляция JavaScript через Babel
  },
  transformIgnorePatterns: [
    '<rootDir>/node_modules/(?!(.*\\.mjs)|rc-picker|@babel|rc-util|lodash-es)' // Исключаем модули из игнорирования
  ]
};
