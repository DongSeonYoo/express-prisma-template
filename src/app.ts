import { env } from './configs/env';
import app from './server';

app.listen(env.PORT, () => {
    console.log(`server running at ${env.PORT}`);
});
