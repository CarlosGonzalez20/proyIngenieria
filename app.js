import express from 'express';
import cors from 'cors';
import dotenv from 'dotenv';
import routes from './routes/index.routes.js';

dotenv.config();

const app = express();
const PORT = process.env.PORT || 3000;

app.use(cors());
app.use(express.json());

// Rutas principales
app.use('/api-horarios', routes);

app.listen(PORT, () => {
  console.log(`Servidor corriendo en http://localhost:${PORT}/api-horarios/`);
});
