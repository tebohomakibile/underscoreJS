import { Component, OnInit } from '@angular/core';
import * as _ from 'underscore';

@Component({
  selector: 'app-map',
  templateUrl: './map.component.html',
  styleUrls: ['./map.component.scss']
})
export class MapComponent implements OnInit {

  constructor() { }

  positions: number[] = [2, 4 ,6 , 8, 10]
  names: string[] = []

  productPositions(){
    let productArray = _.map(this.positions, function(value, index){
      if(index % 2 == 0 && index > 0){
        value = value * 2;
      }

      return value;
    });

    console.log(productArray);
  }

  ngOnInit() {
    this.productPositions();
  }
    

}
