import { Router } from 'express';
import {
  getDocentes,
  postDocente,
  updateDocente,
  deleteDocente
} from '../controller/docente.controller.js';

import { validarDocente } from '../middleware/validarDocente.js';

const router = Router();

router.get('/', (req, res) => {
  res.json({
    message: '📚 API de Docentes disponible',
    endpoints: {
      listar: 'GET /docentes/mostrar-Todos',
      agregar: 'POST /docentes/agregar',
      actualizar: 'PUT /docentes/actualizar/:id',
      eliminar: 'DELETE /docentes/eliminar/:id'
    },
    instrucciones: 'Usa los endpoints anteriores para gestionar los docentes. Asegúrate de enviar los datos en formato JSON.'
  });
});

router.get('/mostrar-Todos', getDocentes);
router.post('/agregar', validarDocente, postDocente);
router.put('/actualizar/:id', validarDocente, updateDocente);
router.delete('/eliminar/:id', deleteDocente);

export default router;