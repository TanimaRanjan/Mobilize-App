import React, { useEffect } from 'react';
import { fetchMoreEvents } from '../utils/utils'
import { setEventsData } from '../actions/eventsAction'
import { connect } from 'react-redux'
import Header from './Header'
import LoadingPage from './LoadingPage'

function App(props) {

  useEffect(() => {
    fetchMoreEvents(1, props.setEventsData, props.history)
  }, [])

  return (
    <div className="App content-container">
     <Header />
     <LoadingPage />
    </div>
  );
}

const mapStateToProps = ({events}) => ({
  pageNo:events.pageNo
})

export default connect(mapStateToProps, {setEventsData})(App);
