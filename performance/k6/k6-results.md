# Resultado prueba K6


Comando ejecutado:

k6 run performance/k6/api-test.js


Configuración:

Usuarios virtuales: 10

Duración: 30 segundos


Resultado:

Checks: 100%

Errores HTTP: 0%

p95 respuesta: menor a 2000ms


Conclusión:

Prueba aprobada. La API cumple los thresholds definidos.