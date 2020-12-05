import React from 'react';
import { ApolloClient, InMemoryCache, ApolloProvider } from '@apollo/client';
import Sharks from "./pages/Sharks";

const client = new ApolloClient({
  uri: 'http://localhost:4000/graphql',
  cache: new InMemoryCache()
});

function App() {
  return (
    <ApolloProvider client={client}>
      <div>
        <h2>Awesome shark movies database 🦈</h2>
        <Sharks/>
      </div>
    </ApolloProvider>
  );
}

export default App;
