# Configuración del MCP de GitHub

Este proyecto incluye configuración completa para usar el **Model Context Protocol (MCP) de GitHub** con Copilot.

## 📁 Archivos de Configuración

- **`.vscode/mcp.json`** - Configuración del MCP a nivel de workspace
- **`mcp.json`** - Configuración global del MCP
- **`.env.example`** - Template de variables de entorno
- **`.env`** - Variables de entorno (NO versionado en git)

## 🚀 Configuración Rápida

### 1. Generar Token de GitHub

1. Ve a [GitHub Settings > Developer settings > Personal access tokens](https://github.com/settings/tokens)
2. Click en **"Generate new token (classic)"**
3. Dale un nombre: `Playwright-MCP` o similar
4. Selecciona estos **scopes**:
   - ✅ `repo` (full control of private repositories)
   - ✅ `read:user` (Read user profile data)
   - ✅ `read:org` (Read org and team membership)
5. Click en **"Generate token"**
6. **Copia el token** (solo lo verás una vez)

### 2. Configurar el Archivo `.env`

1. Copia el archivo template:
   ```bash
   cp .env.example .env
   ```

2. Abre `.env` y pega tu token:
   ```env
   GITHUB_TOKEN=ghp_xxxxxxxxxxxxxxxxxxxxxxxxxxxxx
   ```

3. **NO commites este archivo** - está en `.gitignore`

### 3. Verificar Configuración en VS Code

1. Abre la **Command Palette** (Ctrl+Shift+P / Cmd+Shift+P)
2. Busca: **"Copilot: Show Chat Participant Settings"**
3. Verifica que `@github` esté disponible

## 💬 Usar el MCP de GitHub

En el **Chat de Copilot** (Ctrl+Alt+I):

```
@github create issue title:"Mi primer issue"
```

```
@github create branch feature/mis-tests
```

```
@github list issues
```

```
@github search code LoginPage
```

## 🔗 Comandos Disponibles

| Comando | Descripción |
|---------|------------|
| `@github create issue` | Crear un nuevo issue |
| `@github list issues` | Listar todos los issues |
| `@github create branch` | Crear una nueva rama |
| `@github list branches` | Listar ramas |
| `@github create pull request` | Crear un PR |
| `@github list pull requests` | Listar PRs abiertos |
| `@github search code` | Buscar en el código |
| `@github view commits` | Ver historial de commits |
| `@github merge pull request` | Mergear un PR |
| `@github get repository` | Información del repositorio |

## ✅ Verificar que Funciona

En el chat de Copilot, intenta:

```
@github get repository
```

Deberías ver información del repositorio. Si funciona, el MCP está correctamente configurado.

## 🐛 Solución de Problemas

### "Command not recognized" o `@github` no aparece
- ✅ Verifica que el token esté en `.env`
- ✅ Reinicia VS Code
- ✅ Asegúrate de tener GitHub Copilot instalado
- ✅ Verifica que hayas iniciado sesión en GitHub en VS Code

### El token no funciona
- ✅ Verifica que el token no haya expirado
- ✅ Comprueba que tengas los scopes correctos
- ✅ Intenta crear un nuevo token

### MCP no carga
- ✅ Abre **View > Output** y selecciona "Copilot"
- ✅ Busca mensajes de error
- ✅ Verifica la ubicación de `.env`

## 📚 Recursos

- [MCP Specification](https://modelcontextprotocol.io/)
- [GitHub MCP Documentation](https://modelcontextprotocol.io/implementations)
- [GitHub Personal Access Tokens](https://github.com/settings/tokens)
- [Copilot Extension Documentation](https://github.com/features/copilot)

---

**Una vez configurado, podrás gestionar todo tu repositorio GitHub desde el Chat de Copilot** 🎉
