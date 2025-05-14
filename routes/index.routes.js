import { Router } from 'express';
import docenteRoutes from './docente.routes.js';
import cursoRoutes from './curso.routes.js';
import aulaRoutes from './aula.routes.js';
import horariosRoutes from './horario.routes.js';
import estudianteRoutes from './estudiante.routes.js';

const router = Router();

// Aquí irían las rutas base
router.use('/docentes', docenteRoutes);
router.use('/cursos', cursoRoutes);
router.use('/aulas', aulaRoutes);
router.use('/horarios', horariosRoutes);
router.use('/estudiantes', estudianteRoutes);

router.get('/', (req, res) => {
  res.json({
    message: 'API de Asignaciones funcionando correctamente 🚀',
    endpoints: {
      docentes: '/docentes',
      cursos: '/cursos',
      aulas: '/aulas',
      horarios: '/horarios',
      estudiantes: '/estudiantes'
    },
    instrucciones: 'Agrega cualquiera de los endpoints arriba listados en la URL actual.'
  });
});

export default router;
