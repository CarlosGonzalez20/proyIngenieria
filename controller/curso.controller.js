import db from '../config-db/gestion-horarios.js';

// Agregar un nuevo Curso
export const postCurso = (req, res) => {
    const {  nombre, cant_estudiante, carrera_nombre } = req.body;

    db.query(
        'INSERT INTO curso (nombre, cant_estudiantes, carrera_nombre) VALUES (?, ?, ?)',
        [nombre, cant_estudiante, carrera_nombre] ,
        (error, results) => {
            if (error) return res.status(500).json({error: error.message});
            res.json(results);
        }
    );
};

//Traer todos los Cursos
export const getCurso = (req, res) => {
    db.query(
        'SELECT * FROM curso',
        (error, results) => {
            if (error) return res.status(500).json({error: error.message});
            res.json(results)
        }
    )
};

// Actualizar curso por ID
export const putCurso = (req, res) => {
    const { id } = req.params;
    const { nombre, cant_estudiante, carrera_nombre} = req.body;

    db.query(
        'UPDATE curso SET nombre = ?, cant_estudiantes = ?, carrera_nombre = ? WHERE id_curso = ?',
        [nombre, cant_estudiante, carrera_nombre, id],
        (error, results) => {
            if (error) return res.status(500).json({error: error.message});
            res.json({message: 'Curso actualizado correctamente', results});
        }
    );
};

// Eliminar curso por ID
export const deleteCurso = (req, res) => {
    const { id } = req.params

    db.query(
        'DELETE FROM curso WHERE id_curso = ?',
        [id],
        (error, results) => {
            if (error) return res.status(500).json({error: error.message});
            res.json({message: 'Curso elimando correctamente', results});
        }
    );
};


