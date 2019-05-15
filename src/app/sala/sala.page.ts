import { Component, OnInit, ViewChild } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { RoomService } from '../room.service';
import { IonRange } from '@ionic/angular';

@Component({
  selector: 'app-sala',
  templateUrl: './sala.page.html',
  styleUrls: ['./sala.page.scss'],
})
export class SalaPage implements OnInit {
  @ViewChild(IonRange) rang :IonRange
  sala = {}
  temp: any;

  constructor( public route: ActivatedRoute, public rs: RoomService) { 
    console.log( route.snapshot.params[('name')])
    this.rs.salas.forEach(e =>{
      if(e["sala"] === route.snapshot.params[('name')] ){
        this.sala = e
      }
    })
    this.temp = this.sala['tmp']
    console.log(this.sala)
  }

  ngOnInit() {
  }

  cambio(){
    this.temp = this.rang.value;
    //console.log(this.rang.value)
  }

}
