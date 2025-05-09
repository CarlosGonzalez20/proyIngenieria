import { Router } from 'express';
import { validadrCurso } from '../middleware/validarCurso.js';
import { deleteCurso, getCurso, postCurso, putCurso } from '../controller/curso.controller.js';

const router = Router();

router.get('/', (req, res) => {
  res.json({
    message: 'API de Docentes disponible',
    endpoints: {
      listar: 'GET /cursos/listar/todo',
      agregar: 'POST /cursos/agregar',
      actualizar: 'PUT /cursos/actualizar/:id',
      eliminar: 'DELETE /cursos/eliminar/:id'
    },
    instrucciones: 'Usa los endpoints anteriores para gestionar los cursos. Asegúrate de enviar los datos en formato JSON.'
  });
});

router.post("/agregar", validadrCurso, postCurso);
router.get("/listar/todo", getCurso);
router.put("/actualizar/:id", validadrCurso, putCurso);
router.delete("/eliminar/:id", deleteCurso);

export default router;