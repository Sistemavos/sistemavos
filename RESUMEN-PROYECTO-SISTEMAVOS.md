# RESUMEN COMPLETO DEL PROYECTO — SistemaVOS

**Fecha:** 31 de marzo de 2026
**Propietario:** Lucas Coronel — contacto@multigestiones.com
**Dominio:** sistemavos.com.ar
**Deploy:** Vercel (gratuito)
**Repositorio:** GitHub (REPOSITORIO-GITHUB/)

---

## 1. QUE ES SISTEMAVOS

SistemaVOS es un SaaS CRM/ERP integral para PyMEs de Latinoamérica (foco Argentina). Es una aplicación web de archivo único (Single Page Application en un solo HTML) que corre 100% en el navegador usando localStorage para persistencia de datos.

### Modelo de Negocio
- **Emprendedor:** US$9.99/mes — 1 usuario, 1 sucursal
- **Negocio:** US$16.99/mes — 5 usuarios, 3 sucursales, MercadoPago, WhatsApp IA
- **Premium:** US$21.99/mes — Ilimitado, API, IA avanzada, bots
- Todos incluyen facturación electrónica AFIP
- 14 días de prueba gratuita sin tarjeta
- Cobro en ARS con conversión automática dólar oficial + impuestos

### Código Promocional
- Código: `sistemavos2026`
- 4 usos máximos, da Premium gratis de por vida
- El campo se oculta automáticamente cuando se agotan los 4 cupos

### Datos de Pago MercadoPago
- CVU: 0000003100078388058922
- Alias: SistemaVOS

---

## 2. ARQUITECTURA TÉCNICA

### Stack
- **Frontend:** HTML5 + CSS3 + JavaScript vanilla (sin frameworks)
- **Todo en un solo archivo:** `app.html` (5407 líneas, 247KB)
- **Persistencia:** localStorage (clave `sistemavos_db`)
- **CDN:** Chart.js 4.4.1, Font Awesome 6.5.1, Google Fonts (Inter)
- **Deploy:** Vercel con vercel.json para rewrites
- **Seguridad headers:** X-Frame-Options: DENY, X-Content-Type-Options: nosniff

### Archivos del Proyecto
```
REPOSITORIO-GITHUB/
├── index.html          → Landing page / marketing (383 líneas, 28KB)
├── app.html            → Aplicación CRM completa (5407 líneas, 247KB)
├── legal.html          → Términos, Privacidad, Cookies, Datos (392 líneas, 25KB)
├── vercel.json         → Config de deploy Vercel (17 líneas)
├── guia-bienvenida-sistemavos.pdf → Guía para nuevos usuarios (17KB)
├── .gitignore
└── README.md
```

### Documentos Adicionales (no van a GitHub)
- `ANALISIS-FUNCIONAL-SISTEMAVOS.docx` — Documentación funcional completa (27KB)
- `GUIA-GITHUB-VERCEL-PASO-A-PASO.docx` — Guía de deploy para el propietario (17KB)
- `GUIA-DEPLOY-PASO-A-PASO.docx` — Guía de deploy anterior (14KB)

---

## 3. MÓDULOS DEL SISTEMA (17 módulos)

La app tiene 17 módulos accesibles desde un sidebar lateral:

1. **Dashboard** — Métricas en tiempo real, gráfico de ventas (Chart.js), top productos, actividad reciente
2. **Clientes** — CRUD completo, búsqueda, historial, documentos adjuntos
3. **Inventario** — Productos con precio/costo/stock, código de barras, alertas de stock bajo
4. **Ventas** — Carrito, selección de cliente/productos, múltiples medios de pago, detalle de venta
5. **Facturación AFIP** — Emisión de facturas A/B/C, items, CAE, notas de crédito/débito
6. **Arqueo de Caja** — Apertura/cierre de caja, diferencias, movimientos
7. **Gastos** — Registro de egresos categorizados con comprobantes
8. **Empleados** — Legajos, datos personales, cargos, documentos
9. **Nóminas** — Cálculo de sueldos, recibos, aportes
10. **Sucursales** — Multi-sucursal con dirección y estado
11. **Citas/Agenda** — Calendario mensual, turnos, estados, WhatsApp reminder, Google Calendar sync
12. **Proveedores** — Base de proveedores, condiciones, historial
13. **Usuarios** — Gestión de usuarios de la cuenta con roles
14. **MercadoPago** — Conexión, QR, links de pago, datos bancarios (CVU/Alias con copiar)
15. **WhatsApp Business** — Config de IA por rubro, 6 auto-funciones, simulador de conversación
16. **Asistente IA** — Chat conversacional que responde consultas del negocio
17. **Configuración** — Datos del negocio, logo, color, branding, limpieza de datos

