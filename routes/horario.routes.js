import { Router } from 'express';
import {
  getHorario,
  postHorario,
  updateHorario,
  deleteHorario
} from '../controller/horario.controller.js';

import { validarHorario } from '../middleware/validarHorarios.js';

const router = Router();

router.get('/', (req, res) => {
  res.json({
    message: '📚 API de Horarios disponible',
    endpoints: {
      listar: 'GET /horario/mostrar-Todos',
      agregar: 'POST /horario/agregar',
      actualizar: 'PUT /horaario/actualizar/:id',
      eliminar: 'DELETE /horario/eliminar/:id'
    },
    instrucciones: 'Usa los endpoints anteriores para gestionar las aulas. Asegúrate de enviar los datos en formato JSON.'
  });
});

router.get('/mostrar-Todos', getHorario);
router.post('/agregar', validarHorario, postHorario);
router.put('/actualizar/:id', validarHorario, updateHorario);
router.delete('/eliminar/:id', deleteHorario);

export default router;