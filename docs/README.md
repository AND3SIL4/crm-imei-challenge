# Diseño de Solución RPA con Automation Anywhere para la Validación de IMEIs

## Análisis del Proceso

**Descripción del Proceso:**
1. Los analistas reciben un archivo CSV con datos de los equipos móviles que necesitan validar.
2. La validación se realiza en dos bases de datos:
    - BD pública de IMEI negativa: Verifica si el IMEI está reportado como robado.
    - BD ChatGPT: Obtiene información adicional sobre el IMEI.
3. Los resultados de las validaciones se agregan al archivo CSV original.
4. Los datos validados se ingresan en la aplicación SAP de la aseguradora.
5. El archivo CSV actualizado se envía por correo electrónico al dueño del proceso.
6. Se generan análisis de datos de las variables procesadas.

**Entradas del Proceso:**
- Entidad Telco
- Tipo de Identificación
- Número de Identificación
- IMEI

**Aplicaciones del Proceso:**
- BD pública de IMEI negativa: [https://www.imeicolombia.com.co](https://www.imeicolombia.com.co)
- BD ChatGPT para información adicional

**Salidas del Proceso:**
- Archivo CSV actualizado con columnas adicionales: Fecha, Respuesta de la BD Negativa, Respuesta de ChatGPT
- Resultados digitados en SAP
- Archivo enviado por correo al dueño del proceso
- Analítica de datos de los resultados procesados

## Blueprint del Proceso

0. **Total bots:**
   - Father(FileManager)
   - Child(SearchingDBIMEI)
   - Child(SearchingDBChatGPT)
   - Child(InputDatSAP)
   - Child(SendEmail)

1. **Lectura del Archivo CSV:** | Father(FileManager)
   - Leer el archivo CSV de entrada y almacenar los datos en una variable de tabla.

2. **Validación en BD Pública de IMEI Negativa:** | Child(SearchingDBIMEI)
   - Por cada IMEI en el archivo CSV, consultar la base de datos pública.
   - Capturar la respuesta (robado o no robado).

3. **Validación en BD ChatGPT:** Child(SearchingDBChatGPT)
   - Por cada IMEI en el archivo CSV, consultar la base de datos ChatGPT.
   - Capturar la información adicional proporcionada.

4. **Actualización del Archivo CSV:** Father(FileManager)
   - Agregar columnas de Fecha, Respuesta de la BD Negativa y Respuesta de ChatGPT al archivo CSV original.
   - Guardar el archivo CSV actualizado.

5. **Ingreso de Datos en SAP:** Child(InputDatSAP)
   - Por cada registro validado, ingresar los datos en SAP.

6. **Envío del Archivo por Correo:** Child(SendEmail)
   - Enviar el archivo CSV actualizado al dueño del proceso por correo electrónico.

7. **Analítica de Datos:** Father(FileManager)
   - Generar y almacenar informes de analítica de los datos procesados.

## Desarrollo de Bots

### Bot Principal (Parent Bot)

**Pasos del Bot:**
1. **Inicialización y Configuración:**
   - Establecer rutas de archivos en variables.
   - Leer archivo CSV de entrada.

2. **Sub-Bot para Validación en BD Pública:**
   - Llamar a un sub-bot que realiza la validación en la BD pública de IMEI negativa.
   - Capturar y almacenar resultados.

3. **Sub-Bot para Validación en ChatGPT:**
   - Llamar a un sub-bot que realiza la validación en BD ChatGPT.
   - Capturar y almacenar resultados.

4. **Actualización y Guardado de CSV:**
   - Actualizar archivo CSV con los resultados.
   - Guardar archivo CSV actualizado.

5. **Ingreso de Datos en SAP:**
   - Llamar a un sub-bot que realiza el ingreso de datos en SAP.

6. **Envío de Correo:**
   - Llamar a un sub-bot para enviar el archivo CSV por correo.

7. **Generación de Analítica:**
   - Llamar a un sub-bot que genera los informes de analítica.

### Sub-Bots (Child Bots)

**Sub-Bot de Validación en BD Pública:**
- Abrir navegador y navegar a la BD pública.
- Realizar consulta por cada IMEI.
- Capturar resultados y cerrar navegador.

**Sub-Bot de Validación en ChatGPT:**
- Realizar consulta a la BD ChatGPT por cada IMEI.
- Capturar resultados.

**Sub-Bot de Ingreso de Datos en SAP:**
- Abrir SAP y navegar al módulo correspondiente.
- Ingresar datos de cada registro validado.
- Cerrar SAP.

**Sub-Bot de Envío de Correo:**
- Abrir cliente de correo.
- Adjuntar archivo CSV actualizado y enviar correo al dueño del proceso.
- Cerrar cliente de correo.
