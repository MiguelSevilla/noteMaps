import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { loadModules } from 'esri-loader';

import esri = __esri;

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{

  @ViewChild('mapViewNode') private mapViewEl: ElementRef;

  public ngOnInit() {

    loadModules([
      'esri/Map',
      'esri/views/MapView'
    ]).then(([EsriMap, EsriMapView]) => {


      // Set type of map
      const mapProperties: esri.MapProperties = {
        basemap: 'streets'
      };

      const map: esri.Map = new EsriMap(mapProperties);
      console.log(this);

      // Set type of map view
      const mapViewProperties: esri.MapViewProperties = {
        container: this.mapViewEl.nativeElement,
        center: [-3.74922, 40.463667],
        zoom: 6,
        map: map
      };
      

      const mapView: esri.MapView = new EsriMapView(mapViewProperties);
    });
  } // ngOnInit
}