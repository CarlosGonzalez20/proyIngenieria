import db from '../config-db/gestion-horarios.js';

export const postAsignacion = (req, res) => {
    const { id_docente, id_aula, id_curso, id_horario } = req.body;

    if (!id_docente || !id_aula || !id_curso || !id_horario) {
        return res.status(400).json({ error: 'Todos los campos son obligatorios.' });
    }

    // Insertar asignación
    db.query(
        'INSERT INTO asignacion (id_docente, id_aula, id_curso, id_horario) VALUES (?, ?, ?, ?)',
        [id_docente, id_aula, id_curso, id_horario],
        (err, result) => {
            if (err) {
                if (err.code === 'ER_DUP_ENTRY') {
                    return res.status(400).json({ error: 'Conflicto: docente o aula ya asignado en ese horario.' });
                }
                return res.status(500).json({ error: err.message });
            }

            res.status(201).json({ message: 'Asignación realizada correctamente.', result });
        }
    );

    
};

// ver horarios por curso
export const getHorarioPorCurso = (req, res) => {
    const { id } = req.params;

    db.query(
        `SELECT c.nombre AS curso, h.dia, h.hora_inicio, h.hora_fin, a.tipo AS aula, d.nombre AS docente
         FROM asignacion asig
         JOIN curso c ON asig.id_curso = c.id_curso
         JOIN horario h ON asig.id_horario = h.id_horario
         JOIN aula a ON asig.id_aula = a.id_aula
         JOIN docente d ON asig.id_docente = d.id_docente
         WHERE c.id_curso = ?`,
        [id],
        (err, results) => {
            if (err) return res.status(500).json({ error: err.message });
            if (results.length === 0) return res.status(404).json({ error: 'No se encontró horario para este curso.' });
            res.json(results[0]); // o results si quieres múltiples asignaciones
        }
    );
};
