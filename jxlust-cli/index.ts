import fs from 'fs';
import path from 'path';

const jsonData = fs.readFileSync(path.resolve(path.resolve(),'package.json'),'utf-8');
console.log(jsonData);