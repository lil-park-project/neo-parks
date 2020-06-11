// const graphql = require('graphql')
const { db } = require('./database/pgAdaptor');
const express = require('express');
const expressGraphQl = require('express-graphql');
// const { GraphQLSchema } = graphql
const { schema } = require('./database/schemas/query');
// const { mutation } = require('./database/schemas/mutation')

// const schema = new GraphQLSchema({
//   query,
//   mutation,
// })

const app = express();

app.use(
  '/',
  expressGraphQl({
    schema: schema,
    graphiql: true,
  })
);

app.listen(5000, () => console.log('GraphQL server running on localhost:5000'));
