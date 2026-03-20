# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Commands

```bash
npm run build        # Compile TypeScript to dist/
npm run build:watch  # Watch mode compilation
npm run lint         # Run ESLint via n8n-node CLI
npm run lint:fix     # Auto-fix lint issues
npm run dev          # Development mode
npm run release      # Publish new version
```

There are no tests in this project.

## Architecture

This is an **n8n declarative-style community node** — it uses n8n's routing DSL to define API requests entirely in `INodeProperties[]` arrays, without an `execute()` method. The node never runs imperative code; n8n's engine interprets the `routing` field on each property to build and send HTTP requests.

### How routing works

- **Request-level routing** is defined on each `operation` option (method, URL, headers).
- **Field-level routing** is defined on each parameter property via `routing.send` (maps the field value to a body/query param with `property` as the API key).
- Authentication (`client` + `key`) is injected automatically via `OnurixApi.credentials.ts` into both `body` and `qs` on every request.

### Adding a new resource

1. Create `nodes/Onurix/resources/<resource>/index.ts` — exports `<resource>Operations: INodeProperties[]` containing the `operation` selector with `routing.request` per operation.
2. Create `nodes/Onurix/resources/<resource>/<operation>.ts` — exports the parameter descriptions with `displayOptions.show` guarding by `{ resource: ['<resource>'], operation: ['<value>'] }` and `routing.send` mapping each field to the API body property.
3. Import and spread both into `Onurix.node.ts` `properties` array.

### Known issues in `calls/send.ts`

The file `nodes/Onurix/resources/calls/send.ts` is untracked and has incorrect `displayOptions` — it references `resource: ['sms']` and `operation: ['calls']` instead of the correct values. It is also not imported in `calls/index.ts`. This needs to be fixed and wired up before the Calls resource is functional.

### API details

- Base URL: `https://www.onurix.com/api/v1`
- SMS and 2FA endpoints require `Content-Type: application/x-www-form-urlencoded` (set at the operation level in `sms/index.ts`).
- The Calls endpoint does not currently set a Content-Type override.
- Credential test: `GET /balance`.
