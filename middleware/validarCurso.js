export const  validadrCurso = (req, res, next) => {
    const { nombre, cant_estudiante, carrera_nombre } = req.body;

    if (!nombre || !cant_estudiante || !carrera_nombre) {
      return res.status(400).json({ error: 'Todos los campos son obligatorios.' });
    }

    next();
};