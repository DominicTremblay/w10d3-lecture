# GraphQL - W10D3 Advanced Lecture

- Setup for GraphQL
- GraphQL exercises in class
- To start, run `node src/server.js`
- Load your browser on localhost:4000

## Content

- GraphQL
  - What is GraphQL
  - Why GraphQL
- Demo 1: Simple Demo
- Demo 2: Todo API Demo

## What is GraphQL

- Strongly typed query language for getting data from your app
- Created by Facebook
- Open Sourced
- Provides a lot of power to the client to specify the exact information it needs

### GraphQL VS REST

- REST uses multiples URL endpoints with different verbs
- GraphQL uses a single URL
- With REST, the structure of the result (shape) is defined by the server
- With GraphQL, the shape is determined by the client
- With REST, you might need to constantly add new endpoints to respond to different needs of the client

### Why GraphQL

- Can perform much more flexible requests
- Can query an API more efficiently

## GraphQl

- Developed by Facebook
- Open Sourced

### Differences REST VS GraphQL

- REST is dependant on many endpoints url + verb
- With REST, you get all the data of that end point even if you don't need it all. That an issue for performance.
- With GraphQL, you're using 1 url
- With REST the power is on the server side and the client can not do much about it
- With GraphQL, there's a lot of power granted to the client
- The client is going to specify the data that it wants. Much more flexible.


### What is GraphQL

- GraphQL is a query language for your API
- GraphQL isn't tied to any specific database or storage engine and is instead backed by your existing code and data.

## Core Concepts

- GraphQL has a clear separation of structure and behavior

  - Schema
  - Resolvers

### GraphQL SDL (schema definition language)

- GraphQL defines a schema for an API
- in that schema, we define

  - Types

    - Scalar Types (String, Int, Float, Boolean)
    - Custom Type

  - Queries (Read)
  - Mutations (Create, Update, Delete)

### Resolvers

- A GraphQL server invokes all the resolver functions for the fields specified in the query
- IOW, resolver functions will ultimately send back the data according to the schema  

### Tools

- GraphQL Server (Apollo, GraphQL Yoga)
- GraphQL Playground
- Node-Postgres to perform the queries
- Postgres Database

