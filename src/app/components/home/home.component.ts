import { Component, OnInit } from '@angular/core';
import { environment } from 'src/environments/environment';
import * as Mapboxgl from 'mapbox-gl';
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  map: Mapboxgl.map;
  // se declara aca para que tenga alcance goblay y se pueda llamar en el metodo
  constructor() { }

  ngOnInit() {

    Mapboxgl.accessToken = environment.mapBoxKey;
    this.map = new Mapboxgl.Map({
      container: 'mapa-mapbox', // container id
      style: 'mapbox://styles/mapbox/streets-v11',
      center: [-89.2345, 13.4556], // starting position
      zoom: 7.2 // starting zoom
    });

  }

  createMarker(Lng: number = -89.2182, Lat: number = 13.6929) {

    const marker = new Mapboxgl.Marker({
      draggable: true
    })
      .setLngLat([Lng, Lat])
      .addTo(this.map);
  }

}
