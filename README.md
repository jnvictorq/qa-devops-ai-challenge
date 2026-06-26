# QA DevOps AI Challenge

Framework profesional de automatización QA para la aplicación **QA Store**, implementado con Playwright + TypeScript y complementado con prácticas DevOps, pruebas de performance y análisis utilizando Inteligencia Artificial.

El objetivo del proyecto es construir un flujo completo de calidad que permita validar cambios antes de integrarlos a la rama principal mediante automatización, CI/CD y Quality Gates.

# Stack utilizado

## Automatización UI

* Playwright Test como framework de pruebas.
* TypeScript.
* Page Object Model (POM).
* Ejecución multi navegador:

  * Chrome
  * Firefox
  * Edge

## DevOps

* Git y GitHub.
* GitHub Actions para integración continua.
* Pull Requests y control de versiones.

## Performance Testing

* K6 para pruebas de carga sobre APIs.
* Apache JMeter para escenarios de rendimiento.

## Reportes

* Reportes HTML.
* Reportes JUnit.
* Allure Reports.
* Evidencias de ejecución.

# Estructura del proyecto

```text
qa-devops-ai-challenge/

├── tests/
│   ├── api/
│   └── ui/
│       ├── e2e/
│       │   └── login.spec.ts
│       ├── pages/
│       │   └── login-page.ts
│       └── support/
│           ├── browser-matrix.ts
│           └── test-data.ts
│
├── performance/
│   ├── k6/
│   └── jmeter/
│
├── docs/
│   ├── test-plan.md
│   ├── bug-reports.md
│   └── ai-analysis.md
│
├── evidences/
│
├── .github/
│   └── workflows/
│
├── playwright.config.ts
├── package.json
├── README.md
└── .gitignore
```

# Instalación

Requisitos:

* Node.js 22 o superior.
* npm 11 o superior.
* Navegadores instalados.

Instalar dependencias:

```bash
npm install
```

Instalar navegadores Playwright:

```bash
npx playwright install
```

# Ejecución de pruebas

Ejecutar toda la suite:

```bash
npm test
```

Ejecutar pruebas visibles:

```bash
npm run test:headed
```

Ejecutar por navegador:

```bash
npm run test:chrome

npm run test:firefox

npm run test:edge
```

Ejecutar pruebas smoke:

```bash
npm run test:smoke
```

# Reportes

Abrir reporte HTML:

```bash
npm run report
```

Abrir reporte Allure:

```bash
npm run report:allure
```

Los resultados se almacenan en:

```text
allure-results/
```

# Configuración

La URL base de pruebas se configura mediante:

```text
BASE_URL
```

Ejemplo:

```powershell
$env:BASE_URL="https://tu-url"

npm test
```

# Integración Continua

Cada Pull Request ejecutará un pipeline automático mediante GitHub Actions.

El pipeline validará:

* Instalación de dependencias.
* Ejecución de pruebas automatizadas.
* Generación de reportes.
* Publicación de evidencias.

# Quality Gates

Un cambio será aprobado cuando:

* Todas las pruebas críticas pasen.
* No existan errores bloqueantes.
* Performance cumpla los tiempos definidos.
* Existan evidencias de ejecución.
* No existan secretos expuestos.

# Migración del framework anterior

El framework anterior basado en Python fue migrado a Playwright + TypeScript.

Cambios realizados:

* Features anteriores convertidas a pruebas Playwright.
* Page Objects migrados a TypeScript.
* Matriz de navegadores reemplazada por proyectos Playwright.
* Evidencias configuradas mediante screenshots, videos y traces.

# Uso de Inteligencia Artificial

La IA será utilizada como apoyo para:

* Mejorar documentación técnica.
* Analizar resultados de pruebas.
* Resumir hallazgos QA.
* Generar mejoras del portafolio.

Todo contenido generado por IA será revisado y validado manualmente.

# Autor

Juan Victor Quispe Gutierrez
