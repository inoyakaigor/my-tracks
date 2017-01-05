import React, {Component} from 'react'
import {bindActionCreators} from 'redux'
import {connect} from 'react-redux'
import User from '../components/User.jsx'
import Page from '../components/Page.jsx'
import Parser from '../components/Parser.jsx'
import * as pageActions from '../actions/PageActions'
import * as parserActions from '../actions/ParserActions'

class App extends Component {
  render() {
    const {user, page, parser} = this.props
    const {getPhotos} = this.props.pageActions
    const {getFileContent} = this.props.parserActions
    return <div>
      <User name={user.name}/>
      <Page photos={page.photos} year={page.year} getPhotos={getPhotos} fetching={page.fetching}/>
      <Parser geoJson={parser.geoJson} getFileContent={getFileContent} parsing={parser.parsing}/>
    </div>
  }
}

function mapStateToProps(state) {
  return {
    user: state.user,
    page: state.page,
    parser: state.parser
  }
}

function mapDispatchToProps(dispatch) {
  return {
    pageActions: bindActionCreators(pageActions, dispatch),
    parserActions: bindActionCreators(parserActions, dispatch)
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(App)