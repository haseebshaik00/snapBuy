import express from 'express';
import path from 'path';
import { fileURLToPath } from 'url';
import { json, urlencoded, static as serveStatic } from 'express';
import router from './routes/index.js';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const PORT = 4444;
const app = express();

app.set('view engine', 'hbs');
app.set('views', path.join(__dirname, 'public', 'views'));

app.use(json());
app.use(urlencoded({ extended: true }));
app.use("/xyz", serveStatic(path.join(__dirname, 'public')));
app.use('/api', router);

app.listen(PORT, () => console.log(`Server started on http://localhost:${PORT}`));