const { gql } = require('apollo-server-express')

const typeDefs = gql`
    type Query {
        dates:[PostDate!]!
    }

    type PostDate {
        id: ID!,
        barber: String!,
        time: String!,
        date: String!,
        email: String!,
        customer: String!,
        phone: String!,
    }

    type Mutation{
        createDate(barber:String!,time:String!,date:String!,email: String!,customer: String!,phone: String!): PostDate!
    }
`;

module.exports = { typeDefs }