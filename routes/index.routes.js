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
  res.send('API Asignaciones funcionando correctamente 🚀');
  res.send('Agregar en la barra de búsqueda para acceder a/docentes, /cursos, /aulas, /horarios');
});

export default router;
