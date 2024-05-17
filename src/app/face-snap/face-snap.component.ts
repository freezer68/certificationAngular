import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-face-snap',
  templateUrl: './face-snap.component.html',
  styleUrls: ['./face-snap.component.scss']
})
export class FaceSnapComponent implements OnInit {
title!:string;
description!:string;
createdDate!:Date;
snaps!:number;
imageuUrl!:string;

ngOnInit() {

  this.title = 'Archibald';
  this.description = 'Une peluche';
  this.createdDate = new Date();
  this.snaps = 6;
  this.imageuUrl = 'https://media.gqmagazine.fr/photos/5f43c83a03a812dcf4928d57/16:9/w_2560%2Cc_limit/GQ142_COM_144-1.jpg';  
}
}
