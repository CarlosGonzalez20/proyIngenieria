import { Router } from "express";
import {
    getEstudiantesCurso,
    postEstudianteCurso,
    deleteEstudianteCurso,
} from "../controller/curso.estudiante.controller.js";

import { validarCurso_Estudiante } from "../middleware/validarCurso-Estudiante.js";

const router = Router();

router.get("/", (req, res) => {
    res.json({
        message: "📚 API de Estudiantes disponible",
        endpoints: {
            listar: "GET /estudiantes/mostrar-Todos",
            agregar: "POST /estudiantes/agregar",
            eliminar: "DELETE /estudiantes/eliminar/:id",
        },
        instrucciones: "Usa los endpoints anteriores para gestionar los estudiantes. Asegúrate de enviar los datos en formato JSON.",
    });
});

router.get("/mostrar-Todos", getEstudiantesCurso);
router.post("/agregar", validarCurso_Estudiante, postEstudianteCurso);
router.delete("/eliminar/:id", deleteEstudianteCurso);

export default router;