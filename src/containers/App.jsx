import React, {Component} from 'react'
import {bindActionCreators} from 'redux'
import {connect} from 'react-redux'
import Parser from '../components/Parser.jsx'
import Map from '../components/Map.jsx'
import * as parserActions from '../actions/ParserActions'

class App extends Component {
  render() {
    const {parser, map} = this.props
    const {getFileContent} = this.props.parserActions
    return <div>
      <Parser geoJson={parser.geoJson} getFileContent={getFileContent} parsing={parser.parsing}/>
      <div className='google-map'>
        <Map/>
      </div>
    </div>
  }
}

function mapStateToProps(state) {
  return {
    parser: state.parser
  }
}

function mapDispatchToProps(dispatch) {
  return {
    parserActions: bindActionCreators(parserActions, dispatch)
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(App)