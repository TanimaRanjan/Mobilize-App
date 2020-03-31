import React from 'react'
import { Router, Route, Switch } from 'react-router-dom'
import App from '../components/App'
import NotFoundPage from '../components/NotFoundPage'

const createHistory = require('history').createBrowserHistory
export const history = createHistory()

const AppRouter = () => (
    <Router history={history}>
        <Switch>
            <Route exact path='/' component={App} />
            <Route component={NotFoundPage} />
        </Switch>    
    </Router>
)

export default AppRouter