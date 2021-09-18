const { spawnSync } = require('child_process');

var env = process.env;

Object.keys(env).forEach(function(key) {
  console.log('export ' + key + '="' + env[key] +'"');
});

try {
    spawnSync('pwsh run-action.ps1', { env: process.env, stdio: 'inherit' });
} catch(err) {
    console.log("error!");
    console.log(err.message);
}