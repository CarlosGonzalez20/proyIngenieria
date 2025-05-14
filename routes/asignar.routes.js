import { Router } from "express";
import {
    postAsignacion,
    getHorarioPorCurso
} from "../controller/asignar.controller.js";

import { validarAsignar } from "../middleware/validarAsignacion.js";

const router = Router();

router.get("/", (req, res) => {
    res.json({
        message: "📚 API de Asignaciones disponible",
        endpoints: {
            agregar: "POST /asignar",
            listar: "GET /horario-curso/:id"
        },
        instrucciones: "Usa los endpoints anteriores para gestionar las asignaciones. Asegúrate de enviar los datos en formato JSON."
    });
});

router.post("/asignar", validarAsignar, postAsignacion);
router.get("/horario-curso/:id", getHorarioPorCurso);

export default router;