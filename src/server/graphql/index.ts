import { ApolloServer, gql } from 'apollo-server-express';
import { GraphQLSchema } from 'graphql';
import { makeExecutableSchema, mergeSchemas } from 'graphql-tools';
import merge from 'lodash/merge';

const baseSchema = gql`
  type Query {
    hello: String
  }
`;

const helloResolvers = {
  Query: {
    hello: () => 'world',
  },
};

const helloSchema = makeExecutableSchema({
  resolvers: merge({}, helloResolvers),
  typeDefs: [baseSchema],
});

const schema: GraphQLSchema = mergeSchemas({ schemas: [helloSchema] });

export const graphQLRouter = new ApolloServer({
  context: ({ req }) => ({
    user: { username: req.user.username },
  }),
  playground: {
    settings: {
      // necessary for cookies to be sent in playground
      'request.credentials': 'same-origin',
    },
  },
  schema,
});
