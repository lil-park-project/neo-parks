// const graphql = require('graphql');
// const { GraphQLObjectType, GraphQLString } = graphql;

const typeDefs = [
  `type Park {
    id: ID
    parkname: String
    parktype: ParkType
    parkcounty: County
    totalmiles: Float
    weburl: String
    petlaws: String
    features: String
  }`,
  `type County {
    id: ID
    county: String
  }`,
  `type ParkType {
    id: ID
    parktype: String
  }`,
  `type Trails {
    id: ID
    park: Park
    trailname: String
    traillength: Int
    difficulty: String
    elevation: Int
    features: String
  }`,
  `type Query {
    parks: [Park]
  }`,
];
// park(id: Int): Park

exports.typeDefs = typeDefs;
