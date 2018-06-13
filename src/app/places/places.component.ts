import { Component, OnInit } from '@angular/core';
import { Place } from '../place';
import { PLACES } from '../mock-places';
import  ReactMap  from './react-map';

@Component({
  selector: 'app-places',
  templateUrl: './places.component.html',
  styleUrls: ['./places.component.css']
})
export class PlacesComponent implements OnInit {
  places: Place[] = PLACES;
  selectedPlace: Place;
  constructor() { }

  ngOnInit() {
     ReactMap.initialize({
       lat:50,
       lng:20,
       zoom:14,
       onClick:(coords)=>console.log('coords from angular component', coords) });
  }

  onSelect(place:Place):void{
    this.selectedPlace = place;
  }

  // TODO ngDestroy i jak to pożenic z component will unmount :)

}
