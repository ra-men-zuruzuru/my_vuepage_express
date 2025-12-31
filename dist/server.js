import * as indexMod from './index.js';
const app = indexMod.default ?? indexMod;
const port = process.env.PORT || 3000;
app.listen(Number(port), () => console.log(`Server listening on ${port}`));
//# sourceMappingURL=server.js.map