---

## 4. FUNCIONALIDADES IMPLEMENTADAS (125 funciones JS)

### Autenticación
- `initializeApp()` — Detecta si hay cuenta, maneja parámetro ?login=1
- `showLogin()` / `showRegistration()` / `showApp()` — Navegación entre pantallas
- `performLogin()` — Valida credenciales, soporta master login y login normal
- `showLoginError()` / `clearLoginError()` — Mensajes de error inline (no alerts)
- `toggleForgotPassword()` / `recoverPassword()` — Recuperación de contraseña
- `completeRegistration()` — Registro en 4 pasos (datos, rubro, plan, branding)
- `logout()` — Cierre de sesión con confirmación

### Credenciales Master
```javascript
const MASTER_CREDENTIALS = {
    email: 'contacto@multigestiones.com',
    passHash: btoa('SistemaVOS2026!'),
    name: 'Lucas Coronel',
    role: 'master'
};
```

### Sistema de Registro (4 pasos)
1. **Paso 1:** Datos del negocio (nombre, email, contraseña, teléfono, dirección)
2. **Paso 2:** Selección de rubro/industria (8 opciones con auto-configuración)
3. **Paso 3:** Selección de plan (3 columnas) + código promocional
4. **Paso 4:** Personalización (logo, color primario)

### CRUD por Módulo
- Clientes: `guardarCliente`, `eliminarCliente`, `filterClientes`, `renderClientes`
- Productos: `guardarProducto`, `eliminarProducto`, `filterProductos`, `renderProductos`
- Ventas: `agregarProductoVenta`, `completarVenta`, `verDetalleVenta`, `renderVentas`
- Facturas: `emitirFactura`, `verFactura`, `agregarItemFactura`, `renderFacturas`
- Gastos: `guardarGasto`, `eliminarGasto`, `filterGastos`, `renderGastos`
- Empleados: `guardarEmpleado`, `eliminarEmpleado`, `filterEmpleados`, `renderEmpleados`
- Nóminas: `generarNomina`, `renderNominas`
- Sucursales: `guardarSucursal`, `eliminarSucursal`, `renderSucursales`
- Proveedores: `guardarProveedor`, `eliminarProveedor`, `filterProveedores`, `renderProveedores`
- Usuarios: `guardarUsuario`, `eliminarUsuario`, `renderUsuarios`
- Citas: `guardarCita`, `eliminarCita`, `cambiarEstadoCita`, `renderCitas`, `renderCalendar`

### Sistema de Documentos
- `initDocSystem()` — Inicializa sistema de documentos
- `getDocUploadHTML()` — Genera HTML de upload zone (drag & drop + cámara móvil)
- `handleDocUpload()` / `handleDocDrop()` — Manejo de archivos
- `activarCamara()` — Acceso a cámara del dispositivo con `capture="environment"`
- `renderDocList()` — Lista documentos de una entidad
- `verDocumento()` / `descargarDocumento()` / `eliminarDocumento()` — Acciones
- Integrado en 9 módulos: clientes, facturas, proveedores, empleados, gastos, etc.

### WhatsApp Business + IA
- `conectarWhatsApp()` — Configuración de conexión
- `cargarConfigWA()` / `guardarConfigWA()` — Persistencia de config
- `simularMensajeWA()` — Simulador de conversación
- `generarRespuestaIA()` — IA que responde por rubro (8 tipos)
- `enviarNotificacionWA()` — Notificaciones
- 6 auto-funciones: stock, citas, cobro, banco, factura, notificaciones

### MercadoPago
- `conectarMercadoPago()` — Config de conexión
- `generarEnlaceMercadoPago()` — Links de pago
- `generarQRMercadoPago()` — Códigos QR
- Datos bancarios con botón copiar (CVU y Alias)

### Dashboard
- `renderDashboard()` — Stats de ventas, clientes, productos, ticket promedio
- `renderSalesChart()` — Gráfico de ventas 7 días (Chart.js)
- `renderTopProductsChart()` — Top 5 productos (Chart.js doughnut)
- `renderRecentActivity()` — Tabla de actividad reciente

### Configuración
- `guardarConfigGeneral()` / `guardarConfigBranding()` — Guardar configs
- `cambiarColorPrimario()` — Cambio de color en tiempo real
- `previewConfigLogo()` — Preview del logo
- `limpiarDatos()` / `resetCompleto()` — Limpieza y reset

---

## 5. RESPONSIVE DESIGN

