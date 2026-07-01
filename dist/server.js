import { app } from './app.js';
import { env } from './config/env.js';
app.listen(env.port, () => {
    console.log(`Póika Store API running on port ${env.port}`);
});
