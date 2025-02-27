# Scoped Dependencies Example

This repository demonstrates that remote apps with the same scoped dependencies do not share the same instance of the dependency.

## Project Structure

The repository contains multiple applications, each with its own set of dependencies:

- `app-1`
- `app-2`
- `app-3`
- `shell`

## Shared Dependencies

There are two sets of shared dependencies:

### React 18 scope
This scope is used by `app-1` and `app-2`
```json
{
  react: {
    singleton: true,
    version: "^18.3.0",
    shareScope: "react18"
  },
  "react-dom": {
    singleton: true,
    version: "^18.3.0",
    shareScope: "react18"
  }
}
```

### React 17 scope
This scope is used by `app-3`
```json
{
  react: {
    singleton: true,
    version: "^17.0.0",
    shareScope: "react17"
  },
  "react-dom": {
    singleton: true,
    version: "^17.0.0",
    shareScope: "react17"
  }
}
```

## How to Run the Example Apps

### Install Dependencies

First, install the dependencies for all apps:

```sh
npm install
```

### Build the Apps

Build all apps:

```sh
npm run build
```

### Start the Apps

Start all apps:

```sh
npm run preview -w shell
npm run preview -w app-1
npm run preview -w app-2
npm run preview -w app-3
```