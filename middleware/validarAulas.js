export const validarAula = (req, res, next) => {
    const { capacidad, tipo } = req.body;
  
    if (!capacidad || !tipo) {
      return res.status(400).json({ error: 'Todos los campos son obligatorios.' });
    }
  
    next();
  };