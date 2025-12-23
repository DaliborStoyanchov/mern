import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
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

export const booksApi = createApi({
  reducerPath: "bookApi",
  baseQuery,
  tagTypes: ["Books"],
  endpoints: (builder) => ({
    fetchAllBooks: builder.query({
      query: () => "/",
      providesTags: ["Books"],
    }),
    fetchBookById: builder.query({
      query: (id) => `/${id}`,
      providesTags: (id) => [{ type: "Books", id }],
    }),
    createBook: builder.mutation({
      query: (newBook) => ({
        url: "/",
        method: "POST",
        body: newBook,
      }),
      invalidatesTags: ["Books"],
    }),
    updateBook: builder.mutation({
      query: (id, ...rest) => ({
        url: `/edit/${id}`,
        method: "PUT",
        body: rest,
        headers: {
          "Content-Type": "application/json",
        },
      }),
      invalidatesTags: ["Books"],
    }),
  }),
});

export const { useFetchAllBooksQuery } = booksApi;
