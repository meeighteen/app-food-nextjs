import { ApolloClient, InMemoryCache } from "@apollo/client";
import { registerApolloClient } from "@apollo/experimental-nextjs-app-support/rsc";
import { API_URL } from "../config";

export const { getClient } = registerApolloClient(() => {
	return new ApolloClient({
		uri: API_URL,
		cache: new InMemoryCache(),
	});
});
