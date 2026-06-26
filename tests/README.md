# TestAutomationFramework

Framework de automatizacion UI migrado a Playwright con TypeScript.

## Stack nuevo

- Playwright Test como runner
- TypeScript con Page Objects
- Reportes HTML, JUnit y Allure
- Ejecucion multi navegador con proyectos para Chrome, Firefox y Edge, en modo headed y headless

## Estructura

```text
playwright.config.ts
tests/
  e2e/
    login.spec.ts
  pages/
    login-page.ts
  support/
    browser-matrix.ts
    test-data.ts
```

## Instalacion

Requisitos:

- Node.js 22 o superior
- npm 11 o superior
- Chrome, Firefox y Edge instalados en la maquina

Instalar dependencias:

```bash
npm install
npx playwright install
```

## Ejecucion

Ejecutar toda la suite:

```bash
npm test
```

Ejecutar en modo visible:

```bash
npm run test:headed
```

Ejecutar por navegador:

```bash
npm run test:chrome
npm run test:firefox
npm run test:edge
```

Ejecutar solo el modulo migrado:

```bash
npm run test:smoke
```

Abrir reporte HTML:

```bash
npm run report
```

Abrir Allure:

```bash
npm run report:allure
```

Los resultados de Allure se generan en:

```text
allure-results/
```

## Equivalencia con el framework anterior

- `src/features/deposit_module/*.feature` fue migrado a `tests/e2e/login.spec.ts`
- La logica de `src/main/pages/login_page.py` y `src/main/pages/home_page.py` ahora vive en `tests/pages/login-page.ts`
- La seleccion de navegador por tabla de ejemplos ahora se controla con proyectos Playwright y la matriz en `tests/support/browser-matrix.ts`
- Screenshots, video y trace quedan configurados desde `playwright.config.ts`

## Configuracion

Por defecto la suite usa:

```text
https://www.globalsqa.com/angularJs-protractor/BankingProject/#/login
```

Se puede sobreescribir con:

```powershell
$env:BASE_URL="https://tu-url"
npm test
```

## Estado del framework anterior

Los archivos Python existentes siguen en el proyecto como referencia de migracion. Si quieres una migracion total, el siguiente paso es retirar `src/features`, `src/main` y `requirements.txt` una vez que la suite Playwright sea la fuente unica.
