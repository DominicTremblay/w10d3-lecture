# W10D3 Advanced Lecture - Intro to GraphQL

## Content

* GraphQL
  + What is GraphQL
  + Why GraphQL

* Building an API with GraphQL
  + Demo 1: Simple Demo
  + Demo 2: Simple Demo - Modular
  + Demo 3: pulling out data from database

## What is graphQL

* GraphQL is a query language for APIs
* Gives clients the power to ask for exactly what they need and nothing more
* Developed by Facebook
* Open sourced

## Why GraphQL

* On mobile it did not make sense to pull all the data from a REST API.

  + Can perform much more flexible requests
  + Can query an API more efficiently

## GraphQL VS REST

With REST:

* REST depends on many end-points with combinations of url + verb
* You get all of the data of the end-point even if only a subset is needed
* Control on the server side

With GraphQL:

* Your using 1 url
* Client is getting only the data it needs
* The client is controlling the request

## Core Concepts

* GraphQL has a clear separation of structure and behavior
  + Schema: What are the queries and the types
  + Resolvers: How do we get the data

### GraphQL SDL (schema definition language)

* GraphQL defines a schema for an API
* in that schema, we define
  + Types
    - Scalar Types (ID, String, Int, Float, Boolean)
    - Custom Type
  + Queries (Read)
  + Mutations (Create, Update, Delete)

### Resolvers

* A GraphQL server invokes all the resolver functions for the fields specified in the query
* IOW, resolver functions will ultimately send back the data according to the schema 

## Tools

* GraphQL Server (Apollo, GraphQL Yoga)
* GraphQL Playground
* Node-postgres
* Postgresql database
