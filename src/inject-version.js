const fs = require('fs');
const packageJson = require('./package.json');

const envPath = './src/environments/environment.prod.ts';
let envFile = fs.readFileSync(envPath, 'utf8');

const versionLine = `  APP_VERSION: '${packageJson.version}',`;

if (!envFile.includes('APP_VERSION')) {
  envFile = envFile.replace(
    'export const environment = {',
    `export const environment = {\n${versionLine}`
  );
  fs.writeFileSync(envPath, envFile);
} else {
  // Update existing version
  envFile = envFile.replace(/APP_VERSION:\s*['"`][^'"`]+['"`],?/, versionLine);
  fs.writeFileSync(envPath, envFile);
}
