const { execSync } = require('child_process');

var foo = process.env;

Object.keys(foo).forEach(function(key) {
  console.log('export ' + key + '="' + foo[key] +'"');
});

try {
    execSync('pwsh run-action.ps1', { env: foo, stdio: 'inherit' });
} catch(err) {
    console.log("error!");
    console.log(err.message);
}