import {
  FILE_START_PARSE,
  FILE_PARSED
} from '../constants/Parser'
import {kml} from 'togeojson-with-extended-style'

export function getFileContent(event) {
  return (dispatch) => {
    var reader = new FileReader()
    const file = event.target.files[0]

    reader.onloadstart = function(event) {
      console.log('Загрузка файла %c' + file.name, 'font-weight: bold; color: rgb(240, 255, 0); font-size: 1.3em; font-style: italic')
      dispatch({
        type: FILE_START_PARSE,
        payload: file.name,
        parsing: true
      })
    }

    reader.onloadend = function(event) {
      var dom = (new DOMParser()).parseFromString(event.target.result, 'text/xml')
      var geoJson = kml(dom)
      dispatch({
        type: FILE_PARSED,
        payload: geoJson,
        parsing: false
      })
    }
    reader.readAsText(file)
  }
}