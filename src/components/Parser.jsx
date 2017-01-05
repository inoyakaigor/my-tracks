import React, {Component} from 'react'

export default class Parser extends Component {
  handleFileSelect(event) {
    this.props.getFileContent(event)
  }
  render() {
    const {geoJson, parsing} = this.props
    return <div>
      <input type="file" id="file" name="file" onChange={::this.handleFileSelect}/>
      <pre className="geojson">
        {
          parsing
          ? 'Разбор файла…'
          : JSON.stringify(geoJson)
        }
      </pre>
    </div>
  }
}