import db from '../config-db/gestion-horarios.js';

// Obtener todos los horarios
export const getHorario = (req, res) => {
    db.query('SELECT * FROM horario', (err, results) => {
        if (err) return res.status(500).json({ error: err.message });
        if (results.length === 0) return res.status(404).json({ error: 'No se encontraron horarios' });
        res.json(results);
    });
};

// Agregar un nuevo horario
export const postHorario = (req, res) => {
    const { dia, hora_inicio, hora_fin } = req.body;
    db.query(
        'INSERT INTO horario (dia, hora_inicio, hora_fin) VALUES (?, ?, ?)',
        [dia, hora_inicio, hora_fin],
        (err, results) => {
            if (err) return res.status(500).json({ error: err.message });
            res.json(results);
        }
    );
};

// Actualizar un horario existente por ID
export const updateHorario = (req, res) => {
    const { id } = req.params;
    const { dia, hora_inicio, hora_fin } = req.body;
    db.query(
        'UPDATE horario SET dia = ?, hora_inicio = ?, hora_fin = ? WHERE id_horario = ?',
        [dia, hora_inicio, hora_fin, id],
        (err, results) => {
            if (err) return res.status(500).json({ error: err.message });
            res.json({ message: 'Horario actualizado correctamente', results });
        }
    );
};

// Eliminar un horario por ID
export const deleteHorario = (req, res) => {
    const { id } = req.params;
    db.query(
        'DELETE FROM horario WHERE id_horario = ?',
        [id],
        (err, results) => {
            if (err) return res.status(500).json({ error: err.message });
            res.json({ message: 'Horario eliminado correctamente', results });
        }
    );
};