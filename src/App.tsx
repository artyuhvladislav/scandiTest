import React from 'react';
import { ApolloClient, InMemoryCache, ApolloProvider } from '@apollo/client';
import './App.scss';
import { Header } from './components';
import { BASE_URL } from './constants';
import { Route, Routes } from 'react-router-dom';
import { ProductPageContainer, HomePageContainer } from './containers';

const client = new ApolloClient({
  uri: BASE_URL,
  cache: new InMemoryCache(),
});
class App extends React.Component {
  render() {
    return (
      <ApolloProvider client={client}>
        <div className="container">
          <Header />
          <Routes>
            <Route path="/*" element={<HomePageContainer />} />
            <Route path="/id/*" element={<ProductPageContainer />} />
          </Routes>
        </div>
      </ApolloProvider>
    );
  }
}

export default App;
