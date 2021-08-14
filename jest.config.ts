import type { Config } from '@jest/types'


const config: Config.InitialOptions = {
  preset: 'ts-jest',
  testEnvironment: 'node',
  testRegex: '\\.(test|spec)\\.(ts|tsx)$',
  testPathIgnorePatterns: [
    '/node_modules/',
    '/coverage/',
    'fixtures',
    '/dist/',
    '/lib/',
    '/es/',
  ],
  collectCoverage: true,
  collectCoverageFrom: [
    'src/plugins/**/*.{ts,tsx}',
  ],

  globals: {
    'ts-jest': {
      isolatedModules: true,
    },
  },
}

export default config
