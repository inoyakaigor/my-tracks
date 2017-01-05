import React, {Component} from 'react'

export default class Page extends Component {
  onYearBtnClick(e) {
    this.props.getPhotos(+e.target.innerText)
  }
  render() {
    const {year, photos, fetching} = this.props
    return <div>
      <button onClick={::this.onYearBtnClick}>2016</button>
      <button onClick={::this.onYearBtnClick}>2015</button>
      <h3>{year} год</h3>
      {
       fetching
       ? 'Загрузка…'
       : <p>У тебя {photos.length} фотографий</p>
      }
    </div>
  }
}