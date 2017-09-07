import React from 'react'
import { Router, Route, browserHistory } from 'react-router'

import Home from './Home'

class Routes extends React.Component {
  render() {
    return <Router onUpdate={() => window.scrollTo(0, 0)} history={browserHistory}>
            <Route path="/" component={Home} />
        </Router>
  }
}

export default Routes
