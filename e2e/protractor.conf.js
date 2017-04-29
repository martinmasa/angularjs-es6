
exports.config = {

  allScriptsTimeout: 5000,

  baseUrl: 'http://localhost:8080/',

  capabilities: {
    'browserName': 'chrome'
  },

  directConnect: true,

  framework: 'jasmine',

  specs: [
    '*.spec.js'
  ]
};
