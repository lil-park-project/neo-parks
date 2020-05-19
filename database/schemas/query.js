const { db } = require('../pgAdaptor');
// const { GraphQLObjectType, GraphQLID } = require('graphql')
const { makeExecutableSchema } = require('graphql-tools');
const { typeDefs } = require('./types');

const resolvers = {
  Query: {
    parks: () =>
      db.connect().then((client) =>
        client
          .query('SELECT * FROM parks')
          .then((res) => {
            client.release();
            return res.rows;
          })
          .catch((err) => {
            client.release();
            console.error(err);
          })
      ),
  },
};

exports.schema = makeExecutableSchema({
  typeDefs,
  resolvers,
});
