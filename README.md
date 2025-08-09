<p align="center">
  <img src="https://github.com/Soymaferlopezp/Stash/blob/main/public/DCA.png" alt="Stash Logo" height="250">
</p>

<h1 align="center">Stash: Tu Herramienta de Ahorro Descentralizada en Stellar</h1>

Stash es una aplicación web descentralizada construida sobre la red de Stellar. Su misión es democratizar el ahorro, permitiendo a los usuarios crear estrategias de Dollar-Cost Averaging (DCA) de manera segura, sin custodia y con la ayuda de la inteligencia artificial.

[![Deployed on Vercel](https://img.shields.io/badge/Deployed%20on-Vercel-black?style=for-the-badge&logo=vercel)](https://vercel.com/stashs-projects-39f6689b/v0-stash)
[![Built with v0](https://img.shields.io/badge/Built%20with-v0.dev-black?style=for-the-badge)](https://v0.dev/chat/projects/SJLzBg9LIE8)

***

### 👥 Team

- 👩‍💻 **Mafer Lopez** — Dev & UX/UI Designer
- 📈 **Zula** — PM & Marketing
- 🚀 **Mary** — Researcher & BizDev

Track: Track Abierto

***

### 🎯 Características Principales del Prototipo

- **Ahorro con Propósito (Vaults Privados):** Crea objetivos de ahorro personales y sigue tu progreso de forma privada y segura.
- **Ahorro Colaborativo (Vaults Compartidos):** Ahorra en equipo con amigos o familiares a través de contratos inteligentes que garantizan transparencia y seguridad.
- **Asistente de IA:** Un copiloto financiero que convierte tus metas en planes de ahorro viables y automatizados.
- **Dashboard Completo:** Un panel de control intuitivo para gestionar tu actividad financiera en la red de Stellar.
- **Flujo Web3:** Simulación de conexión y desconexión con una wallet de Stellar (como Lobstr).

***

### 🛠️ Tecnologías y Diseño

| **Tecnologías Utilizadas** | **Paleta de Colores** | **Tipografía** |
| :--- | :--- | :--- |
| **v0 by Vercel** | **Verde ahorro:** `#00A86B` (Primario) | **Titulares:** Sora |
| **React / Next.js** | **Azul Stellar:** `#1B6AFF` (Secundario) | **Texto y UI:** Inter |
| **Stellar SDK** | **Naranja cripto:** `#FF8C42` (Acento) | |
| **HTML, CSS, JS** | **Gris carbón:** `#1E1E1E` (Fondo) | |
| | **Gris claro:** `#F8F9FA` (Texto) | |

***

### 🚀 Roadmap (Siguientes Fases)

| **Fase** | **Objetivos Clave** |
| :--- | :--- |
| **1. MVP Funcional** | Construir el frontend interactivo en React. Conectar la wallet de Stellar y leer saldos. |
| **2. Core Business** | Desarrollar los smart contracts para los vaults privados y colaborativos. Implementar la lógica de DCA y el asistente de IA. |
| **3. Producto Final** | Mejorar la UX/UI con animaciones. Realizar auditorías de seguridad. Preparar el lanzamiento en la red principal de Stellar. |

***
### Diagrama de Flujo Stash

¡Excelente idea\! Un diagrama de flujo es la mejor manera de visualizar el recorrido del usuario a través del prototipo. Te lo proporciono en un cuadro de código, utilizando un formato de texto que es claro y fácil de entender.

Este diagrama representa el flujo del MVP, desde la entrada hasta la desconexión, y las interacciones dentro del dashboard que hemos construido.

```
+------------------+
|   Landing Page   |
+------------------+
        |
        | (Click en "Conectar Wallet")
        V
+------------------+
|      Modal       |
| Conectar Wallet  |
+------------------+
        |
        | (Click en "Firmar Transacción")
        V
+------------------------------------------------------+
|                   Dashboard Principal                |
|           (Vista de Resumen por defecto)             |
|                                                      |
|  [Sidebar]                                           |
|  - Dashboard                                         |
|  - Crear Vault                                       |
|  - Mis Vaults                                        |
|  - Vaults Colaborativos                              |
|  - Asistente de IA                                   |
|  - Historial de Transacciones                        |
|  - Configuración                                     |
|                                                      |
+------------------------------------------------------+
        |
        | (Navegación del usuario)
        +----------------------------->+------------------------+
        |                              |  Mis Vaults            |
        +----------------------------->|  (Grid de Vaults)      |
        |                              +------------------------+
        V
+------------------------+
|  Crear Vault           |
| (Formulario + Tabs)    |
|                        |
| <Elegir tipo de Vault> |
|                        |
| [Formulario de Creación]|
+------------------------+
        |
        | (Otras secciones)
        +----------------------------->+------------------------+
        |                              |  Historial de          |
        +----------------------------->|  Transacciones         |
        |                              |  (Tabla)               |
        V                              +------------------------+
+------------------------+
|  Configuración         |
| (Perfil, Seguridad)    |
|                        |
| [Botón Desconectar]    |
+------------------------+
        |
        | (Click en "Desconectar Wallet"
        | en Configuración o en el dropdown superior)
        V
+------------------+
|   Landing Page   |
+------------------+
```

***

### 📄 Licencia

Este proyecto está bajo la licencia MIT.

## How It Works

1. Create and modify your project using [v0.dev](https://v0.dev)
2. Deploy your chats from the v0 interface
3. Changes are automatically pushed to this repository
4. Vercel deploys the latest version from this repository
