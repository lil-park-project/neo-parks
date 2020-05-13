const { db } = require('../pgAdaptor')
// const { GraphQLObjectType, GraphQLID } = require('graphql')
const { makeExecutableSchema } = require('graphql-tools')
const { typeDefs } = require('./types')

const resolvers = {
  Query: {
    parks: () => {
      db.connect()
      return db
        .query('SELECT * FROM parks')
        .then((res) => res.rows)
        .catch((err) => console.error(err))
        .finally(() => db.end())
    },
  },
}

// const RootQuery = new GraphQLObjectType({
//   name: 'RootQueryType',
//   type: 'Query',
//   fields: {
//     project: {
//       type: ProjectType,
//       args: { id: { type: GraphQLID } },
//       resolve (parentValue, args) {
//         const query = 'SELECT * FROM project WHERE id=$1'
//         const values = [args.id]

//         return db
//           .one(query, values)
//           .then((res) => res)
//           .catch((err) => err)
//       }
//     },
//     user: {
//       type: UserType,
//       args: { id: { type: GraphQLID } },
//       resolve (parentValue, args) {
//         const query = 'SELECT * FROM users WHERE id=$1'
//         const values = [args.id]

//         return db
//           .one(query, values)
//           .then((res) => res)
//           .catch((err) => err)
//       }
//     }
//   }
// })
exports.schema = makeExecutableSchema({
  typeDefs,
  resolvers,
})
