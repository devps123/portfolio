// jest.setup.js

// Suppress React warning about ReactDOMTestUtils.act
const { error } = console;
console.error = (...args) => {
  if (args[0] && args[0].includes('act')) return;
  error(...args);
};
