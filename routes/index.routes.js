import { Router } from 'express';
import docenteRoutes from './docente.routes.js';
import cursoRoutes from './curso.routes.js';
import aulaRoutes from './aula.routes.js';
import horariosRoutes from './horario.routes.js';

const router = Router();

// Aquí irían las rutas base
router.use('/docentes', docenteRoutes);
router.use('/cursos', cursoRoutes);
router.use('/aulas', aulaRoutes);
router.use('/horarios', horariosRoutes);

router.get('/', (req, res) => {
  res.json({
    message: 'API de Asignaciones funcionando correctamente 🚀',
    endpoints: {
      docentes: '/api-horarios/docentes',
      cursos: '/api-horarios/cursos',
      aulas: '/api-horarios/aulas',
      horarios: '/api-horarios/horarios',
    },
    instrucciones: 'Agrega cualquiera de los endpoints arriba listados en la URL actual.'
  });
});

export default router;
