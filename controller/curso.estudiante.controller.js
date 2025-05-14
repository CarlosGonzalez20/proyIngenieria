import db from '../config-db/gestion-horarios.js';

// Obtener todas las relaciones curso estudiante
export const getEstudiantesCurso = (req, res) => {
    db.query('SELECT * FROM curso_estudiante', (err, results) => {
        if (err) return res.status(500).json({ error: err.message });
        if (results.length === 0) return res.status(404).json({ error: 'No se encontraron asignación de estudiantes a cursos' });
        res.json(results);
    });
};

// Agregar una nueva asignación de estudiante a un curso
export const postEstudianteCurso = (req, res) => {
    const { id_curso, id_estudiante } = req.body;
    db.query(
        'INSERT INTO curso_estudiante (id_curso, id_estudiante) VALUES (?, ?)',
        [id_curso, id_estudiante],
        (err, results) => {
            if (err) return res.status(500).json({ error: err.message });
            res.json(results);
        }
    );
};

// Eliminar una asignación de estudiante a un curso
export const deleteEstudianteCurso = (req, res) => {
    const { id_curso, id_estudiante } = req.params;
    db.query(
        'DELETE FROM curso_estudiante WHERE id_curso = ? AND id_estudiante = ?',
        [id_curso, id_estudiante],
        (err, results) => {
            if (err) return res.status(500).json({ error: err.message });
            res.json({ message: 'Asignación de estudiante a curso eliminada correctamente', results });
        }
    );
};