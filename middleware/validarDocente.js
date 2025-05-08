export const validarDocente = (req, res, next) => {
    const { nombre, email, disponibilidad } = req.body;
  
    if (!nombre || !email || !disponibilidad) {
      return res.status(400).json({ error: 'Todos los campos son obligatorios.' });
    }
  
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      return res.status(400).json({ error: 'Formato de correo inválido.' });
    }
  
    next();
  };
  