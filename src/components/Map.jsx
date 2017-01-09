import React, {Component} from 'react'
import {GoogleMap, Marker, Polyline, KmlLayer} from "react-google-maps";

export default class Map extends Component {
  render() {
    var state = {
      markers: [{
        position: {
          lat: 53.273306,
          lng: 35.693911,
        },
        key: `Stella 400-years of Oryol`,
        defaultAnimation: 2,
      }],
      features: [
                  {
                    "type":"Feature",
                    "geometry":{
                      "type":"Point",
                      "coordinates":[
                        35.68015,
                        53.275073,
                        0
                      ]
                    },
                    "properties":{
                      "name":"Разделительный маркер 1",
                      "styleUrl":"#statistics",
                      "styleHash":"-195d25f4",
                      "description":"Общее расстояние: 0,06 км (0,0 мил.)\nОбщее время: 01:00\nВремя движения: 00:32\nСредняя скорость: 3,76 км/ч (2,3 мил/ч)\nСредняя скорость при движении: 7,02 км/ч (4,4 мил/ч)\nМакс. скорость: 11,10 км/ч (6,9 мил/ч)\nСредний темп: 15:58 мин/км (25:42 мин/мил)\nСредний темп при движении: 8:33 мин/км (13:45 мин/мил)\nМаксимальный темп: 5:24 мин/км (8:42 мин/мил)\nМакс. высота: 0 м (0 фт)\nМин. высота: 0 м (0 фт)\nНабор высоты: 0 м (0 фт)\nМакс. уклон: 0 %\nМин. уклон: 0 %\nЗаписано: 02.05.2016 13:46\n"
                    }
                  },
                  {
                    "type":"Feature",
                    "geometry":{
                      "type":"Point",
                      "coordinates":[
                        35.676331,
                        53.275445,
                        0
                      ]
                    },
                    "properties":{
                      "name":"Разделительный маркер 2",
                      "styleUrl":"#statistics",
                      "styleHash":"-195d25f4",
                      "description":"Общее расстояние: 0,25 км (0,2 мил.)\nОбщее время: 01:00\nВремя движения: 00:39\nСредняя скорость: 15,17 км/ч (9,4 мил/ч)\nСредняя скорость при движении: 22,80 км/ч (14,2 мил/ч)\nМакс. скорость: 26,12 км/ч (16,2 мил/ч)\nСредний темп: 3:57 мин/км (6:22 мин/мил)\nСредний темп при движении: 2:38 мин/км (4:14 мин/мил)\nМаксимальный темп: 2:18 мин/км (3:42 мин/мил)\nМакс. высота: 0 м (0 фт)\nМин. высота: 0 м (0 фт)\nНабор высоты: 0 м (0 фт)\nМакс. уклон: 0 %\nМин. уклон: 0 %\nЗаписано: 02.05.2016 13:47\n"
                    }
                  }
                ]
    }
    /*
     * 2. Render GoogleMap component with containerProps
     */
    return (
      <GoogleMap
        containerProps={{
          ...this.props,
          style: {
            height: `100%`,
          },
        }}
        /*
         * 3. config <GoogleMap> instance by properties
         */
        defaultZoom={13}
        defaultCenter={{ lat: 53.273306, lng: 35.693911 }}
      >
      {/*state.features.map((feature, index) => {
              let coordinates = [feature.geometry.coordinates[1],
                                 feature.geometry.coordinates[0]]
              console.log('C',coordinates)
              return (
                //<Marker
                //  {...marker}
                  // onClick={() => alert(1)} />
                  <Polyline key={index} path={coordinates} />
              );
            })*/}
            <KmlLayer
          url="http://localhost/kml.kml"/>
      </GoogleMap>
    );
  }
}
