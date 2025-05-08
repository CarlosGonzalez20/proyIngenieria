import { Router } from 'express';
import db from '../config-db/gestion-horarios.js';

const router = Router();

// Obtener todos los docentes desde la base de datos
router.get('/', (req, res) => {
  db.query('SELECT * FROM docente', (err, results) => {
    if (err) return res.status(500).json({ error: err.message });
    res.json(results);
  });
});

export default router;
