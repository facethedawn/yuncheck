import React from 'react'
import { BrowserRouter as Router, Route } from 'react-router-dom'
import Index from './pages/Index'
import List from './pages/List'
import PrivacyDoc from './pages/PrivacyDoc/PrivacyDoc'
import DocEnter from './pages/DocEnter/DocEnter'
import RegDoc from './pages/RegDoc/RegDoc'
const AppRouter  = () => {
  return(
    <Router>
      <Route path="/" exact component={Index} />
      <Route path="/list/" component={List} />
      <Route path="/privacy-doc/" component={ PrivacyDoc } />
      <Route path="/doc-enter/" component={ DocEnter } />
      <Route path="/reg-doc/" component={ RegDoc } />
    </Router>
  )
}

export default AppRouter