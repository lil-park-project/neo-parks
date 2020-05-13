const graphql = require('graphql')
const { GraphQLObjectType, GraphQLString } = graphql

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
  }`
]
// park(id: Int): Park

// const Types = {
//   parks: new GraphQLObjectType({
//     name: 'Park',
//     type: 'Query',
//     fields: {
//       id: { type: GraphQLString },
//       parkName: { type: GraphQLString },
//       parkCounty: { type: GraphQLString },
//       totalMiles: { type: GraphQLString },
//       webURL: { type: GraphQLString },
//       petLaws: { type: GraphQLString },
//       features: { type: GraphQLString },
//     },
//   }),
//   parkCounty: new GraphQLObjectType({
//     name: 'County',
//     type: 'Query',
//     fields: {
//       id: { type: GraphQLString },
//       county: { type: GraphQLString },
//     },
//   }),
//   parkType: new GraphQLObjectType({
//     name: 'Type',
//     type: 'Query',
//     fields: {
//       id: { type: GraphQLString },
//       parkType: { type: GraphQLString },
//     },
//   }),
//   trails: new GraphQLObjectType({
//     name: 'Trails',
//     type: 'Query',
//     fields: {
//       id: { type: GraphQLString },
//       park: { type: GraphQLString },
//       trailName: { type: GraphQLString },
//       trailLength: { type: GraphQLString },
//       difficulty: { type: GraphQLString },
//       elevation: { type: GraphQLString },
//       features: { type: GraphQLString },
//     },
//   }),
// }

// const UserType = new GraphQLObjectType({
//   name: 'User',
//   type: 'Query',
//   fields: {
//     id: { type: GraphQLString },
//     username: { type: GraphQLString },
//     email: { type: GraphQLString },
//     joined: { type: GraphQLString },
//     last_logged_in: { type: GraphQLString },
//   },
// })

// const ProjectType = new GraphQLObjectType({
//   name: 'Project',
//   type: 'Query',
//   fields: {
//     id: { type: GraphQLString },
//     creator_id: { type: GraphQLString },
//     created: { type: GraphQLString },
//     title: { type: GraphQLString },
//     description: { type: GraphQLString },
//   },
// })
// exports.UserType = UserType
// exports.ProjectType = ProjectType
// exports.Types = Types

exports.typeDefs = typeDefs
