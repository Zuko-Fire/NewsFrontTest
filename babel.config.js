import importMetaBabelPlugin from './importMetaBabelPlugin';

export const presets = [
  ['@babel/preset-env', { targets: { node: 'current' } }], // Поддержка Node.js
  '@babel/preset-react', // Поддержка React
  '@babel/preset-typescript' // Поддержка TypeScript
];
export const plugins = [
  ['@babel/plugin-transform-runtime', { regenerator: true }],
  ['@babel/plugin-syntax-dynamic-import'],
  ['@babel/plugin-proposal-class-properties', { loose: true }],
  ['@babel-plugin-transform-import-meta'],
  [importMetaBabelPlugin]
];

console.log('Babel configuration loaded');
