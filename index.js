const { execSync } = require('child_process');

execSync('pwsh run-action.ps1', { stdio: 'inherit' });