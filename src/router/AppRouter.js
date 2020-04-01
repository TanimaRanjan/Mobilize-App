import React from 'react'
import { Router, Route, Switch } from 'react-router-dom'
import App from '../components/App'
import EventsDashboard from '../components/EventsDashboard'
import EventDetailPage from '../components/EventDetailPage'
import NotFoundPage from '../components/NotFoundPage'
import ErrorPage from '../components/ErrorPage'
import CustomRoute from '../router/CustomRoute'

const createHistory = require('history').createBrowserHistory
export const history = createHistory()

const AppRouter = () => (
    <Router onUpdate={() => window.scrollTo(0, 0)}  history={history}>
        <Switch>
            <Route exact path='/' component={App} />
            <CustomRoute exact path='/events' component={EventsDashboard} />
            <Route path='/event/:id' component={EventDetailPage} />
            <Route path='/error' component={NotFoundPage} />
            <Route component={NotFoundPage} />
        </Switch>    
    </Router>
)

export default AppRouter