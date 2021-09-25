const express = require('express');
const { ApolloServer,gql } = require('apollo-server-express');
const {typeDefs} = require('./typeDefs')
const {resolvers} = require('./resolvers')
const mongoose = require('mongoose');
const cors = require("cors");


const app = express();
app.use(cors())

const PORT = process.env.PORT || 5000;

mongoose.connect('mongodb+srv://zile:123@cluster0.h1ssw.mongodb.net/myFirstDatabase?retryWrites=true&w=majority', {useNewUrlParser: true, useUnifiedTopology: true})
    .then(() => app.listen(5000, () => console.log(`Server running on http://localhost:${PORT}${server.graphqlPath}`)))
    .catch((error) => console.log(error.message));

mongoose.set('useFindAndModify', false);


const server = new ApolloServer({
    typeDefs,
    resolvers,
});

server.applyMiddleware({ app });




