import db from '../config-db/gestion-horarios.js';

// Obtener todas las aulas
export const getAula = (req, res) => {
    db.query('SELECT * FROM aula', (err, results) => {
        if (err) return res.status(500).json({ error: err.message });
        if (results.length === 0) return res.status(404).json({ error: 'No se encontraron aulas' });
        res.json(results);
    });
};

// Agregar una nueva aula
export const postAula = (req, res) => {
    const { capacidad, tipo } = req.body;
    db.query(
        'INSERT INTO aula (capacidad, tipo) VALUES (?, ?)',
        [capacidad, tipo],
        (err, results) => {
            if (err) return res.status(500).json({ error: err.message });
            res.json(results);
        }
    );
};

// Actualizar una aula existente
export const updateAula = (req, res) => {
    const { id } = req.params;
    const { capacidad, tipo } = req.body;
    db.query(
        'UPDATE aula SET capacidad = ?, tipo = ? WHERE id_aula = ?',
        [capacidad, tipo, id],
        (err, results) => {
            if (err) return res.status(500).json({ error: err.message });
            res.json({ message: 'Aula actualizada correctamente', results });
        }
    );
};

// Eliminar una aula
export const deleteAula = (req, res) => {
    const { id } = req.params;
    db.query(
        'DELETE FROM aula WHERE id_aula = ?',
        [id],
        (err, results) => {
            if (err) return res.status(500).json({ error: err.message });
            res.json({ message: 'Aula eliminada correctamente', results });
        }
    );
};