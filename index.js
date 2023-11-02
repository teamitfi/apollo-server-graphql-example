import { ApolloServer } from "@apollo/server";

import { startStandaloneServer } from '@apollo/server/standalone';

import { typeDefs } from './schema.js'
import db from './_db.js'

const resolvers = {
    Query: {
        /*
            games {
                title
                platform
                id 
            }
        */
        games() {
            return db.games;
        },
        authors() {
            return db.authors;
        },
        reviews() {
            return db.reviews;
        },
    },
};



const server = new ApolloServer({
    typeDefs,
    resolvers
})

const { url } = await startStandaloneServer(server, { listen: { port: 4000 } })

console.log('server started at: 4000', url)