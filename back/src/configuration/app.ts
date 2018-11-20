import consign from 'consign';
import express from 'express';
const app = express();

consign({ cwd: 'src' })
  .include('api')
  .then('routes')
  .into(app);

export default app;
