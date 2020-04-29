import React, { Component } from 'react'
import { Map, TileLayer, Marker, Popup } from 'react-leaflet'
import { divIcon } from 'leaflet'

export default class Map extends Component {
  state = {
    lat: 37.7749,
    lng: -122.4194,
    zoom: 13
  }
  render() {
    return (
      <div></div>
    )
  }
}