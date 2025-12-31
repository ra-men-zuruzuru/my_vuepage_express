import express from 'express'
import apiroutes from "./routes/apiRoutes.js";

const app = express();

app.use(express.json());

// CORSヘッダー設定
app.use((req, res, next) => {
  res.header('Access-Control-Allow-Origin', 'https://myvuepage-gwzlcz0w3-igadai0226-gmailcoms-projects.vercel.app');
  res.header('Access-Control-Allow-Methods', 'GET,POST,OPTIONS');
  res.header('Access-Control-Allow-Headers', 'Content-Type, Authorization');
  next();
});

app.use('/api', apiroutes);

app.get('/', (_req, res) => {
  res.send("getです");
});

export default app;
