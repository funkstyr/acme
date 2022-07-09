import { createApi } from "@reduxjs/toolkit/query/react";
import { graphqlRequestBaseQuery } from "@rtk-query/graphql-request-base-query";
import { GraphQLClient } from "graphql-request";

/**
 * TODO: eventually use env variables for these
 */

const API_URL = process.env.API_URL || "http://localhost:8080";
const API_ROUTE = process.env.API_ROUTE || "/v1/graphql";
const url = `${API_URL}${API_ROUTE}`;

const client = new GraphQLClient(url, {
  headers: { "x-hasura-admin-secret": "myadminsecretkey" },
});

/**
 * TODO: this any is to only getting it to build
 * TODO: look into what is needed to lose the any
 */

export const api: any = createApi({
  baseQuery: graphqlRequestBaseQuery({
    client,
  }),
  endpoints: () => ({}),
});
