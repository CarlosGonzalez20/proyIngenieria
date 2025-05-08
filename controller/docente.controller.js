import db from '../config-db/gestion-horarios.js';

// Obtener todos los docentes
export const getDocentes = (req, res) => {
  db.query('SELECT * FROM docente', (err, results) => {
    if (err) return res.status(500).json({ error: err.message });
    res.json(results);
  });
};

// Agregar un nuevo docente
export const postDocente = (req, res) => {
  const { nombre, email, disponibilidad } = req.body;
  db.query(
    'INSERT INTO docente (nombre, email, disponibilidad) VALUES (?, ?, ?)',
    [nombre, email, disponibilidad],
    (err, results) => {
      if (err) return res.status(500).json({ error: err.message });
      res.json(results);
    }
  );
};

// Actualizar un docente existente por ID
export const updateDocente = (req, res) => {
  const { id } = req.params;
  const { nombre, email, disponibilidad } = req.body;

  db.query(
    'UPDATE docente SET nombre = ?, email = ?, disponibilidad = ? WHERE id_docente = ?',
    [nombre, email, disponibilidad, id],
    (err, results) => {
      if (err) return res.status(500).json({ error: err.message });
      res.json({ message: 'Docente actualizado correctamente', results });
    }
  );
};

// Eliminar un docente por ID
export const deleteDocente = (req, res) => {
  const { id } = req.params;

  db.query(
    'DELETE FROM docente WHERE id_docente = ?',
    [id],
    (err, results) => {
      if (err) return res.status(500).json({ error: err.message });
      res.json({ message: 'Docente eliminado correctamente', results });
    }
  );
};