import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);

const __dirname = path.dirname(__filename);

const mapDir = path.join(__dirname, 'map.json');
export let RSMapRaw = JSON.parse(
    fs.readFileSync(mapDir, { encoding: 'utf8', flag: 'r' }),
);
