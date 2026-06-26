# GitHub MCP Quick Start Guide

## Cómo usar el MCP de GitHub con Copilot

### 1. En VS Code Chat (Ctrl + Alt + I o Cmd + Shift + I)

Escribe comandos usando `@github`:

#### 📝 Crear un Issue
```
@github create issue
title: "Bug: Test failing in Firefox"
body: "Tests are timing out in Firefox browser"
```

#### 🌿 Crear una rama
```
@github create branch feature/new-login-tests
```

#### 🔀 Crear un Pull Request
```
@github create pull request
title: "Add new login test cases"
head: "feature/new-login-tests"
base: "main"
```

#### 📋 Listar Issues Abiertos
```
@github list issues
```

#### 📊 Listar PRs Abiertos
```
@github list pull requests
```

#### 🔍 Buscar en el código
```
@github search code keyword:"LoginPage"
```

#### 💬 Ver commits recientes
```
@github view commits
```

#### ✅ Mergear un PR
```
@github merge pull request [número]
merge_method: "squash"
```

### 2. Ejemplos Prácticos

**Crear issue para arreglar un test fallido:**
```
@github create issue
title: "Fix: Edge browser timeout in login tests"
body: "The login test is timing out on Edge browser. Need to investigate and increase timeout or improve element waiting."
labels: ["bug", "testing"]
```

**Crear rama para nueva funcionalidad:**
```
@github create branch feature/add-deposit-module-tests
```

**Crear PR después de completar la funcionalidad:**
```
@github create pull request
title: "Feature: Add complete deposit module test suite"
head: "feature/add-deposit-module-tests"
base: "main"
body: "Added comprehensive test coverage for deposit module including:
- Valid deposit scenarios
- Invalid input handling
- Error validations"
```

### 3. Workflow Típico

1. **Crear un issue**
   ```
   @github create issue title:"Add transaction history tests"
   ```

2. **Crear rama para trabajar**
   ```
   @github create branch feature/transaction-history
   ```

3. **Hacer cambios locales** (editar código)

4. **Crear PR cuando termines**
   ```
   @github create pull request title:"Add transaction history tests" head:"feature/transaction-history" base:"main"
   ```

5. **Mergear cuando esté aprobado**
   ```
   @github merge pull request [número]
   ```

### 4. Comandos Útiles del MCP GitHub

| Comando | Descripción |
|---------|------------|
| `@github create issue` | Crear nuevo issue |
| `@github create branch` | Crear nueva rama |
| `@github create pull request` | Crear PR |
| `@github list issues` | Listar issues |
| `@github list pull requests` | Listar PRs |
| `@github list branches` | Listar ramas |
| `@github search code` | Buscar en código |
| `@github view commits` | Ver historial |
| `@github merge pull request` | Mergear PR |
| `@github get repository` | Info del repo |

### 5. Tips

✅ **Si el comando no funciona:**
- Asegúrate de estar en la carpeta del proyecto
- Haz commit de cambios locales primero
- Verifica que tengas permisos en el repositorio
- Intenta escribir el comando en el chat de Copilot nuevamente

✅ **Para mejor integración:**
- Mantén `.instructions.md` y `copilot-instructions.md` actualizados
- Los comandos se autocompletan en el chat
- El MCP necesita token de GitHub (Copilot lo maneja automáticamente)

---

**Estás listo para usar GitHub MCP con Copilot en este proyecto!** 🚀
