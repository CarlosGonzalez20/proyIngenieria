import { Router } from 'express';
import {
  getAula,
  postAula,
  updateAula,
  deleteAula
} from '../controller/aula.controller.js';

import { validarAula } from '../middleware/validarAulas.js';

const router = Router();

router.get('/', (req, res) => {
  res.json({
    message: '📚 API de Aulas disponible',
    endpoints: {
      listar: 'GET /aulas/mostrar-Todos',
      agregar: 'POST /aulas/agregar',
      actualizar: 'PUT /aulas/actualizar/:id',
      eliminar: 'DELETE /aulas/eliminar/:id'
    },
    instrucciones: 'Usa los endpoints anteriores para gestionar las aulas. Asegúrate de enviar los datos en formato JSON.'
  });
});

router.get('/mostrar-Todos', getAula);
router.post('/agregar', validarAula, postAula);
router.put('/actualizar/:id', validarAula, updateAula);
router.delete('/eliminar/:id', deleteAula);

export default router;