import 'zone.js/node';
import express from 'express';
import { join } from 'path';

// Import the standalone bootstrap function
import bootstrap from './src/main.server';

const app = express();
const PORT = process.env['PORT'] || 4000;
const DIST_FOLDER = join(process.cwd(), 'dist/ujwal-academy/browser');

// Serve static files
app.get('*.*', express.static(DIST_FOLDER, {
  maxAge: '1y'
}));

// All regular routes use the Universal engine
app.get('*', (req, res, next) => {
  bootstrap().then(appRef => {
    res.render('index', { req });
  }).catch(err => next(err));
});

app.listen(PORT, () => {
  console.log(`Node server listening on http://localhost:${PORT}`);
});
