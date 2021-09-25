import React,{Fragment} from 'react';
import { Header, Navbar,About, Booking,Auth} from './components'
import CssBaseline from '@material-ui/core/CssBaseline';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import {
    ApolloClient,
    InMemoryCache,
    ApolloProvider,
    HttpLink,
    from,
} from '@apollo/client';
import { onError } from "@apollo/client/link/error"

const errorLink = onError(({ graphqlErrors, networkError }) => {
    if(graphqlErrors) {
        graphqlErrors.map(({message,location,path}) => {
            alert(`Graphql error ${message}`);
        })
    }
})

const link = from([
    errorLink,
    new HttpLink({uri: "http://localhost:5000/graphql" })
])

const client = new ApolloClient({
    cache: new InMemoryCache(),
    link: link
})

const App = () => {
    return (
        <ApolloProvider client={client}>
            <Router>
                <CssBaseline />
                <Switch>
                    <Route exact path="/admin" component={Auth} />
                    <Fragment>
                    <Navbar />
                    <Route exact path="/" component={Header} />
                    <Route exact path="/about" component={About} />
                    <Route exact path="/book" component={Booking} />
                    </Fragment>
                </Switch>
            </Router>
        </ApolloProvider>
    )
}

export default App
