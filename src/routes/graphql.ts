import { gql, ApolloServer } from 'apollo-server-svelte-kit';

const handler = async (req) => {
	const apolloServer = new ApolloServer({
		typeDefs: gql`
			type Query {
				hello: String!
			}
		`,
		resolvers: {
			Query: {
				hello: () => 'pong'
			}
		}
	});
	await apolloServer.start();
	const resp = await apolloServer.handleRequest(req);
	apolloServer.stop();
	return resp;
};

export const head = handler;
export const get = handler;
export const post = handler;