- **3 breakpoints:** 1024px, 768px, 480px
- **Mobile-first:** Hamburger menu, sidebar overlay
- **Sidebar:** Se oculta en mobile, aparece como overlay al tocar hamburger
- **Plan cards:** 3 columnas en desktop/tablet, stack en mobile <480px
- **Registration box:** Se expande a 820px en paso 3 (selección de plan)
- **Documentos:** Camera access con `capture="environment"` en móvil
- **Landing page:** Responsive con nav-mobile-btns para mobile

---

## 6. LANDING PAGE (index.html)

### Secciones
1. **Nav** — Logo, links de navegación, botón "Iniciar Sesión" y "Probar Gratis" (+ versión mobile)
2. **Hero** — Título, descripción, CTA, stats, mockup visual
3. **Rubros** — 8 tarjetas de industrias soportadas
4. **Funciones** — 9 tarjetas de features principales
5. **Facturación AFIP** — Sección dark con features de facturación
6. **Precios** — 3 plan cards con badge "Más elegido" en Negocio
7. **Datos MercadoPago** — CVU y Alias para suscripciones
8. **CTA Final** — Call to action con gradiente
9. **Footer** — Links a Producto, Soporte, Legal (conectados a legal.html)

### Botón de Login
- Desktop: `app.html?login=1` con estilo outline en nav
- Mobile: Botones "Ingresar" y "Registrar" visibles cuando nav-links se oculta

---

## 7. PÁGINA LEGAL (legal.html)

Página con 4 pestañas navegables (con hash URL):

1. **Términos de Uso** (12 cláusulas)
   - Objeto, planes, cobro transparente, sin permanencia, arrepentimiento (Ley 24.240), propiedad de datos, modificación de precios, disponibilidad 99.5%, uso aceptable, limitación de responsabilidad, jurisdicción CABA

2. **Política de Privacidad** (10 artículos)
   - Conforme a Ley 25.326, derechos ARCO, AAIP como organismo de control, no venta de datos, seguridad TLS 1.3 + bcrypt

3. **Política de Cookies** (5 secciones)
   - Cookies esenciales (localStorage), rendimiento, terceros (Google Fonts, Font Awesome, hCaptcha), cómo gestionar

4. **Política de Datos** (9 secciones)
   - Tipos de datos, almacenamiento localStorage vs cloud futuro, portabilidad total, eliminación, compartición solo con AFIP/MercadoPago/WhatsApp, brechas, BCRA

---

## 8. SISTEMA DE LOGIN (flujo corregido)

### Flujo Actual
```
URL con ?login=1 → Muestra formulario de login SIEMPRE
Sin parámetro + sin cuenta → Muestra registro
Sin parámetro + con cuenta → Muestra login
```

### Protecciones
- `showLogin()` — Null check en `db.account` antes de acceder propiedades
- `performLogin()` — Null check, mensajes de error inline (no alert), soporte master login
- `recoverPassword()` — Null check, mensaje diferenciado para master vs normal
- Notice box azul cuando no hay cuenta registrada con link a registro

---

## 9. CONFIGURACIÓN DE VERCEL

```json
{
  "rewrites": [
    { "source": "/app", "destination": "/app.html" },
    { "source": "/app/(.*)", "destination": "/app.html" },
    { "source": "/legal", "destination": "/legal.html" }
  ],
  "headers": [
    {
      "source": "/(.*)",
      "headers": [
        { "key": "X-Frame-Options", "value": "DENY" },
        { "key": "X-Content-Type-Options", "value": "nosniff" },
        { "key": "Referrer-Policy", "value": "strict-origin-when-cross-origin" }
      ]
    }
  ]
}
```

---

## 10. RUBROS/INDUSTRIAS SOPORTADOS

1. Indumentaria & Retail
2. Medicina & Salud
3. Talleres & Automotriz
4. Gastronomía
5. Belleza & Estética
6. Kioscos & Almacenes
7. Lavaderos de Autos
8. Inmobiliarias

Cada rubro auto-configura terminología, campos y flujos del CRM.

---

## 11. COSAS YA DOCUMENTADAS PERO PENDIENTES DE IMPLEMENTACIÓN REAL

