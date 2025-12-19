import {
  createApi,
  fetchBaseQuery,
  type BaseQueryApi,
  type BaseQueryFn,
  type EndpointBuilder,
  type EndpointDefinitions,
  type QueryReturnValue,
} from "@reduxjs/toolkit/query/react";
import getBaseUrl from "../../../utils/baseUrl";

const baseQuery = fetchBaseQuery({
  baseUrl: `${getBaseUrl()}/api/books`,
  credentials: "include",
  prepareHeaders: (Headers) => {
    const token = localStorage.getItem("token");

    if (token) {
      Headers.set("Authorization", `Bearer ${token}`);
    }

    return Headers;
  },
});

const bookApi = createApi({
  reducerPath: "bookApi",
  baseQuery: function (
    args: any,
    api: BaseQueryApi,
    extraOptions: {}
  ):
    | QueryReturnValue<unknown, unknown, {}>
    | PromiseLike<QueryReturnValue<unknown, unknown, {}>> {
    console.log(args, api, extraOptions);
    throw new Error("Function not implemented.");
  },
  endpoints: function (
    build: EndpointBuilder<
      BaseQueryFn<any, unknown, unknown, {}, {}>,
      never,
      "booksApi"
    >
  ): EndpointDefinitions {
    console.log(build);
    throw new Error("Function not implemented.");
  },
});

console.log(baseQuery, bookApi);
