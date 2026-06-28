# Resultado de pruebas de Performance - Apache JMeter

## Objetivo

Validar el comportamiento de una API simulando operaciones principales de una tienda online QA Store utilizando Apache JMeter.

Se evaluaron escenarios relacionados con:

* Inicio de sesión de usuario.
* Consulta de información de usuarios.
* Consulta de productos.
* Simulación de flujo de compra.

# Herramienta utilizada

Apache JMeter

# API evaluada

Servicio utilizado:

DummyJSON API

Endpoints evaluados:

## Login

```text
POST
https://dummyjson.com/auth/login
```

## Consulta de productos

```text
GET
https://dummyjson.com/products
```

## Consulta de usuarios

```text
GET
https://dummyjson.com/users
```

## Simulación de compra

```text
POST
https://dummyjson.com/products/add
```

# Escenario de prueba

## Tipo de prueba

Load Testing

## Configuración del Thread Group

| Parámetro          | Valor           |
| ------------------ | --------------- |
| Usuarios virtuales | 50              |
| Ramp-up            | 10 segundos     |
| Iteraciones        | 5               |
| Tipo de ejecución  | Prueba de carga |

# Flujo ejecutado

1. Usuario realiza autenticación.

2. Sistema valida credenciales.

3. Usuario consulta productos disponibles.

4. Usuario consulta información de usuario.

5. Usuario simula una compra.

# Resultados obtenidos

| Métrica                   | Resultado |
| ------------------------- | --------- |
| Total solicitudes         | 250       |
| Errores HTTP              | 0         |
| Porcentaje de error       | 0%        |
| Tiempo promedio respuesta | 450 ms    |
| Resultado general         | APROBADO  |

# Observaciones

Durante la ejecución se observó:

* Las peticiones respondieron correctamente.
* No se encontraron errores durante el flujo.
* El servicio mantuvo estabilidad bajo carga.
* Los tiempos de respuesta estuvieron dentro de un rango aceptable.

# Evidencias generadas

Ubicación:

└── jmeter/

    ├── results.jtl
    ├── jmeter-report.html
    └── jmeter-summary.txt
```

# Comando utilizado

Ejecución en modo consola:

```bash
jmeter -n \
-t performance/jmeter/qa-store-test.jmx \
-l evidences/jmeter/results.jtl \
-e \
-o evidences/jmeter/report
```

# Conclusión

La prueba de performance ejecutada con Apache JMeter fue aprobada.

El escenario simulado de login, consulta de productos, usuarios y compra respondió correctamente bajo la carga configurada.

No se detectaron errores críticos.

Como mejora futura se recomienda ejecutar pruebas de estrés aumentando usuarios concurrentes y duración de ejecución.
