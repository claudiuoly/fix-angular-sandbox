# FIX Angular Sandbox

Angular 21 sandbox application used to integrate and validate the `fix-platform` package in a standalone Angular app.

## Tech Stack

- Angular 21 (standalone APIs)
- TypeScript (strict mode)
- npm (required)

## Prerequisites

- Node.js 22+ (LTS recommended)
- npm 11+

## Installation

Install dependencies:

```bash
npm install
```

Install `fix-platform` from a local workspace path (example):

```bash
npm install "fix-platform@file:../FIX/FIX.Platform/FIX.Platform.Frontend"
```

## Environment Configuration

`initFixCore` reads the API base URL from:

- `src/environments/environment.ts`

Update this constant before running or building:

```ts
export const server_url = 'https://localhost:7251';
```

## Available Scripts

- `npm run start` - Start dev server (`development` configuration)
- `npm run build` - Production build
- `npm run build:dev` - Development build
- `npm run watch` - Development watch build
- `npm run typecheck` - TypeScript check (no emit)
- `npm run format` - Format project with Prettier
- `npm run format:check` - Verify formatting

## Build Output

Production artifacts are generated in:

`dist/fix-angular-sandbox`

## Static Assets

Icons from `fix-platform` are copied to `/_icons/` via `angular.json` assets configuration:

- `node_modules/fix-platform/dist/icons`

`angular.json` snippet:

```json
{
  "glob": "**/*",
  "input": "node_modules/fix-platform/dist/icons",
  "output": "/_icons/"
}
```

## Support Action Contract

`fix-login-page` does not provide a default support fallback. Consumers must handle the `login-support` event explicitly.

Angular template example:

```html
<fix-login-page (login-support)="onSupportRequested($event)"></fix-login-page>
```

Angular handler example:

```ts
protected onSupportRequested(event: Event): void {
  event.preventDefault();
  // custom support flow (open modal, navigate, open ticket form, etc.)
}
```

## Notes

- This project currently does not include unit/e2e test setup.
- `fix-platform` must be installed before running `start` or `build`.
