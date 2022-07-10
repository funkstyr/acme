# Graphql API Hooks

> We are using RTK-Q and their graphql codegen.

## To create/update:

1) Create/update `.graphql` file
2) Have DB running
3) `pnpm generate` && `pnpm build` (this will run on dev)
4) Import hook
   1) `import { useExampleQuery, useLazyExampleQuery, useExampleMutation } from "@acme/graphql"`