import db from '../config-db/gestion-horarios.js';
import { promisify } from 'util';

const query = promisify(db.query).bind(db);

export const validarCurso_Estudiante = async (req, res, next) => {
    const { id_curso, id_estudiante } = req.body;

    if (!id_curso || !id_estudiante) {
        return res.status(400).json({ error: 'Todos los campos son obligatorios.' });
    }

    try {
        // Verificar si existe el curso
        const curso = await query('SELECT * FROM curso WHERE id_curso = ?', [id_curso]);
        if (curso.length === 0) {
            return res.status(404).json({ error: 'Curso no encontrado' });
        }

        // Verificar si existe el estudiante
        const estudiante = await query('SELECT * FROM estudiante WHERE id_estudiante = ?', [id_estudiante]);
        if (estudiante.length === 0) {
            return res.status(404).json({ error: 'Estudiante no encontrado' });
        }

        // Verificar si ya existe la relación
        const relacion = await query('SELECT * FROM curso_estudiante WHERE id_curso = ? AND id_estudiante = ?', [id_curso, id_estudiante]);
        if (relacion.length > 0) {
            return res.status(400).json({ error: 'El estudiante ya está asignado a este curso.' });
        }

        // Si todo bien, continuar
        next();
    } catch (err) {
        return res.status(500).json({ error: err.message });
    }
};
