import express from 'express';
import apiroutes from "./routes/apiRoutes.js";
const app = express();
app.use(express.json());
app.use('/api', apiroutes);
app.get('/', (_req, res) => {
    res.send("getです");
});
export default app;
//# sourceMappingURL=index.js.map