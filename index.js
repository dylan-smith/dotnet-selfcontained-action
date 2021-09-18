const { execSync } = require('child_process');

process.env['DYLAN_FOO'] = "blah";
process.env['INPUT_INPUT-C'] = "efqwfqwefqw";

var foo = process.env;

Object.keys(foo).forEach(function(key) {
  console.log('export ' + key + '="' + foo[key] +'"');
});

// foo.DYLAN_FOO = "blah";
// foo.INPUT_INPUT_C = "qwefqfqe";

try {
    execSync('pwsh run-action.ps1', { env: {...foo, DYLAN_FOO: "blah", "INPUT_INPUT-C": "qwfqwfqwfe"}, stdio: 'inherit' });
} catch(err) {
    console.log("error!");
    console.log(err.message);
}