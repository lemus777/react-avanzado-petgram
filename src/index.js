import React from 'react'
import { createRoot } from 'react-dom/client'
import { App } from './App'
import Context from './Context'
const container = document.getElementById('app')
const root = createRoot(container)

root.render(
  <Context.Provider>
    <App />
  </Context.Provider>
)

// Así sería si funcionara vercel
// DEPENDENCIES
// import React from "react";
// import ReactDOM from "react-dom";
// import { ApolloClient, ApolloProvider, InMemoryCache } from "@apollo/client";

// APP
// import App from "./App";

// const client = new ApolloClient({
//  uri: "https://petgram-server-clgg.vercel.app/graphql",
//  cache: new InMemoryCache(),
// });

// ReactDOM.render(
//  <ApolloProvider client={client}>
//    <App />
//  </ApolloProvider>,

//  document.getElementById("App")
// );
