# TSender UI

A 100% client-side UI for the TSender contract.

- [TSender UI](#tsender-ui)
- [Getting Started](#getting-started)
    - [Requirements](#requirements)
        - [Environment Variables](#environment-variables)
    - [Setup](#setup)
- [Contributing](#contributing)

# Getting Started

## Requirements

- [node](https://nodejs.org/en/download)
    - You'll know you've installed it right if you can run `node --version` and get a response like `v23.0.1`
- [pnpm](https://pnpm.io/)
    - You'll know you've installed it right if you can run `pnpm --version` and get a response like `10.1.0`
- [git](https://git-scm.com/downloads)
    - You'll know you've installed it right if you can run `git --version` and get a response like `git version 2.33.0`

### Environment Variables

You'll need a `.env.local` the following environment variables:

- `NEXT_PUBLIC_WALLETCONNECT_PROJECT_ID`: Project ID from [reown cloud](https://cloud.reown.com/)

## Setup

```bash
git clone https://github.com/cyfrin/tsender-ui
cd tsender-ui
pnpm install
pnpm run dev
```

# Contributing

For those who want to contribute, including running tests, please see the [CONTRIBUTING.md](./CONTRIBUTING.md) file.

<!-- # Install from scratch notes

When adding Tailwind, remember to remove `supports-color` -->

<!-- Testing: -->
<!-- -D vitest @vitejs/plugin-react jsdom @testing-library/react @testing-library/dom vite-tsconfig-paths -->
