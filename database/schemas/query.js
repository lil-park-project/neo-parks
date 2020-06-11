// const { db } = require('../pgAdaptor');
// const { nestObjectShape } = require('graphql');
// const { makeExecutableSchema } = require('graphql-tools');
// const { typeDefs } = require('./types');

// const resolvers = {
//   Query: {
//     parks: () =>
//       db.connect().then((client) => {
//         const query = {
//           text: `SELECT P.parkName, T.parkType, C.county, P.totalMiles, P.webURL, P.petLaws, P.features
//           FROM parks P
//           JOIN parkType T ON P.parkType=T.ID
//           JOIN parkCounty C ON P.parkCounty=C.ID`,
//         };
//         return client
//           .query(query)
//           .then((res) => {
//             client.release();
//             console.log(res.rows);
//             return res.rows;
//           })
//           .catch((err) => {
//             client.release();
//             console.error(err);
//           });
//       }),
//   },
// };

// exports.schema = makeExecutableSchema({
//   typeDefs,
//   resolvers,
// });
