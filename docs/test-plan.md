# Test Plan - QA Store


## Objetivo

Este documento define el plan de pruebas y los criterios mínimos de calidad necesarios para aprobar cambios dentro del proyecto QA Store.

Los Quality Gates permiten validar que una funcionalidad cumple con los estándares de calidad antes de integrarse a la rama principal main.


# Alcance de pruebas

Las validaciones incluyen:

- Pruebas automatizadas UI con Playwright.
- Pruebas API.
- Pruebas de performance.
- Validaciones de seguridad básicas.
- Revisión de evidencias generadas por CI/CD.


# Estrategia de pruebas

## Pruebas automatizadas

Las pruebas automatizadas serán ejecutadas mediante GitHub Actions en cada Pull Request.

Incluyen:

- Validación de funcionalidades críticas.
- Pruebas de login.
- Validación de navegación.
- Escenarios principales de usuario.


# Quality Gates definidos


## 1. Pruebas automatizadas

Criterio:

Todas las pruebas automatizadas deben finalizar correctamente.


Regla:

- 0 pruebas críticas fallidas.
- El pipeline debe finalizar en estado SUCCESS.


Resultado esperado:

✅ Pull Request aprobado.


---

## 2. Performance Testing

Criterio:

La aplicación debe cumplir los límites definidos de rendimiento.


Reglas:

- Porcentaje de errores menor al 1%.
- Tiempo de respuesta promedio menor a 2 segundos.
- Los thresholds definidos en K6 deben ser aprobados.


Resultado esperado:

✅ Performance aceptable.


---

## 3. Seguridad / DevSecOps

Criterio:

El repositorio no debe contener información sensible.


Validaciones:

- No deben existir contraseñas publicadas.
- No deben existir API Keys expuestas.
- No deben existir secretos dentro del código.


Resultado esperado:

✅ Código seguro para integración.


---

## 4. Evidencias y artefactos

Criterio:

Cada ejecución del pipeline debe generar evidencias.


Evidencias requeridas:

- Reportes HTML.
- Logs de ejecución.
- Capturas de pantalla cuando aplique.
- Resultados de performance.


Resultado esperado:

✅ Artefactos disponibles en GitHub Actions.


---

## 5. Pull Request

Criterio:

Todo cambio debe ingresar mediante Pull Request.


Requisitos:

- Descripción clara del cambio.
- Revisión del pipeline CI/CD.
- Quality Gates aprobados.


Resultado esperado:

✅ Merge permitido hacia main.


# Criterio final de aprobación

Un Pull Request será aprobado únicamente cuando todos los Quality Gates sean cumplidos.

Si alguna validación falla, el cambio debe corregirse antes de integrarse a la rama principal.