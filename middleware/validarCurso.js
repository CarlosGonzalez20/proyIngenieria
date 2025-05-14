export const  validadrCurso = (req, res, next) => {
    const { nombre, cant_estudiantes, carrera_nombre } = req.body;

    if (!nombre || !cant_estudiantes || !carrera_nombre) {
      return res.status(400).json({ error: 'Todos los campos son obligatorios.' });
    }

    next();
};