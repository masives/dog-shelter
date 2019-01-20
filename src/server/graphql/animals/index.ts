// import * as graphqlObjectId from 'graphql-json-object-type';
import { gql } from 'apollo-server-express';
import { IResolvers, makeExecutableSchema } from 'graphql-tools';
import {
  createAnimal,
  findAnimalById,
  findAnimals,
  removeAnimal,
  updateAnimal,
} from '../../resources/animalRepository';

const animalTypeDefs: string = gql`
  type Animal {
    id: String!
    name: String!
    age: Int!
    race: String!
    livingPlace: String!
    status: String!
    photo: String!
    description: String
  }

  input AnimalSearchCriteria {
    name: String
    age: Int
    race: String
    livingPlace: String
    status: String
    photo: String
    description: String
  }

  input NewAnimal {
    name: String!
    age: Int!
    race: String!
    livingPlace: String!
    status: String!
    photo: String!
    description: String
  }

  input AnimalUpdate {
    name: String
    age: Int
    race: String
    livingPlace: String
    status: String
    photo: String
    description: String
  }

  type Query {
    getAnimal(id: String!): Animal
    getAnimals(input: AnimalSearchCriteria): [Animal!]!
  }

  type Mutation {
    removeAnimal(id: String!): Animal
    updateAnimal(id: String!, input: AnimalUpdate!): Animal
    createAnimal(input: NewAnimal!): Animal!
  }
`;

const createAnimalResolver = (_, { input }) => createAnimal(input);
const getAnimal = (_, { id }) => findAnimalById(id);
const getAnimals = (_, { input }) => findAnimals(input);
const updateAnimalResolver = (_, { id, input }) => updateAnimal(id, input);
const removeAnimalResolver = (_, { id }) => removeAnimal(id);

const animalsResolvers: IResolvers = {
  Mutation: {
    createAnimal: createAnimalResolver,
    removeAnimal: removeAnimalResolver,
    updateAnimal: updateAnimalResolver,
  },
  Query: {
    getAnimal,
    getAnimals,
  },
};

const AnimalsSchema = makeExecutableSchema({
  resolvers: animalsResolvers,
  typeDefs: animalTypeDefs,
});

export default AnimalsSchema;
