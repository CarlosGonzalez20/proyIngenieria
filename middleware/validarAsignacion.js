import db from '../config-db/gestion-horarios.js';
import { promisify } from 'util';

const query = promisify(db.query).bind(db);

export const validarAsignar = async (req, res, next) => {
    const { id_docente, id_aula, id_curso, id_horario } = req.body;

    if (!id_docente || !id_aula || !id_curso || !id_horario) {
        return res.status(400).json({ error: 'Todos los campos son obligatorios.' });
    }

    try{
        // Verificar si existe el docente
        const docente = await query('SELECT * FROM docente WHERE id_docente = ?', [id_docente]);
        if (docente.length === 0) {
            return res.status(404).json({ error: 'Docente no encontrado' });
        }
    
        // Verificar si existe el aula
        const aula = await query('SELECT * FROM aula WHERE id_aula = ?', [id_aula]);
        if (aula.length === 0) {
            return res.status(404).json({ error: 'Aula no encontrada' });
        }
    
        // Verificar si existe el curso
        const curso = await query('SELECT * FROM curso WHERE id_curso = ?', [id_curso]);
        if (curso.length === 0) {
            return res.status(404).json({ error: 'Curso no encontrado' });
        }
    
        // Verificar si existe el horario
        const horario = await query('SELECT * FROM horario WHERE id_horario = ?', [id_horario]);
        if (horario.length === 0) {
            return res.status(404).json({ error: 'Horario no encontrado' });
        }
    } catch (err) {
        return res.status(500).json({ error: err.message });
    }

    next();
};