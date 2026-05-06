# 📚 Base de Conocimientos — Agente IA SistemaVOS
> **Versión:** 1.0 — Abril 2026  
> **Uso:** Capacitación de agentes de ventas, soporte y onboarding automático  
> **Fuente:** Código fuente verificado de `app.html`

---

## ÍNDICE

1. [Propuesta de Valor y Ventas](#1-propuesta-de-valor-y-ventas)
2. [Diccionario de Módulos](#2-diccionario-de-módulos)
3. [Guías Paso a Paso](#3-guías-paso-a-paso)
4. [Reglas de Negocio y Limitaciones](#4-reglas-de-negocio-y-limitaciones)
5. [Script de Derivación Humana](#5-script-de-derivación-humana)

---

## 1. PROPUESTA DE VALOR Y VENTAS

### ¿Qué es SistemaVOS?

SistemaVOS es un **CRM y ERP para PyMEs argentinas**, 100% en la nube, accesible desde cualquier navegador o como app instalable (PWA). Funciona como una única plataforma que centraliza clientes, ventas, stock, facturación, gastos, agenda, empleados y cobros — sin necesidad de instalar nada ni tener conocimientos técnicos.

**Slogan oficial:** *"Gestión Empresarial para VOS"*

---

### Problemas reales que resuelve

| Problema del negocio | Solución en SistemaVOS |
|---|---|
| "No sé cuánto vendí hoy ni cuánto gasté" | Dashboard con flujo de caja en tiempo real y proyección a 30 días |
| "El stock me queda en libretas o en la cabeza" | Módulo de Inventario con stock mínimo y alertas |
| "Los clientes se me pierden, no tengo seguimiento" | CRM de Clientes + Agenda de Citas |
| "No puedo cobrar con tarjeta o link de pago" | Integración con MercadoPago (link de pago y QR) |
| "Necesito facturar por AFIP pero no sé cómo" | Módulo de Facturación AFIP integrado |
| "No controlo los gastos ni sé dónde se va la plata" | Módulo de Gastos con OCR para cargar tickets de foto |
| "Tengo empleados y no llevo las nóminas" | Módulo de Empleados + generación de nóminas mensuales |
| "No puedo atender clientes por WhatsApp a tiempo" | Integración con WhatsApp Business vía Make.com |
| "Tengo sucursales y no las puedo coordinar" | Módulo de Sucursales |

---

### Rubros Soportados

SistemaVOS se adapta automáticamente al tipo de negocio seleccionado durante el registro. Cada rubro activa los módulos y terminología específicos:

| Rubro | Etiqueta de Clientes | Etiqueta de Productos |
|---|---|---|
| **General** | Cliente | Productos |
| **Indumentaria & Retail** | Cliente | Productos (con tallas y colores) |
| **Medicina & Salud** | Paciente | Insumos Médicos |
| **Odontología** | Paciente | Insumos Odontológicos |
| **Talleres & Auto** | Vehículo | Repuestos |
| **Gastronomía** | Cliente | Carta / Menú |
| **Belleza & Estética** | Cliente | Servicios |
| **Kioscos & Almacenes** | Cliente | Stock |
| **Lavaderos de Autos** | Vehículo | Servicios |
| **Inmobiliarias** | Cliente / Interesado | Propiedades |

---

### Planes y Precios

> ⚠️ Todos los planes incluyen **14 días de prueba gratis**.

| Plan | Precio | Usuarios | Características principales |
|---|---|---|---|
| **Emprendedor** | US$9.99/mes | 1 usuario | Clientes ilimitados, Facturación AFIP, Reportes básicos, Soporte email |
| **Negocio** ⭐ | US$16.99/mes | Hasta 5 usuarios | Todo Emprendedor + MercadoPago integrado, WhatsApp Business + IA, Soporte 24/7 |
| **Premium** | US$21.99/mes | Usuarios ilimitados | Todo Negocio + API para web/ecommerce, IA Avanzada + bots, Soporte 24/7 |

**El plan Negocio es el más elegido.** Incluye el balance ideal entre precio y funcionalidades para negocios en crecimiento.

**Código Promocional:** El sistema soporta códigos de descuento ingresables en el registro.

---

### Argumentos de Venta Clave

- **Sin instalación:** Funciona en cualquier navegador moderno (Chrome, Edge, Firefox, Safari).
- **Seguridad:** SSL 256-bit, PCI-DSS vía MercadoPago, sin almacenamiento de tarjetas, CSP y protección XSS activa.
- **Login con Google o Microsoft:** SSO incluido, sin necesidad de crear contraseña nueva.
- **PWA instalable:** Se puede instalar como app en celular o computadora sin ir a ninguna tienda.
- **Multi-rubro:** Un mismo sistema para clínica, comercio, gastronomía, mecánica, etc.

---

## 2. DICCIONARIO DE MÓDULOS

### 🏠 DASHBOARD

**¿Qué hace?** Pantalla principal con vista ejecutiva del negocio.

**Contenido:**
- **KPIs en tiempo real:** Ventas totales, Clientes activos, Productos en stock, Gastos del período.
- **Flujo de Caja Mensual:** Gráfico de barras día a día del mes actual (ingresos vs. egresos).
- **Distribución de Gastos:** Gráfico de dona por categoría de gasto.
- **Flujo de Caja Predictivo — 30 días:** Proyecta el balance, neto diario promedio y proyección a 30 días. Si detecta déficit, muestra una alerta en rojo.
- **Actividad Reciente:** Tabla con los últimos movimientos (tipo, descripción, fecha, monto).

---

### 👥 CLIENTES

**¿Qué hace?** Gestión completa del carnet de clientes/pacientes/vehículos según el rubro.

**Funciones:**
- Alta, edición y eliminación de clientes
- Campos estándar: nombre, teléfono, email, dirección, CUIT, notas, fecha de alta
- **Campos personalizados por rubro:** obra social y número de afiliado (medicina/odontología), talla preferida (indumentaria), tipo de piel y alergias (belleza), patente y modelo (talleres/lavaderos)
- Exportar listado completo a **CSV**
- Importar clientes desde **CSV**
- Búsqueda y filtrado en tiempo real

---

### 📦 INVENTARIO

**¿Qué hace?** Control de stock de productos, insumos, servicios o propiedades según el rubro.

**Funciones:**
- Alta, edición y eliminación de productos
- Campos: nombre, precio de venta, costo, stock actual, stock mínimo (alerta), categoría, código, descripción
- **Alertas de stock bajo:** Cuando el stock llega al mínimo configurado
- **Historial por pieza:** Registro de movimientos de cada producto
- Exportar a **CSV**
- Importar desde **CSV**
- Categorías predefinidas según rubro (ej. gastronomía: Entradas, Platos Principales, Postres, Bebidas)

---

### 🛒 VENTAS

**¿Qué hace?** Registro y seguimiento de ventas/comandas/consultas según el rubro.

**Funciones:**
- Crear nueva venta seleccionando cliente y productos del inventario
- Agregar múltiples productos por venta con cantidad
- Registro de método de pago y estado
- Historial completo de ventas
- Exportar ventas a **CSV** (incluye nombre del cliente e items)
- Filtro y búsqueda

---

### 🧾 FACTURACIÓN AFIP

**¿Qué hace?** Módulo para gestión de facturas vinculadas a AFIP.

**Funciones:**
- Generación de facturas con items detallados
- Envío de facturas por email vía webhook (Make.com)
- Historial de facturas emitidas
- Integración con datos del negocio (razón social, CUIT)

> ⚠️ **Ver limitación:** La integración AFIP requiere configuración adicional del webhook. No emite CAE automáticamente sin integración externa.

---

### 💰 ARQUEO DE CAJA

**¿Qué hace?** Registro del estado de caja diario (apertura y cierre).

**Funciones:**
- Apertura de caja con monto inicial
- Cierre con detalle de efectivo, tarjeta, transferencia y otros medios
- Historial de arqueos
- Comparación entre lo esperado y lo contado

---

### 💸 GASTOS

**¿Qué hace?** Control de egresos del negocio con categorización y OCR.

**Funciones:**
- Cargar gastos manualmente con categoría, monto, fecha y descripción
- **OCR de tickets:** Tomar foto de un ticket/recibo y el sistema extrae el monto automáticamente (tecnología Tesseract.js)
- Categorías: Servicios, Suministros, Salarios, Publicidad, Transporte, Alquiler, Mantenimiento, Otros
- **Reporte de incidente:** Exportar detalle de gastos en caso de auditoría
- Eliminar gastos con registro en auditoría

---

### 📋 PRESUPUESTOS

**¿Qué hace?** Generación y seguimiento de presupuestos formales para clientes.

**Funciones:**
- Numeración automática en formato **PRES-0001**
- Crear presupuesto con items, precios y cliente asociado
- **Enviar por email** directamente desde el sistema (vía webhook)
- Seguimiento de estado (pendiente, aprobado, rechazado)
- Eliminar presupuesto con confirmación

---

### 🚚 REMITOS

**¿Qué hace?** Emisión de remitos de entrega de mercadería.

**Funciones:**
- Numeración automática en formato **REM-0001**
- Crear remito con items y cliente destino
- Historial de remitos emitidos
- Eliminar con confirmación

---

### 👔 EMPLEADOS

**¿Qué hace?** Gestión del personal del negocio.

**Funciones:**
- Alta, edición y eliminación de empleados
- Campos: nombre, DNI, cargo, email, teléfono, salario, fecha de ingreso
- Exportar a **CSV**

---

### 📄 NÓMINAS

**¿Qué hace?** Generación de nóminas salariales mensuales.

**Funciones:**
- Generar nómina del mes automáticamente desde los empleados cargados
- Historial de nóminas generadas
- Requiere tener empleados cargados primero

---

### 📅 CITAS / AGENDA

**¿Qué hace?** Agenda de turnos y citas para clientes.

**Funciones:**
- Calendario visual con vista por día, semana y mes
- Crear cita asignando cliente, fecha, hora y servicio
- **Sincronización con Google Calendar** vía webhook de Make.com
- Eliminar citas con confirmación
- Vista de citas del día

---

### 🏢 SUCURSALES

**¿Qué hace?** Gestión de múltiples puntos de venta o locales.

**Funciones:**
- Alta y administración de sucursales
- Asignación de nombre y datos de contacto por sucursal

---

### 🤝 PROVEEDORES

**¿Qué hace?** CRM de proveedores del negocio.

**Funciones:**
- Alta, edición y eliminación de proveedores
- Campos: nombre, teléfono, email, dirección, CUIT, contacto, notas
- Exportar a **CSV**

---

### 🤖 ASISTENTE IA

**¿Qué hace?** Chat con inteligencia artificial para consultas del negocio.

**Funciones:**
- Chat interactivo con IA entrenada en el contexto del negocio
- Responde preguntas sobre módulos, datos y operaciones
- Protección XSS activa en todos los inputs del chat

---

### 💬 WHATSAPP BUSINESS

**¿Qué hace?** Integración con WhatsApp para notificaciones y comunicación con clientes.

**Funciones:**
- Configuración del webhook de Make.com para automatizaciones
- Envío de mensajes automáticos (notificaciones de citas, presupuestos, etc.)
- Campañas de mensajes masivos (vía webhook)

> ⚠️ **Requiere:** Cuenta de WhatsApp Business API + escenario configurado en Make.com.

---

### 💳 MERCADOPAGO

**¿Qué hace?** Integración de cobros online con MercadoPago.

**Funciones:**
- Conectar cuenta con **Token de acceso de MercadoPago**
- **Generar link de pago** con monto y descripción
- **Generar QR de cobro** con monto
- Seguridad PCI-DSS (no almacena datos de tarjetas)

---

### 🔐 USUARIOS

**¿Qué hace?** Control de acceso y roles de los usuarios del sistema.

**Roles disponibles:**
- **SuperAdmin:** Acceso total a todos los módulos
- **SubCuenta:** Acceso restringido a módulos seleccionados por el administrador

**Funciones:**
- Crear y editar usuarios con nombre, email, rol y estado
- Asignar permisos por módulo a subcuentas (granular: puede acceder solo a Ventas, Clientes, etc.)
- Eliminar usuarios (solo SuperAdmin puede eliminar)
- Auditoría automática de todas las acciones

**Módulos asignables a subcuentas:** Dashboard, Clientes, Inventario, Ventas, Facturación, Arqueo, Gastos, Presupuestos, Remitos, Empleados, Nóminas, Citas/Agenda, Sucursales, Proveedores, MercadoPago, WhatsApp, Asistente IA.

---

### ⚙️ CONFIGURACIÓN

**¿Qué hace?** Panel central de configuración del sistema.

**Secciones:**
- **Datos del negocio:** Nombre, logo, colores, rubro
- **Webhooks Make.com:** Google Calendar, Email de documentos, Campaña email, SIEM/alertas de seguridad
- **Formulario web embebible:** Genera formulario HTML para captar clientes desde una web externa
- **Datos AFIP:** Razón social, CUIT, condición fiscal
- **Branding:** Logo personalizado, color primario de la app
- **Seguridad:** Centro de seguridad, logs de auditoría, configuración SIEM

---

### 🏥 MÓDULOS CLÍNICOS / AGENDA ESPECIALIZADA

Disponibles solo para: **Medicina, Odontología, Belleza, Talleres.**

| Módulo | Función |
|---|---|
| **Cockpit Agenda** | Vista ejecutiva de turnos del día, cotizaciones pendientes y tareas del equipo |
| **Reservas 360** | Gestión 360° de pacientes/clientes con historial clínico completo |
| **Cotizaciones** | Presupuestos clínicos con seguimiento |
| **Embudo Agenda** | Embudo de conversión de pacientes/clientes (leads → activos) |
| **Tareas** | Gestión de tareas del equipo clínico |
| **Comunicaciones** | Historial de comunicaciones con pacientes/clientes |

---

## 3. GUÍAS PASO A PASO

### ¿Cómo cargo un nuevo cliente?

1. Ir al menú lateral → **Clientes**
2. Hacer clic en el botón **"+ Nuevo Cliente"** (arriba a la derecha)
3. Completar: Nombre completo, Teléfono, Email, Dirección (opcional), CUIT (opcional), Notas
4. Si el rubro lo requiere, completar campos adicionales (obra social, talla, patente, etc.)
5. Clic en **"Guardar"**
6. El cliente aparece inmediatamente en la tabla

---

### ¿Dónde veo el neto diario de mi negocio?

1. Ir al menú lateral → **Dashboard**
2. En la sección **"Flujo de Caja Predictivo — 30 días"** ver el KPI **"Neto Diario Promedio"**
3. También ver el **"Balance Actual"** y la **"Proyección 30 días"**
4. Si aparece la alerta roja, significa que hay riesgo de déficit de caja

---

### ¿Cómo agrego un sub-usuario para mi empleado?

1. Ir al menú lateral → **Usuarios**
2. Clic en **"+ Nuevo Usuario"**
3. Completar: Nombre, Email, seleccionar Rol → **"SubCuenta"**
4. En la sección de **Permisos**, tildar solo los módulos a los que puede acceder ese empleado
5. Clic en **"Guardar"**
6. El empleado podrá iniciar sesión con su email y verá solo los módulos asignados

---

### ¿Cómo emito un presupuesto?

1. Ir al menú lateral → **Presupuestos**
2. Clic en **"+ Nuevo Presupuesto"**
3. Seleccionar cliente, agregar items con precio unitario y cantidad
4. El sistema asigna automáticamente el número (PRES-0001, PRES-0002, etc.)
5. Guardar → el presupuesto queda registrado con estado "Pendiente"
6. Para enviarlo por email: clic en el ícono de email en la fila del presupuesto

---

### ¿Cómo importo clientes o productos desde Excel/CSV?

1. Ir al módulo correspondiente (Clientes o Inventario)
2. Buscar el botón **"Importar CSV"**
3. Seleccionar el tipo de datos a importar
4. El sistema muestra las **columnas esperadas** (primera fila debe ser el encabezado)
5. Separador: coma (,) o punto y coma (;) — ambos son aceptados
6. Subir el archivo y confirmar

**Columnas para Clientes:** id, nombre, telefono, email, direccion, cuit, notas, fechaAlta  
**Columnas para Productos:** id, nombre, precio, costo, stock, stockMin, categoria, codigo, descripcion

---

### ¿Cómo configuro un Webhook con Make.com?

1. En Make.com: crear un nuevo escenario → módulo **"Webhooks"** → **"Custom webhook"** → copiar la URL
2. En SistemaVOS: ir a **Configuración** → sección de integraciones
3. Pegar la URL en el campo correspondiente:
   - **Google Calendar:** sincronización de citas
   - **Email de documentos:** envío de presupuestos y facturas
   - **Campaña email:** envíos masivos
   - **SIEM/Alertas:** notificaciones de seguridad
4. Clic en **"Guardar"**

---

### ¿Cómo conectar MercadoPago?

1. Ir a **MercadoPago** en el menú lateral
2. Ingresar el **Token de Acceso** de tu cuenta de MercadoPago (obtenido en mercadopago.com.ar/developers)
3. Clic en **"Conectar"**
4. Una vez conectado: ingresar monto y descripción → clic en **"Generar Link"** o **"Generar QR"**

---

### ¿Cómo cargar un gasto desde una foto de ticket?

1. Ir a **Gastos** en el menú lateral
2. Clic en **"+ Nuevo Gasto"** o en el ícono de cámara/OCR
3. Subir la foto del ticket
4. El sistema procesa la imagen con OCR (Tesseract.js) y extrae el monto automáticamente
5. Completar/corregir categoría y descripción si es necesario
6. Guardar

---

### ¿Cómo generar la nómina del mes?

1. Asegurarse de tener empleados cargados en el módulo **Empleados**
2. Ir a **Nóminas** en el menú lateral
3. Clic en **"Generar Nómina"**
4. El sistema calcula automáticamente los haberes del mes basándose en los salarios registrados
5. La nómina queda guardada en el historial

---

### ¿Cómo exportar datos?

1. Ir al módulo que querés exportar (Clientes, Inventario, Ventas, Proveedores, Empleados)
2. Buscar el botón **"Exportar CSV"**
3. El archivo se descarga automáticamente con fecha en el nombre (ej: `clientes_2026-04-27.csv`)
4. También existe la opción de exportar **todos los módulos a la vez** desde Configuración

> ⚠️ Usuarios subcuenta tienen un límite de **500 registros** por exportación (medida de seguridad).

---

## 4. REGLAS DE NEGOCIO Y LIMITACIONES

### ❌ Lo que el sistema NO hace (para que el agente no prometa funciones inexistentes)

| Limitación | Detalle |
|---|---|
| **No emite CAE de AFIP automáticamente** | La facturación AFIP requiere configurar un webhook externo (Make.com + servicio AFIP). El sistema gestiona las facturas pero la emisión del CAE es vía integración |
| **No tiene app nativa (iOS/Android)** | Es una PWA (Progressive Web App). Se puede instalar desde el navegador, pero no está en App Store ni Google Play |
| **WhatsApp no es nativo** | Requiere cuenta de WhatsApp Business API y escenario configurado en Make.com. No funciona solo con una cuenta personal de WhatsApp |
| **Los pagos con MercadoPago no se auto-confirman** | El sistema genera links y QR, pero la actualización del estado de la venta al "pagado" no es automática sin un webhook configurado |
| **No tiene contabilidad completa** | No reemplaza un sistema contable certificado (no genera libros contables, balances formales ni declaraciones impositivas) |
| **No tiene e-commerce propio** | Puede integrarse con tiendas web vía webhook/formulario embebible, pero no incluye una tienda online propia |
| **El Pipeline CRM está oculto en la mayoría de rubros** | Solo visible en configuraciones específicas (general, inmobiliarias, talleres, indumentaria) |
| **Subcuentas: 500 registros máx. en exportación** | Por seguridad, las subcuentas no pueden exportar más de 500 registros por vez |
| **Auditoría: máximo 1.000 registros** | El log de auditoría interno guarda los últimos 1.000 eventos |
| **Sincronización en tiempo real entre dispositivos** | Los datos se sincronizan vía Supabase (auth) pero la BD principal vive en localStorage del navegador. Múltiples dispositivos requieren configuración de sync en la nube |

---

### ✅ Requisitos Técnicos

- **Navegador:** Chrome, Edge, Firefox o Safari (versión reciente)
- **Conexión:** Requiere Internet para login (Supabase Auth) y para usar webhooks/Make.com/MercadoPago
- **Funcionalidad offline:** Lectura de datos locales disponible, pero no se recomienda operar sin conexión
- **Dispositivos:** Compatible con PC, tablet y celular (diseño responsive + PWA instalable)

---

## 5. SCRIPT DE DERIVACIÓN HUMANA

### Regla General

> **El agente IA debe actuar como primer filtro.** Si puede resolver la consulta con la información de esta base de conocimientos, debe hacerlo. Si no puede, deriva **inmediatamente** sin inventar respuestas.

---

### 🔴 DERIVAR SIEMPRE (no intentar resolver)

| Situación | Por qué derivar |
|---|---|
| El usuario reporta que **no puede iniciar sesión** y ya intentó recuperar contraseña | Puede ser un problema de cuenta Supabase, requiere acceso admin |
| El usuario reporta **pérdida de datos** o que "desapareció información" | Situación crítica, puede implicar problema de localStorage o sesión |
| El usuario pide **descuento, precio especial o plan personalizado** | Solo el equipo comercial puede autorizar excepciones de precio |
| **Problemas con pagos:** cobros duplicados, no se acreditó el pago del plan, quiere cancelar | Requiere acceso a MercadoPago/admin de suscripciones |
| El usuario tiene un **error técnico que persiste** después de recargar la página | Puede ser un bug real que necesita diagnóstico del equipo técnico |
| Solicitud de **integración a medida** no documentada en este manual | Requiere evaluación técnica |
| El usuario menciona **datos sensibles de terceros** o situaciones legales | No opinar, derivar |
| El usuario está **enojado o insiste en hablar con una persona** | No retener, derivar siempre |

---

### 🟡 INTENTAR RESOLVER PERO DERIVAR SI FALLA

| Situación | Acción |
|---|---|
| No entiende cómo funciona un módulo | Explicar con la guía paso a paso. Si persiste, derivar |
| Pregunta si existe una función que no está en este manual | Responder que no está disponible actualmente. Si insiste o es una solicitud de feature, derivar |
| Problema con configuración de webhook Make.com | Dar los pasos del manual. Si el webhook sigue sin funcionar, derivar al equipo técnico |
| Pregunta por integración con sistema externo (contabilidad, e-commerce, etc.) | Indicar que es vía API/webhook. Si necesita asistencia personalizada, derivar |

---

### 📞 Mensaje de Derivación Estándar

Cuando sea necesario derivar, usar este mensaje:

> *"Entiendo tu consulta. Para poder ayudarte mejor con este tema, voy a transferirte con nuestro equipo. Por favor, dejame tu nombre, el nombre de tu negocio y una descripción breve del problema para agilizar la atención. ¿Te parece bien?"*

---

### 📋 Datos a Recolectar Antes de Derivar

Antes de pasar el caso al equipo humano, el agente debe recolectar:
- Nombre del usuario
- Nombre del negocio / cuenta en SistemaVOS
- Plan activo (si lo sabe)
- Rubro del negocio
- Descripción del problema o solicitud
- Pasos que ya intentó
- Urgencia (bloqueante / no urgente)

---

*Documento generado automáticamente desde el código fuente de `app.html` — SistemaVOS v1.0 — Abril 2026*
