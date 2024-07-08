const { gql } = require('apollo-server-express');

const typeDefs = gql`
  type User {
  id: ID!
  name: String!
  email: String!
  password: String!
}

type Query {
  getUsers(id: ID!): User
}

type Mutation {
  createUser(input: CreateUserInput!): User
  changePass(input: UpdateUserInput!): User
}

input CreateUserInput {
  name: String!
  email: String!
  password: String!
}

input UpdateUserInput {
  id: ID!
  password: String!
}
`;

module.exports = typeDefs; // export schema
