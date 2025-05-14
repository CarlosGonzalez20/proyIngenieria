import db from '../config-db/gestion-horarios.js';

// Obtener todas los estudiantes
export const getEstudiante = (req, res) => {
    db.query('SELECT * FROM estudiante', (err, results) => {
        if (err) return res.status(500).json({ error: err.message });
        if (results.length === 0) return res.status(404).json({ error: 'No se encontraron estudiantes' });
        res.json(results);
    });
};

// Agregar un nuevo estudiante
export const postEstudiante = (req, res) => {
    const { nombre, email } = req.body;
    db.query(
        'INSERT INTO estudiante (nombre, email) VALUES (?, ?)',
        [nombre, email],
        (err, results) => {
            if (err) return res.status(500).json({ error: err.message });
            res.json(results);
        }
    );
};

// Actualizar un estudiante existente por ID
export const updateEstudiante = (req, res) => {
    const { id } = req.params;
    const { nombre, email } = req.body;
    db.query(
        'UPDATE estudiante SET nombre = ?, email = ? WHERE id_estudiante = ?',
        [nombre, email, id],
        (err, results) => {
            if (err) return res.status(500).json({ error: err.message });
            res.json({ message: 'Estudiante actualizado correctamente', results });
        }
    );
};

// Eliminar un estudiante por ID
export const deleteEstudiante = (req, res) => {
    const { id } = req.params;
    db.query(
        'DELETE FROM estudiante WHERE id_estudiante = ?',
        [id],
        (err, results) => {
            if (err) return res.status(500).json({ error: err.message });
            res.json({ message: 'Estudiante eliminado correctamente', results });
        }
    );
};