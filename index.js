const { execSync } = require('child_process');

var env = process.env;

Object.keys(env).forEach(function(key) {
  console.log('export ' + key + '="' + env[key] +'"');
});

execSync('pwsh run-action.ps1', { stdio: 'inherit' });