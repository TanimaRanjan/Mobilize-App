import React from 'react'
import { connect }  from 'react-redux'
import { Route , Redirect } from 'react-router-dom' 
import Header from '../components/Header'


// Custom Route for load either the dashboard if data is loaded or redirect back to root for reload. 
export const CustomRoute = ({
    events,
    component: Component,
    ...rest
}) => (
    <Route {...rest}  component={(props) => (
        events.length > 0 ? (
            <div> 
               <Component {...props}/>
            </div>
        ) : (
            <Redirect to='/' />
        )   
    )}/>
)

const mapStateToProps = ({events}) => ({
    events:events.data
})


export default connect(mapStateToProps)(CustomRoute)