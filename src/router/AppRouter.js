import React from 'react'
import { Router, Route, Switch } from 'react-router-dom'
import App from '../components/App'
import EventsDashboard from '../components/EventsDashboard'
import EventDetailPage from '../components/EventDetailPage'
import NotFoundPage from '../components/NotFoundPage'

const createHistory = require('history').createBrowserHistory
export const history = createHistory()

const AppRouter = () => (
    <Router history={history}>
        <Switch>
            <Route exact path='/' component={App} />
            <Route exact path='/events' component={EventsDashboard} />
            <Route path='/event/:id' component={EventDetailPage} />
            <Route component={NotFoundPage} />
        </Switch>    
    </Router>
)

export default AppRouter