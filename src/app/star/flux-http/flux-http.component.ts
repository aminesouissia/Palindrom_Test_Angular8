import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import SampleJson from './../../../assets/flux.json';
import { item } from 'src/assets/object/item.model.js';

@Component({
  selector: 'app-flux-http',
  templateUrl: './flux-http.component.html',
  styleUrls: ['./flux-http.component.scss']
})
export class FluxHttpComponent implements OnInit {
  public itemListResponse: item[] = [];


  constructor() {
  console.log('Reading local json files');
  console.log(SampleJson);

  // tslint:disable-next-line:prefer-for-of
  for (let i = 0; i < SampleJson.length; i++) {
          console.log(SampleJson[i].id);
          let object = new item;
          object.id = SampleJson[i].id ;
          object.label = SampleJson[i].label ;
          object.ok = SampleJson[i].label.split('').reverse().join('') === SampleJson[i].label ;
          this.itemListResponse.push(object);
          console.log(this.itemListResponse);
       }
 }
  ngOnInit() {

  }

}
