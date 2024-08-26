import express from 'express';
import { initString } from './string.js';
import { initHashMap } from './hashMap.js';
const app = express();
const PORT = 5000;

// REDIS DATA TYPE OPERATIONS
initString();
initHashMap();

app.listen(PORT, ()=>{
    console.log(`listening on http://127.0.0.1:${PORT}`);
})