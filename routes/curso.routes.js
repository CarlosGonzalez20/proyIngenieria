import { Router } from 'express';

const router = Router();

// Ejemplo de ruta
router.get('/', (req, res) => {
  res.send('Listado de cursos');
});

export default router;