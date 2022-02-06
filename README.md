# 🚀 Speedstack template

A template for developing fast fullstack web apps.

## Stuff used

### Backend

Language **Rust**

| Stuff   | Description                  |
| ------- | ---------------------------- |
| Actix   | Web framework                |
| Juniper | GraphQL library              |
| Diesel  | Database ORM with PostgreSQL |

_basically the same as my [rust-graphql-template](https://github.com/primozpadar/rust-graphql-template)_

### Frontend

Language **Typescript**

| Stuff            | Description     |
| ---------------- | --------------- |
| NextJS           | React framework |
| Apollo           | GraphQL client  |
| Styled component | CSS 'framework' |

## Setup

1. Create `.env` file and add environmental variables like in `.env.example`

2. Install [Docker](https://docs.docker.com/get-docker/)

3. Spin up everything (it might take a while since)

```
docker-compose up
```

_(currently hot reload only works in frontent - I don't know how exacly to set up hot reloading for backend)_
