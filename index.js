const express = require('express');
const _ = require('lodash');
const axios = require('axios');

// Local dependencies (will be linked via npm-link)
const mathUtils = require('math-utils-local');
const stringHelpers = require('string-helpers-local');

const app = express();
const PORT = 3000;

app.get('/', (req, res) => {
  const numbers = [1, 2, 3, 4, 5];
  const sum = mathUtils.sum(numbers);
  const avg = mathUtils.average(numbers);

  const text = "hello world";
  const capitalized = stringHelpers.capitalize(text);
  const reversed = stringHelpers.reverse(text);

  res.json({
    message: 'Main project with npm-link demo',
    openSourceDeps: {
      lodash: _.VERSION,
      express: 'running',
      axios: axios.VERSION
    },
    localDeps: {
      mathUtils: { sum, avg },
      stringHelpers: { capitalized, reversed }
    }
  });
});

app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
  console.log('Using local packages via npm-link:');
  console.log('- math-utils-local');
  console.log('- string-helpers-local');
});
