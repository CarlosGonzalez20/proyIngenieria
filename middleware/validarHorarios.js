export const validarHorario = (req, res, next) => {
        const { dia, hora_inicio, hora_fin } = req.body;
    
        if (!dia || !hora_inicio || !hora_fin) {
            return res.status(400).json({ error: 'Todos los campos son obligatorios.' });
        }
    
        next();
    };