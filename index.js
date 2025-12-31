import serverless from 'serverless-http';
import app from '../dist/index.js'; // dist の ESM 出力を利用
export default serverless(app);