import { Router } from "express";
import {
    getEstudiante,
    postEstudiante,
    updateEstudiante,
    deleteEstudiante,
} from "../controller/estudiante.controller.js";

import { validarEstudiante } from "../middleware/validarEstudiante.js";

const router = Router();

router.get("/", (req, res) => {
    res.json({
        message: "📚 API de Estudiantes disponible",
        endpoints: {
            listar: "GET /estudiantes/mostrar-Todos",
            agregar: "POST /estudiantes/agregar",
            actualizar: "PUT /estudiantes/actualizar/:id",
            eliminar: "DELETE /estudiantes/eliminar/:id",
        },
        instrucciones: "Usa los endpoints anteriores para gestionar los estudiantes. Asegúrate de enviar los datos en formato JSON.",
    });
});

router.get("/mostrar-Todos", getEstudiante);
router.post("/agregar", validarEstudiante, postEstudiante);
router.put("/actualizar/:id", validarEstudiante, updateEstudiante);
router.delete("/eliminar/:id", deleteEstudiante);

export default router;