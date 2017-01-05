import {
  FILE_START_PARSE,
  FILE_PARSED
} from '../constants/Parser'

const initialState = {
  geoJson: {},
  parsing: false
}

export default function parser(state = initialState, action) {
  switch (action.type) {
    case FILE_START_PARSE:
      return {...state, geoJson: {}, parsing: true}
    case FILE_PARSED:
      return {...state, geoJson: action.payload, parsing: false}
    default:
      return state
  }
}