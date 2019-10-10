import { Component, OnInit } from '@angular/core';
import * as _ from 'underscore';

@Component({
  selector: 'app-each',
  templateUrl: './each.component.html',
  styleUrls: ['./each.component.scss']
})
export class EachComponent implements OnInit {

  constructor() { }

  users: string[] = ['Jack', 'Bill', 'Joe', 'Dina'];

  userObj = {name: 'Thabang', surname: 'Lesole', age: 19}

  userArrObj = [{name: 'Teboho', surname: 'Makibile', age: 29},
  {name: 'Karabo', surname: 'Mokoena', age: 32},
  {name: 'Thabiso', surname: 'Sikwane', age: 47},
  {name: 'Daniel', surname: 'Babalwa', age: 29}
]

  manipulateArray(){
    _.each(this.users, function(user, index){
      // console.log("Array Value",user);
      // console.log("Index", index);

      if(index == 2){
        console.log( user + " Makibile");
      }

    });
  }

  manipulateObject(){
    _.each(this.userObj, function(value, index){
      console.log(value);

    });
  }

  manupilateArrObj(){
    _.each(this.userArrObj, function(value, index){

      // if(index != 1){
      //   value.surname = "Khambule"
      // }
      if(index == 1)
      {
        value.surname = "Khambule"
        
      }
      console.log(value);
    });
  }

  ngOnInit() {
    // this.manipulateArray();
    // this.manipulateObject();

    this.manupilateArrObj();
  }

}
