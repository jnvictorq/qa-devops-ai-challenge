# Bug Reports - QA Store


## Resumen

Durante la ejecución de pruebas automatizadas y validaciones QA se registraron los siguientes hallazgos.


| ID | Título | Severidad | Prioridad | Estado | Descripción | Evidencia | Recomendación |
|-|-|-|-|-|-|-|-|
| BUG-001 | Validación incorrecta de mensajes de error en login | Media | Alta | Resuelto | El mensaje mostrado al usuario no era consistente con el escenario esperado | Screenshot generado por Playwright | Estandarizar mensajes del sistema |
| BUG-002 | Tiempo de respuesta elevado en consultas de productos bajo carga | Media | Media | Analizado | Durante pruebas de performance se identificaron tiempos variables de respuesta | Reporte K6/JMeter | Optimizar consultas y revisar recursos |
| BUG-003 | Falta de información adicional en preguntas ambiguas del asistente IA | Baja | Media | Observado | El asistente requiere mayor contexto para responder correctamente | Matriz pruebas IA | Mejorar prompts y base de conocimiento |


# Hallazgos generales


## Automatización

Las pruebas automatizadas ejecutaron correctamente mediante Playwright.


## Performance

Las pruebas realizadas con K6 y JMeter no mostraron errores críticos.


## Inteligencia Artificial

Se validó comportamiento del asistente IA frente a diferentes tipos de consultas.


# Conclusión

Los hallazgos encontrados fueron documentados para mejorar la calidad del producto y mantener criterios de aceptación antes de integrar cambios a producción.