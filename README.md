# n8n-nodes-onurix

Nodos personalizados de [n8n](https://n8n.io/) para integrar los servicios de Onurix en automatizaciones y agentes.

> **Estado:** repositorio inicial. Actualmente solo contiene este README; la implementación de los nodos está pendiente.

## Objetivo

Permitir que los flujos de n8n puedan:

- Enviar mensajes SMS y de WhatsApp a través de la API de Onurix.
- Consultar el estado de los mensajes y el saldo de la cuenta.
- Gestionar contactos y grupos.
- Integrar los servicios de Onurix con otros sistemas sin escribir código.

## Estructura prevista

Cuando se implementen los nodos, el paquete seguirá la estructura estándar de un paquete de nodos de n8n:

```text
n8n-nodes-onurix/
├── nodes/
│   └── Onurix/
│       ├── Onurix.node.ts
│       └── onurix.svg
├── credentials/
│   └── OnurixApi.credentials.ts
├── package.json
├── tsconfig.json
└── README.md
```

## Desarrollo

Requisitos:

- Node.js 18 o superior
- n8n instalado globalmente o en un contenedor

Comandos previstos:

```bash
npm install
npm run build
npm link
```

Después de enlazar el paquete, inicia n8n y busca el nodo **Onurix** en el editor.

## Credenciales

La autenticación se realizará con la clave de API de Onurix (`key`) y el identificador de cliente (`client`). Las credenciales se guardarán como credenciales de n8n, nunca en el código.

## Notas

- El repositorio aún no contiene código funcional.
- Cuando se agreguen los nodos, actualiza este README con la instalación, los parámetros y ejemplos de uso.
