import { ApolloClient, createNetworkInterface } from 'react-apollo';
import { SubscriptionClient, addGraphQLSubscriptions } from 'subscriptions-transport-ws';
import fetch from 'isomorphic-fetch';

let apolloClient = null;

// Polyfill fetch() on the server (used by apollo-client)
if (!process.browser) {
  global.fetch = fetch;
}

function create(initialState, networkInterface) {
  return new ApolloClient({
    initialState,
    ssrMode: !process.browser, // Disables forceFetch on the server (so queries are only run once)
    networkInterface,
  });
}

export default function initApollo(initialState) {
  // Make sure to create a new client for every server-side request so that data
  // isn't shared between connections (which would be bad)
  const networkInterface = createNetworkInterface({
    uri: 'https://api.graph.cool/simple/v1/pepper', // Server URL (must be absolute)
    opts: {
      credentials: 'same-origin',
    },
  });

  if (!process.browser) {
    return create(initialState, networkInterface);
  }

  // Reuse client on the client-side
  if (!apolloClient) {
    const networkInterfaceWithSubscriptions = addGraphQLSubscriptions(
      networkInterface,
      new SubscriptionClient('wss://subscriptions.graph.cool/v1/pepper', {
        reconnect: true,
      }),
    );
    apolloClient = create(initialState, networkInterfaceWithSubscriptions);
  }

  return apolloClient;
}
