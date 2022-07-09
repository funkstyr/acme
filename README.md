# ACME Monorepo

## Install

1. [Node - LTS](https://nodejs.org/en/download/)
   1. [PNPM](https://pnpm.io/installation)
2. [Docker](https://docs.docker.com/get-docker/)
   1. Settings > Enable Kubernetes
3. [Tilt](https://docs.tilt.dev/install.html)

<br />

## Technologies

1) Front End (Node)
   1) [React](https://beta.reactjs.org/)
      1) [Next.js](https://nextjs.org/)
      2) [Mantine UI](https://mantine.dev/)
         1) Easily add sass via `pnpm add sass`
         2) Would do tailwind if only a static content site: [tailwindcss](https://tailwindcss.com/)/[daisyUI](https://daisyui.com/)
         3) [React Icons](https://react-icons.github.io/react-icons/)
         4) [zod](https://zod.dev/)
      3) [Redux Toolkit](https://redux-toolkit.js.org/)
         1) mainly for RTK-Query hooks
         2) Api hooks auto gen: [graphql codegen](https://redux-toolkit.js.org/rtk-query/usage/code-generation#graphql)
         3) [next-redux-wrapper](https://github.com/kirill-konshin/next-redux-wrapper)
      4) [next-auth](https://next-auth.js.org/)
      5) [next-translate](https://github.com/vinissimus/next-translate)
      6) [next-seo](https://github.com/garmeeh/next-seo)
      7) [next-pwa](https://github.com/shadowwalker/next-pwa)
      8) [React Testing Library](https://testing-library.com/docs/react-testing-library/intro/)
         1) [Cypress](https://www.cypress.io/)
2) Back End
   1) [Hasura](https://hasura.io/)
   2) [Supabase](https://supabase.com/)
   3) [Postgres](https://www.postgresql.org/)
   4) [RabbitMQ](https://www.rabbitmq.com/)
3) Infra
   1) [Turborepo](https://turborepo.org/) - monorepo
   2) [Docker](https://docs.docker.com/)
      1) Efficient image builds: [Nixpacks](https://nixpacks.com/docs/getting-started)
      2) Will attempt to have a `docker-compose` fallback for when k8s isn't wanted
   3) [Kubernetes](https://kubernetes.io/)
      1) Dev/Deploy: [Tilt](https://tilt.dev/)

<hr />

# Turborepo Design System starter with Changesets

This is an official React design system starter powered by Turborepo. Versioning and package publishing is handled by [Changesets](https://github.com/changesets/changesets) and fully automated with GitHub Actions.

## What's inside?

This Turborepo includes the following:

### Apps and Packages

- `docs`: A placeholder documentation site powered by [Next.js](https://nextjs.org)
- `@acme/core`: core React components
- `@acme/utils`: shared React utilities
- `@acme/tsconfig`: shared `tsconfig.json`s used throughout the monorepo
- `eslint-preset-acme`: ESLint preset

Each package and app is 100% [TypeScript](https://www.typescriptlang.org/).

### Utilities

This Turborepo has some additional tools already setup for you:

- [TypeScript](https://www.typescriptlang.org/) for static type checking
- [ESLint](https://eslint.org/) for code linting
- [Prettier](https://prettier.io) for code formatting

## Using this example

Run the following command:

```sh
npx degit vercel/turborepo/examples/with-changesets design-system
cd design-system
yarn install
git init . && git add . && git commit -m "Init"
```

### Useful commands

- `yarn build` - Build all packages and the docs site
- `yarn dev` - Develop all packages and the docs site
- `yarn lint` - Lint all packages
- `yarn changeset` - Generate a changeset
- `yarn clean` - Clean up all `node_modules` and `dist` folders (runs each package's clean script)

### Changing the npm organization scope

The npm organization scope for this design system starter is `@acme`. To change this, it's a bit manual at the moment, but you'll need to do the following:

- Rename folders in `packages/*` to replace `acme` with your desired scope
- Search and replace `acme` with your desired scope
- Re-run `yarn install`

## Versioning and Publishing packages

Package publishing has been configured using [Changesets](https://github.com/changesets/changesets). Please review their [documentation](https://github.com/changesets/changesets#documentation) to familiarize yourself with the workflow.

This example comes with automated npm releases setup in a [GitHub Action](https://github.com/changesets/action). To get this working, you will need to create an `NPM_TOKEN` and `GITHUB_TOKEN` in your repository settings. You should also install the [Changesets bot](https://github.com/apps/changeset-bot) on your GitHub repository as well.

For more information about this automation, refer to the official [changesets documentation](https://github.com/changesets/changesets/blob/main/docs/automating-changesets.md)

### npm

If you want to publish package to the public npm registry and make them publicly available, this is already setup.

To publish packages to a private npm organization scope, **remove** the following from each of the `package.json`'s

```diff
- "publishConfig": {
-  "access": "public"
- },
```

### GitHub Package Registry

See [Working with the npm registry](https://docs.github.com/en/packages/working-with-a-github-packages-registry/working-with-the-npm-registry#publishing-a-package-using-publishconfig-in-the-packagejson-file)