### Requieren Backend (no se puede hacer solo con frontend)
1. **Emails automáticos** — Notificación al master por nuevos registros y pagos (necesita EmailJS, Make.com o backend)
2. **Email de bienvenida** — Con guía PDF adjunta al nuevo usuario (necesita servicio de email)
3. **Facturación electrónica AFIP real** — Requiere certificado digital AFIP, punto de venta, API WSFE (necesita backend)
4. **2FA (Autenticación de dos factores)** — Documentada en el análisis funcional pero no implementada en código
5. **CAPTCHA** — Documentada pero no implementada
6. **Integración real con MercadoLibre** — Requiere OAuth 2.0 y API de MELI
7. **Integración real con Tiendanube** — Requiere API de Tiendanube
8. **Integración real con WhatsApp Business API** — Requiere Meta Business API
9. **Conversión cambiaria automática via API** — Documentada con DolarAPI.com pero no conectada
10. **Cloud storage para documentos** — Actualmente en localStorage (Base64), planificado S3/Cloudinary
11. **PWA / Service Worker** — Mencionado pero no implementado
12. **Rate limiting** — Documentado pero no implementado (requiere backend)

### Limitaciones del Enfoque localStorage
- Los datos existen solo en el navegador/dispositivo donde se crearon
- No hay sincronización entre dispositivos
- Si el usuario limpia el navegador, pierde todo
- No hay backup automático en la nube
- Tamaño limitado (~5-10MB según navegador)

---

## 12. HISTORIAL DE CAMBIOS REALIZADOS EN ESTA SESIÓN

### Sesión anterior (contexto heredado)
- Sistema CRM completo construido (app.html ~5265 líneas)
- Landing page (index.html)
- Precios actualizados a US$9.99 / US$16.99 / US$21.99
- Limpieza de referencias "ADS" reemplazadas por SistemaVOS
- WhatsApp Business + IA implementado
- Factura electrónica para todos los planes
- Sistema de citas/agenda con calendario
- Responsive design con hamburger menu
- Sistema de documentos con escaneo móvil
- Código promocional "sistemavos2026" (4 usos, Premium gratis)
- Datos MercadoPago (CVU + Alias) con copiar
- Guía PDF de bienvenida creada
- vercel.json creado

### Esta sesión
1. **DOCX Guía de Deploy** — Creada con docx-js, paso a paso GitHub + Vercel + Dominio
2. **DOCX Análisis Funcional** — 8 secciones: financiero, datos, ventas, seguridad, API, legal (27KB)
3. **Carpeta REPOSITORIO-GITHUB** — Estructura lista para subir a GitHub con .gitignore y README
4. **Botón Iniciar Sesión en landing** — Desktop (nav-links) y mobile (nav-mobile-btns)
5. **Bug fix login** — initializeApp() ahora respeta ?login=1, protecciones null en showLogin/performLogin
6. **Olvidé mi contraseña** — Formulario desplegable con validación
7. **Planes en 3 columnas** — Registration box se expande, grid forzado a 3 cols, badge "Más elegido"
8. **Página legal.html** — Términos, Privacidad, Cookies, Datos (4 pestañas con hash URL)
9. **Footer links** — Conectados a legal.html#terminos, #privacidad, #cookies, #datos
10. **Error handling mejorado** — showLoginError() inline en vez de alert()

---

## 13. PREGUNTAS SUGERIDAS PARA REVISIÓN

Para que Gemini (u otro revisor) evalúe el proyecto, estas son áreas clave a auditar:

1. **Seguridad:** ¿Las contraseñas con btoa() son seguras? ¿Qué vulnerabilidades tiene usar localStorage para datos sensibles?
2. **Escalabilidad:** ¿El enfoque de single-file HTML (247KB) es sostenible? ¿Cuándo debería migrarse a un framework?
3. **Performance:** ¿5407 líneas en un solo archivo impacta carga/rendimiento? ¿Debería dividirse?
4. **SEO:** ¿La landing page está optimizada para buscadores? ¿Falta algo?
5. **Accesibilidad (a11y):** ¿Los formularios tienen aria-labels? ¿El contraste de colores es suficiente?
6. **Legal:** ¿Los términos y políticas cubren todos los requisitos legales argentinos?
7. **UX/UI:** ¿El flujo de registro es intuitivo? ¿Los 17 módulos son excesivos para el sidebar?
8. **Monetización:** ¿El modelo de precios es competitivo? ¿La conversión cambiaria está bien planteada?
9. **Roadmap:** ¿Cuál debería ser la prioridad: migrar a backend, agregar 2FA real, o integrar APIs externas?
10. **Testing:** ¿Qué tests automatizados faltan? ¿Cómo testear un SPA de archivo único?
11. **Mobile:** ¿La experiencia mobile es suficientemente buena para uso diario de PyMEs?
12. **Data Loss:** ¿Qué mecanismos de backup debería implementar antes de lanzar a producción?

---

*Documento generado automáticamente para revisión externa. Proyecto SistemaVOS v1.0.*
